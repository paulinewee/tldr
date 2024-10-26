import localFont from "next/font/local";
import CtaBtn from "../icons/cta-btn";
import Link from "next/link";

const ApercuMono = localFont({
    src: "../fonts/Apercu-Mono.otf",
});

export default async function Home() {
    return (
        <>
            <ul
                className={`flex flex-col tracking-tighter w-60 gap-4 ${ApercuMono.className} p-0 my-6`}
            >
                <li className='text-xs p-0 m-0'>
                    <span>love is context.</span>
                    <br />
                    we believe in places, spaces, and the power of context in
                    fostering deep connection.
                </li>
                <li className='text-xs p-0 m-0'>
                    <span>love compounds.</span>
                    <br />
                    we believe in collecting artifacts of affection, troves of
                    tiny memories, galleries of memento.
                </li>
                <li className='text-xs p-0 m-0'>
                    <span>love is consistent.</span>
                    <br />
                    it's not without friction, but it shouldn't come from the
                    media of communication and exchange itself.
                </li>
                <li className='text-xs p-0 m-0'>
                    <span>love coevolves.</span>
                    <br />
                    the best relationships are a foundation for both people to
                    grow and thrive.
                </li>
            </ul>
            <Link href='/waitlist'>
              <button
                  className={`${ApercuMono.className} text-sm relative whitespace-nowrap`}
              >
                  <CtaBtn dark={false} className='dark:hidden' />
                  <CtaBtn dark={true} className='hidden dark:block' />
                  <span className='absolute top-3 left-3'>JOIN THE WAITLIST</span>
              </button>
            </Link>
        </>
    );
}
