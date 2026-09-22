create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'user' check (role in ('user', 'admin', 'poweruser', 'superuser')),
  created_at timestamptz not null default now()
);

alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('user', 'admin', 'poweruser', 'superuser'));

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email)
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'poweruser', 'superuser')
  );
$$;

create or replace function public.is_poweruser()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('poweruser', 'superuser')
  );
$$;

create or replace function public.is_superuser()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'superuser'
  );
$$;

create table if not exists public.master_data (
  id integer primary key default 1 check (id = 1),
  payload jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.records (
  id text primary key,
  user_id uuid not null references auth.users(id),
  payload jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.master_data enable row level security;
alter table public.records enable row level security;

drop policy if exists "profiles own row" on public.profiles;
create policy "profiles own row" on public.profiles
  for select to authenticated using (id = auth.uid() or public.is_superuser());

drop policy if exists "superusers manage profiles" on public.profiles;
create policy "superusers manage profiles" on public.profiles
  for update to authenticated
  using (public.is_superuser())
  with check (role in ('user', 'admin', 'poweruser', 'superuser'));

drop policy if exists "authenticated read master" on public.master_data;
create policy "authenticated read master" on public.master_data
  for select to authenticated using (true);

drop policy if exists "admins write master" on public.master_data;
create policy "admins write master" on public.master_data
  for all to authenticated using (public.is_poweruser()) with check (public.is_poweruser());

drop policy if exists "authenticated read records" on public.records;
create policy "authenticated read records" on public.records
  for select to authenticated using (true);

drop policy if exists "users write records" on public.records;
create policy "users write records" on public.records
  for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "users update own records admins all" on public.records;
create policy "users update own records admins all" on public.records
  for update to authenticated
  using (user_id = auth.uid() or public.is_admin())
  with check (user_id = auth.uid() or public.is_admin());

drop policy if exists "users delete own records admins all" on public.records;
create policy "users delete own records admins all" on public.records
  for delete to authenticated using (user_id = auth.uid() or public.is_admin());

insert into storage.buckets (id, name, public)
values ('holiday-photos', 'holiday-photos', false)
on conflict (id) do update set public = false;

drop policy if exists "authenticated upload holiday photos" on storage.objects;
create policy "authenticated upload holiday photos" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'holiday-photos' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "authenticated read holiday photos" on storage.objects;
create policy "authenticated read holiday photos" on storage.objects
  for select to authenticated
  using (bucket_id = 'holiday-photos' and (owner_id = auth.uid()::text or public.is_admin()));

drop policy if exists "users delete own holiday photos admins all" on storage.objects;
create policy "users delete own holiday photos admins all" on storage.objects
  for delete to authenticated
  using (bucket_id = 'holiday-photos' and (owner_id = auth.uid()::text or public.is_admin()));

-- หลังสร้างผู้ใช้ Admin คนแรก ให้รันคำสั่งนี้ใน SQL Editor:
-- update public.profiles set role = 'superuser' where email = 'admin@example.com';
