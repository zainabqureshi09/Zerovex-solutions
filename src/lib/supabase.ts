import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client using non-public env vars (safe for API routes only)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials are not set. Please define SUPABASE_URL and SUPABASE_ANON_KEY in .env.local'
  );
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
