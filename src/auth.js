import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://bpeqsefkefhjnfshvrck.supabase.co',
    process.env.SUPABASE_PUBLIC_KEY
)

export default supabase