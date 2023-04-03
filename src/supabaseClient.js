import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gbnjqmdagzamlzzvhwxj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibmpxbWRhZ3phbWx6enZod3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTg3NzAsImV4cCI6MTk5MzczNDc3MH0.QPcsd2JCo0An-EFwpxNrXEhDm3qWJHrbzCE1OepHrqk';

export const supabase = createClient(supabaseURL, supabaseKey)