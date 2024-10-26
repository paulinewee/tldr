import Image from 'next/image';
import Link from 'next/link';

export default async function ThankYouPage() {
  return (
    <div className='pt-16'>
      <Image src='/msg.png' width={100} height={200} alt='Thank you!' className='animate-bounce z-10' />
      <Image src='/fish.png' width={120} height={240} alt='Says the Dog named Fish' className='mt-4 hover:animate-spin' />
    </div>
  );
}
