'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import one from '../assets/author/Image-2.405c62ff9ad88c47e28c.png'
import ssd from '../assets/author/Image-3.f257bc3c2ce5ae3a57db.png'

const SectionFour = () => {

    const [women, setWoMen] = useState(true)
    const [men, setMen] = useState(false)
    const [kids, setKids] = useState(false)
    const [sports, setSports] = useState(false)

    const handleWomen = () => {
        setWoMen(true)
        setMen(false)
        setKids(false)
        setSports(false)
    }

    const handleMen = () => {
        setWoMen(false)
        setMen(true)
        setKids(false)
        setSports(false)
    }

    const handleKids = () => {
        setWoMen(false)
        setMen(false)
        setKids(true)
        setSports(false)
    }

    const handleSports = () => {
        setWoMen(false)
        setMen(false)
        setKids(false)
        setSports(true)
    }

  return (
    <div className='px-[10rem] pt-32'>
        <div className='bg-neutral-200 py-28 rounded-3xl'>
            <h2 className='text-center text-5xl font-bold'>Start exploring.</h2>

            <ul className='flex mt-10 w-fit bg-white rounded-full py-3 px-10 m-auto justify-center items-center gap-10'>
                <li onClick={handleWomen} className={`${women === true && 'bg-black text-white'} rounded-full cursor-pointer  py-2 px-4`}>Women</li>
                <li onClick={handleMen} className={`${men === true && 'bg-black text-white'} rounded-full cursor-pointer  py-2 px-4`}>Men</li>
                <li onClick={handleKids} className={`${kids === true && 'bg-black text-white'} rounded-full cursor-pointer  py-2 px-4`}>Kids</li>
                <li onClick={handleSports} className={`${sports === true && 'bg-black text-white'} rounded-full cursor-pointer  py-2 px-4`}>Sports</li>
            </ul>

            {women === true || kids === true ?
                <div className='grid grid-cols-3 gap-6 pt-10 px-[5rem]'>
                    <div className='w-full relative bg-white p-10 rounded-2xl'>
                        <div className='flex items-center'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                                <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                            </div>

                            <p className='ml-auto'>155 Products</p>
                        </div>

                        <div className='py-14'>
                            <p>Manufacturer</p>
                            <h2 className='text-3xl'>Backpack</h2>
                        </div>

                        <button>See Collections</button>

                        <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                    </div>

                    <div className='w-full relative bg-white p-10 rounded-2xl'>
                        <div className='flex items-center'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                                <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                            </div>

                            <p className='ml-auto'>155 Products</p>
                        </div>

                        <div className='py-14'>
                            <p>Manufacturer</p>
                            <h2 className='text-3xl'>Backpack</h2>
                        </div>

                        <button>See Collections</button>

                        <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                    </div>

                    <div className='w-full relative bg-white p-10 rounded-2xl'>
                        <div className='flex items-center'>
                            <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                                <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                            </div>

                            <p className='ml-auto'>155 Products</p>
                        </div>

                        <div className='py-14'>
                            <p>Manufacturer</p>
                            <h2 className='text-3xl'>Backpack</h2>
                        </div>

                        <button>See Collections</button>

                        <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                    </div>
                </div>
            
             : 
            <div className='grid grid-cols-3 gap-6 pt-10 px-[5rem]'>
                <div className='w-full relative bg-white p-10 rounded-2xl'>
                    <div className='flex items-center'>
                        <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                            <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                        </div>

                        <p className='ml-auto'>155 Products</p>
                    </div>

                    <div className='py-14'>
                        <p>Manufacturer</p>
                        <h2 className='text-3xl'>Backpackssss</h2>
                    </div>

                    <button>See Collections</button>

                    <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                </div>

                <div className='w-full relative bg-white p-10 rounded-2xl'>
                    <div className='flex items-center'>
                        <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                            <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                        </div>

                        <p className='ml-auto'>155 Products</p>
                    </div>

                    <div className='py-14'>
                        <p>Manufacturer</p>
                        <h2 className='text-3xl'>Backpacksssss</h2>
                    </div>

                    <button>See Collections</button>

                    <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                </div>

                <div className='w-full relative bg-white p-10 rounded-2xl'>
                    <div className='flex items-center'>
                        <div className='w-20 h-20 p-2 bg-neutral-200 flex justify-center items-center rounded-full'>
                            <Image className='w-10 h-10' src={one} alt='' width={0} height={0}/>
                        </div>

                        <p className='ml-auto'>155 Products</p>
                    </div>

                    <div className='py-14'>
                        <p>Manufacturer</p>
                        <h2 className='text-3xl'>Backpackssss</h2>
                    </div>

                    <button>See Collections</button>

                    <Image className='absolute bottom-0 right-0 w-[16rem]' src={ssd} width={0} alt='' height={0}/>
                </div>
            </div>
            }
        </div>
      
    </div>
  )
}

export default SectionFour