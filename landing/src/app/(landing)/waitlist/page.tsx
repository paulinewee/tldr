import localFont from "next/font/local";
import Form from 'next/form';
import { createSupabaseServerClient } from '@/services/supabase/server';
import { redirect } from 'next/navigation'

const ApercuMono = localFont({
    src: "../../fonts/Apercu-Mono.otf",
});

export default async function WaitlistPage() {
  async function handleSubmit(formdata: FormData) {
    'use server';

    const supabase = await createSupabaseServerClient(); 

    const rawFormData = {
      name: formdata.get('name'),
      email: formdata.get('email'),
      x_username: formdata.get('x_username'),
    };

    const { data, error } = await supabase
      .from('waitlist')
      .insert([rawFormData]);
    if (error) console.error("Something went wrong! A form submission didn't work because:", error.message);
    redirect('/thankyou');
  }

  return (
    <form action={handleSubmit} className={`${ApercuMono.className} flex flex-col my-8 gap-8 justify-start items-start`}>
      <input className='bg-transparent tracking-tighter text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4] border-b-2 rounded-t-md border-solid border-[#3f2308]' type='text' name="name" required placeholder='NAME' />
      <input className='bg-transparent tracking-tighter text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4] border-b-2 rounded-t-md border-solid border-[#3f2308] 'type='email' name="email" required placeholder='EMAIL' />
      <input className='bg-transparent tracking-tighter text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4] border-b-2 rounded-t-md border-solid border-[#3f2308]' type='text' name="x_username" placeholder='TWITTER/X USERNAME' />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
