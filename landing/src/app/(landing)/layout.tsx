import Image from "next/image";

export default async function LandingLayout(props: { children: React.ReactNode }) {
    return (
        <main className='w-screen h-screen fixed flex flex-row items-center justify-center dark:bg-[#2f2525] text-[#3f2308] dark:text-[#FEF9F4] bg-[#FEF9F4]'>
            <div className='w-[400px] h-[640px] p-12 flex flex-col items-start justify-start select-none'>
                <Image
                    className='hidden dark:block'
                    width={48}
                    height={48}
                    alt='Logo: Two people holding hands'
                    src='/logo-white.png'
                />
                <Image
                    className='dark:hidden'
                    width={48}
                    height={48}
                    alt='Logo: Two people holding hands'
                    src='/logo.png'
                />
                <h1 className='mt-3 text-3xl tracking-tighter no-select'>tldr</h1>

                {props.children}
            </div>
        </main>
    );
}
