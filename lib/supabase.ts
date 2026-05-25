// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mzfanbsumfkkqrakzzly.supabase.co';
const supabaseAnonKey = 'sb_publishable_XNz0VFgvIVNpTb5RJgl3Xg_6w5GuW-P';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);