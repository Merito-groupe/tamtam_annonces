-- ============================================================================
-- TamTam Annonces — sécurisation de la table « sponsor_requests »
--
-- À exécuter dans : Supabase Dashboard > SQL Editor (rôle postgres)
-- Objectif : autoriser UNIQUEMENT l'insertion anonyme (formulaire public),
--            et bloquer toute lecture / modification / suppression côté client.
-- ============================================================================

-- 1) Activer la RLS sur la table
alter table public.sponsor_requests enable row level security;

-- 2) Supprimer les politiques par défaut trop permissives, si elles existent
drop policy if exists "Enable read access for all users"  on public.sponsor_requests;
drop policy if exists "Enable insert for all users"       on public.sponsor_requests;
drop policy if exists "Enable update for all users"       on public.sponsor_requests;
drop policy if exists "Enable delete for all users"       on public.sponsor_requests;
drop policy if exists "Public read access"                on public.sponsor_requests;

-- 3) La date de création est désormais gérée par la base (plus par le client)
alter table public.sponsor_requests
  alter column created_at set default now();

-- 4) Seule autorisation accordée au public : insérer une demande valide
drop policy if exists "sponsor_requests_insert_anon" on public.sponsor_requests;

create policy "sponsor_requests_insert_anon"
on public.sponsor_requests
for insert
to anon
with check (
      char_length(trim(company_name)) between 2 and 120
  and char_length(trim(contact_name)) between 2 and 120
  and char_length(trim(sector))       between 2 and 120
  and char_length(trim(email))        between 5 and 160
  and email like '%_@_%.__%'
  and char_length(trim(phone))        between 6 and 20
  and (message is null or char_length(message) <= 2000)
);

-- 5) Aucune politique select / update / delete pour « anon » :
--    ces opérations sont donc refusées par défaut.
--    La consultation des demandes se fait côté serveur avec la clé
--    service_role (Edge Function) ou dans le dashboard Supabase.

-- ============================================================================
-- VÉRIFICATION
-- ============================================================================

-- RLS activée ? (relrowsecurity doit être à true)
select relname, relrowsecurity
from pg_class
where relname = 'sponsor_requests';

-- Politiques en place (doit lister uniquement sponsor_requests_insert_anon)
select policyname, cmd, roles
from pg_policies
where schemaname = 'public' and tablename = 'sponsor_requests';
