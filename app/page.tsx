import React from 'react'
import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  weight: ['400', '500', '600', '700'], // or other available weights
  subsets: ['latin'],
  display: 'swap',
});

const Home = () => {
  return (
    <div className='bg-[#0B192C] text-white  flex flex-col items-center gap-[10px] sm1:px-[16px] sm2:px-[20px] md1:px-[25px] md2:px-[30px] lg1:px-[50px] lg2:px-[75px] xl:px-[100px] py-[20px]'>
      <h1 className={`text-[32px] font-semibold ${roboto.className}`}>Happy Fathers Day</h1>

      <div className='w-[300px] bg-black rounded-[30px] border-[3px] border-amber-400'>
        <Image src='/fathers-day.png' width={300} height={300} alt='Happy Fathers Day!' className='rounded-t-[30px]'/>

        <Image src='/father.jpg' width={300} height={300} alt='My Lovely Father' />

        <Image src='/FathersDay-1.webp' width={300} height={300} alt='Happy Fathers Day!'/>

        <Image src='/fathers-day-2.jpg' width={300} height={300} alt='My Lovely Father' />

        <p className='text-[17px] py-[10px] px-[10px] text-center'>You have always supported me, not just financially but in every part of my life. Your love, guidance, and strength have given me the stability I needed to grow, and I’m truly thankful for everything you’ve done for me. Love you very much, and many happy returns of the day. Happy Father’s Day — may your shadow be with us lifelong.</p>
      </div>
    </div>
  )
}

export default Home