import localFont from 'next/font/local'
import CtaBtn from '../icons/cta-btn'
import Link from 'next/link'

const ApercuMono = localFont({
  src: '../fonts/Apercu-Mono.otf',
})

export default async function Home() {
  return (
    <div>
      <ul className={`flex flex-col tracking-tighter w-60 gap-4 p-0 my-6`}>
        <li className="text-xs p-0 m-0">
          we believe in places, spaces, and the power of context.
        </li>
        <li className="text-xs p-0 m-0">
          we believe in artifacts of affection, markers of memories, galleries
          of good times.
        </li>

        <li className="text-xs p-0 m-0">
          we believe that being deeply, authentically connected to each other
          enables us to most fully grow and thrive.
        </li>
      </ul>
      <Link href="/waitlist">
        <button
          className={`text-sm relative whitespace-nowrap hover4 inset-0 flex items-center justify-center`}
        >
          <CtaBtn dark={false} className="dark:hidden" />
          <CtaBtn dark={true} className="hidden dark:block" />
          <span className="absolute left-4 top-3 text-xs ">
            join the waitlist
          </span>
        </button>
      </Link>
    </div>
  )
}
