import React from 'react'
import Image from 'next/image'

import earn from '../assets/earn.png'
import logo from '../assets/logo.svg'

const SectionThreeTwo = () => {
  return (
    <div className='flex justify-between py-10 px-[10rem]'>
      <div className='py-16 '>
        <div className='w-[40%]'>
            <Image src={logo} />
        </div>
        <h1 className='font-bold py-10 text-5xl'>Earn Free Money <br />With Ciseco</h1>
        <p>With Ciseco you will get freeship &amp; savings combo...</p>
        <div className='flex py-10 gap-5'>
          <button className='px-6 py-4 bg-black text-white rounded-full'>Saving Combo</button>
          <button className='px-6 py-4 bg-white text-black border-black rounded-full'>Discover More</button>
        </div>
      </div>
        
        <div className='w-[55%]'>
            <Image src={earn} width={0} height={0} />
        </div>
    </div>
  )
}

export default SectionThreeTwo