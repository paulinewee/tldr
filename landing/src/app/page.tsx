import localFont from "next/font/local";
import Image from "next/image";
import Balancer from 'react-wrap-balancer';
import CtaBtn from './icons/cta-btn';

const ApercuMono = localFont({
    src: "./fonts/Apercu-Mono.otf",
});

export default async function Home() {
    return (
        <main className='w-screen h-screen fixed flex flex-row items-center justify-center dark:bg-[#2f2525] text-[#3f2308] dark:text-[#FEF9F4] bg-[#FEF9F4]'>
            <div className='w-[400px] h-[640px] p-12 flex flex-col items-start justify-start select-none'>
                <Image
                    width={48}
                    height={48}
                    alt='Logo: Two people holding hands'
                    src='/logo.png'
                />
                <h1 className='mt-2 text-3xl tracking-tighter no-select'>
                    tldr
                </h1>
                <ul
                    className={`flex flex-col tracking-tighter w-60 gap-4 ${ApercuMono.className} p-0 my-6`}
                >
                    <li className='text-xs p-0 m-0'>
                        <span>love is context.</span>
                        <br />
                        we believe in places, spaces, and the power of context
                        in fostering deep connection.
                    </li>
                    <li className='text-xs p-0 m-0'>
                        <span>love compounds.</span>
                        <br />
                        we believe in collecting artifacts of affection, troves
                        of tiny memories, galleries of memento.
                    </li>
                    <li className='text-xs p-0 m-0'>
                        <span>love is consistent.</span>
                        <br />
                        it's not without friction, but it shouldn't come from
                        the media of communication and exchange itself.
                    </li>
                    <li className='text-xs p-0 m-0'>
                        <span>love coevolves.</span>
                        <br />
                        the best relationships are a foundation for both people
                        to grow and thrive.
                    </li>
                </ul>
                <button className={`${ApercuMono.className} text-sm relative`}>
                  <CtaBtn />
                  <span className='absolute top-3 left-3'>JOIN THE WAITLIST</span>
                </button> 
            </div>
        </main>
    );
}
