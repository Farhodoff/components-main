import { createClient } from '@supabase/supabase-js'

const envUrl = import.meta.env.VITE_SUPABASE_URL
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(envUrl && envAnonKey)

if (!isSupabaseConfigured) {
    console.warn(
        'Missing Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY). Authentication and cloud backend features will be simulated or disabled. Add them to your .env file to enable Supabase.'
    )
}

// Fallback to valid placeholder URL and key to prevent createClient from throwing uncaught "supabaseUrl is required" error
const supabaseUrl = envUrl || 'https://placeholder-project.supabase.co'
const supabaseAnonKey = envAnonKey || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
