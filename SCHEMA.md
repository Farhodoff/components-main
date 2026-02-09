# Database Schema

This project uses **Supabase** for the backend (Database & Auth).
Run the following SQL in your Supabase SQL Editor to set up the necessary tables.

## 1. Profiles Table (Auth)
Stores user profile information, automatically created via trigger on signup.

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 2. Tasks Table (Kanban)
Stores tasks for the Kanban board.

```sql
create table tasks (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  status text check (status in ('todo', 'in-progress', 'done')) default 'todo',
  tag text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users
);

alter table tasks enable row level security;

create policy "Users can CRUD their own tasks" on tasks
  for all using (auth.uid() = user_id);
```

## 3. Payments Table (Data Grid)
Stores payment records for the Data Table.

```sql
create table payments (
  id uuid default uuid_generate_v4() primary key,
  amount numeric,
  status text check (status in ('pending', 'processing', 'success', 'failed')),
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert dummy data (Optional)
insert into payments (amount, status, email) values 
(100, 'success', 'm@example.com'),
(50, 'pending', 'test@test.com'),
(200, 'processing', 'user@domain.com');
```
