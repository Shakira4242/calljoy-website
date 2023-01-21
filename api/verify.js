// import supabase js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bpeqsefkefhjnfshvrck.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwZXFzZWZrZWZoam5mc2h2cmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2NjAwNjAsImV4cCI6MTk4NzIzNjA2MH0.Wlq3HSKyUIRxSSv-Qm16L8prX8JrSe23NI7eYjACIAw'
);

// let phone = '+12107128563'

// const { data, error } = await supabase.auth.signInWithOtp({ phone });

// if(error) {
//   console.log(error)
// }else{
//   console.log(data)
// }

// After receiving a SMS with a OTP.
//
// const { data, error } = await supabase.auth.verifyOtp({ phone: "+12107128563", token: "121338" })


export default async function handler(request, response) {
    // get form data
    const { phone, token } = request.body;

    const { data, error } = await supabase.auth.verifyOtp({ 'phone': phone, 'token': token,   type: 'sms' });
  
    if(error) {
        console.log(error);
    }else{
        console.log(data);
        response.status(200).json({ data });
    }
}