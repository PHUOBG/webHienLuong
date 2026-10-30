import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lalfiwtlhxbdabtoaskf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhbGZpd3RsaHhiZGFidG9hc2tmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNDkzOTAsImV4cCI6MjEwODkyNTM5MH0.5mIUT5f0z9ttGL5_miNOTUakABWXER_vDHwJr9bCYoo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
