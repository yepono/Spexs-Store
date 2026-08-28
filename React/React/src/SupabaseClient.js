import { createClient } from '@supabase/supabase-js';

// URL de  proyecto Supabase
const supabaseUrl = 'https://freappntitderruwfdwl.supabase.co';

// anon key (segura para frontend)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyZXBhcG50aXRkZXJydXdmZHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTk3OTAsImV4cCI6MjEwMzMzNTc5MH0.V91N9b3YOA546CU2U6PIjctZV-jZ3uwml7dCxFSXd-M';

// Crear cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);
