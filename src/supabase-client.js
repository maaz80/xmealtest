import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://pagiahepzhqzdpocojll.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZ2lhaGVwemhxemRwb2NvamxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNjk5NTgsImV4cCI6MjA2MDk0NTk1OH0.2JJXVV8_6v8_MTVcKbqJt4dPzcHRmJiV6BAjaaqqll8",
)