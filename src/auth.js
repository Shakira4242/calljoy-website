import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://bpeqsefkefhjnfshvrck.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwZXFzZWZrZWZoam5mc2h2cmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2NjAwNjAsImV4cCI6MTk4NzIzNjA2MH0.Wlq3HSKyUIRxSSv-Qm16L8prX8JrSe23NI7eYjACIAw'
)

export default supabase