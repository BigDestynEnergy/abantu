
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = `https://idmogbwevvvwfcbflhrs.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkbW9nYndldnZ2d2ZjYmZsaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzODQxMjQsImV4cCI6MjA4ODk2MDEyNH0.0VVKgK1b9y-cHHvoYLGsIRWSNC2pay74G_5ZFz3cjrU`;

export const supabase = createClient(supabaseUrl, supabaseKey)