// import localFont from 'next/font/local'
// import Form from 'next/form'
// import { createSupabaseServerClient } from '@/services/supabase/server'
// import { redirect } from 'next/navigation'
// import CtaBtn from '../../icons/cta-btn'

// const ApercuMono = localFont({
//   src: '../../fonts/Apercu-Mono.otf',
// })

// export default async function WaitlistPage() {
//   async function handleSubmit(formdata: FormData) {
//     'use server'

//     const supabase = await createSupabaseServerClient()

//     const rawFormData = {
//       name: formdata.get('name'),
//       email: formdata.get('email'),
//       x_username: formdata.get('x_username'),
//     }

//     const { data, error } = await supabase
//       .from('waitlist')
//       .insert([rawFormData])
//     if (error)
//       console.error(
//         "Something went wrong! A form submission didn't work because:",
//         error.message
//       )
//     redirect('/thankyou')
//   }

//   return (
//     <form
//       action={handleSubmit}
//       className={`${ApercuMono.className} flex flex-col my-8 gap-8 justify-start items-start text-xs`}
//     >
//       <input
//         className="bg-transparent p-3 pl-0 text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4]  border-b-[1.5px] rounded-t-md border-solid border-[#3f2308] dark:border-[#FEF9F4] "
//         type="text"
//         name="name"
//         required
//         placeholder="name"
//       />
//       <input
//         className="bg-transparent p-3 pl-0 text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4] border-b-[1.5px] rounded-t-md border-solid border-[#3f2308] dark:border-[#FEF9F4]  "
//         type="email"
//         name="email"
//         required
//         placeholder="email"
//       />
//       <input
//         className="bg-transparent p-3 pl-0 text-[#3f2308] dark:text-[#FEF9F4] placeholder-[#3f2308] dark:placeholder-[#FEF9F4]  border-b-[1.5px] rounded-t-md border-solid border-[#3f2308] dark:border-[#FEF9F4] "
//         type="text"
//         name="x_username"
//         placeholder="twitter / x username"
//       />
//       {/* <button type="submit">SUBMIT</button> */}
//       <button
//         className={`${ApercuMono.className} relative whitespace-nowrap hover4 inset-0 flex items-center justify-center`}
//         type="submit"
//       >
//         <CtaBtn dark={false} className="dark:hidden" />
//         <CtaBtn dark={true} className="hidden dark:block" />
//         <span className="absolute left-4 top-3 ">see you soon &lt;3 &lt;3</span>
//       </button>
//     </form>
//   )
// }
