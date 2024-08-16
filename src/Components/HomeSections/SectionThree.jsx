'use client'

import React from 'react'
import Image from 'next/image'

import one from '../assets/serviceStep/step1.png'
import two from '../assets/serviceStep/step2.png'
import three from '../assets/serviceStep/step3.png'
import four from '../assets/serviceStep/step4.png'

const SectionThree = () => {
  return (
    <div className='flex justify-between px-[10rem] py-7'>
        <div className='grid place-items-center text-center'>
          <div className='w-[100%]'>
            <Image src={one} width={130} height={0} />
          </div>
          <div className='py-3'>
            <button className='bg-red-300 px-2 py-1 text-red-900 w-20 text-sm rounded-full'>Step 1</button>
            <h2>Filter &amp; Discover</h2>
            <p className='items-center'>Smart filtering &amp; suggestions <br /> make it easy to find</p>
          </div>
        </div>
      
        <div className='flex flex-col gap-5 items-center text-center'>
          <div className='w-[100%]'>
            <Image src={two} width={130} height={0} />
          </div>
          <div className='py-3'>
            <button className='bg-orange-300 px-2 py-1 text-red-900 w-20 text-sm rounded-full'>Step 2</button>
            <h2>Filter &amp; Discover</h2>
            <p className='items-center'>Smart filtering &amp; suggestions <br /> make it easy to find</p>
          </div>
        </div>

        <div className='grid place-items-center text-center'>
          <div className='w-[100%]'>
            <Image src={three} width={130} height={0} />
          </div>
          <div className='py-3'>
            <button className='bg-green-300 px-2 py-1 text-red-900 w-20 text-sm rounded-full'>Step 3</button>
            <h2>Filter &amp; Discover</h2>
            <p className='items-center'>Smart filtering &amp; suggestions <br /> make it easy to find</p>
          </div>
        </div>

        <div className='grid place-items-center text-center'>
          <div className='w-[100%]'>
            <Image src={four} width={130} height={0} />
          </div>
          <div className='py-3'>
            <button className='bg-purple-300 px-2 py-1 text-red-900 w-20 text-sm rounded-full'>Step 4</button>
            <h2>Filter &amp; Discover</h2>
            <p className='items-center'>Smart filtering &amp; suggestions <br /> make it easy to find</p>
          </div>
        </div>  
    </div>
    
  )
}

export default SectionThree