import Form from 'next/form';
import { createSupabaseServerClient } from '@/services/supabase/server';

export default async function WaitlistPage() {
  async function handleSubmit(formdata: FormData) {
    'use server';

    const supabase = createSupabaseServerClient(); 

    const rawFormData = {
      name: formdata.get('name'),
      email: formdata.get('email'),
      x_username: formdata.get('x_username'),
    };

    const { data, error } = await supabase
      .from('waitlist')
      .insert([rawFormData]);
    if (error) console.error("Something went wrong! A form submission didn't work.");
  }

  return (
    <Form action={handleSubmit}>
      <input type='text' name="name" required placeholder='NAME' />
      <input type='email' name="email" required placeholder='EMAIL' />
      <input type='text' name="x_username" placeholder='TWITTER/X USERNAME' />
      <button type="submit">SUBMIT</button>
    </Form>
  );
}
