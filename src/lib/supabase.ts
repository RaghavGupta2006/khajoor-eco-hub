import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://acqhtztuadcjpphrglhy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjcWh0enR1YWRjanBwaHJnbGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTI0MzQsImV4cCI6MjA3NzU4ODQzNH0.9bhWcVNeMoDEL3QS2_8fcCIErz0FMZLTjDW_1gwZ8kM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


