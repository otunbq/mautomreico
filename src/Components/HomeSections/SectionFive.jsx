'use client'

import React, { useState } from 'react'
import mockData from '../mockData'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";


const SectionFive = () => {
  const [favorites, setFavorites] = useState()
    console.log('This is data', mockData);
    
  return (
    <div className='px-[10rem] py-10'>
      <h2 className='text-5xl font-bold'>What's trending now</h2>
      <p className='py-4'>Discover the most trending products in Ciseco.</p>

      <div className='grid grid-cols-4 items-center gap-10'>
        {mockData.map((data)=>(
            <div className='col-span-1'>
                <div className='bg-blue-50 rounded-xl h-[20rem] p-10'>
                    <Image className='w-full' src={data.image} height={0} width={0}/>
                </div>

                {data?.id === 1 &&(
                    <div className='flex items-center gap-5'>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                        <div className='bg-neutral-600 h-3 w-10 rounded-full'></div>
                    </div>
                )}

                {data?.id === 2 && (
                    <div className='flex items-center gap-5 py-3'>
                        <div className='bg-neutral-600 h-5 w-5 border border-3 border-cyan-200 rounded-full'></div>
                        <div className='bg-yellow-600 h-5 w-5 rounded-full'></div>
                        <div className='bg-pink-600 h-5 w-5 rounded-full'></div>
                        <div className='bg-blue-600 h-5 w-5 rounded-full'></div>
                    </div>
                )}

                <div className='pt-5'>
                    <h2 className='font-bold'>{data.name}</h2>
                    <p className='py-2'>{data.description}</p>
                    <div className='flex items-center justify-between'>
                      <button className=' border-green-500 border-3'>{data.price}</button>
                      {data?.rating === 4 && (
                          <div className='flex items-center gap-2'>
                              <span className='text-yellow-200'><GoStarFill /></span>
                              <p>4.9 (98 reviews)</p>
                          </div>
                      )}
                    </div>
                   

                     {data?.rating === 5 && (
                        <div className='flex gap-2'>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                        </div>
                    )}

                    {data?.rating === 3 && (
                        <div className='flex gap-2'>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                            <span><GoStarFill /></span>
                        </div>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SectionFive