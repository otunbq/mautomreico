'use client'

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


import firstP from '../assets/NewArrivals/product1.png'
import productOne from '../assets/marketing/1-2.png'
import productTwo from '../assets/marketing/image (1).webp'
import productThree from '../assets/discover/discover (3).png'

import { MdOutlineFavoriteBorder } from "react-icons/md";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const SectionTwo = () => {
  return (
    <div className='px-[10rem]'>

        <h1 className='text-neutral-600 text-4xl font-bold py-10'><span className='text-black'>Discover more.</span> Good things are waiting for you</h1>
        
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
        >
          
            <SwiperSlide className='py-10'>
                <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-yellow-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Eplore New Arrivals</p>
                            <h2 className='font-bold text-lg py-2'>Shop the latest <br /> from top brands</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productOne} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='py-10'>
            <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-red-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Digital Cards</p>
                            <h2 className='font-bold text-lg py-2'>Give the gift <br /> of choice</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productTwo} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='py-10'>
                <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-blue-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Sales Collection</p>
                            <h2 className='font-bold text-lg py-2'>Up to  <br />80% off retail</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productThree} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='py-10'>
                <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-yellow-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Eplore New Arrivals</p>
                            <h2 className='font-bold text-lg py-2'>Shop the latest <br /> from top brands</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productOne} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='py-10'>
            <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-red-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Digital Cards</p>
                            <h2 className='font-bold text-lg py-2'>Give the gift <br /> of choice</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productTwo} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='py-10'>
                <div className='relative flex gap-4 h-[15rem] w-[22rem] items-center bg-blue-100 rounded-lg p-5 mr-3 left-0'>
                        <div className=' text-left'>
                            <p>Sales Collection</p>
                            <h2 className='font-bold text-lg py-2'>Up to  <br />80% off retail</h2>
                            <button className='bg-white mt-5 text-sm rounded-full py-3 px-3'>Show me all</button>
                        </div>
                        <div className='absolute right-3 top-6'>
                            <Image className='w-[100%]' src={productThree} alt='' height={70} width={250}/>
                        </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
        <div className="bg-white  md:my-24 lg:my-32 relative container">
            <div className="content text-2xl md:text-3xl lg:text-4xl font-semibold mb-16">
               
                <h2 className="text-center lg:text-left">
                New Arrivals. <span className="text-gray-600">REY backpacks and bags</span>
                </h2>
            </div>
            {/* main */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Swiper
                 slidesPerView={4}
                 spaceBetween={30}
                 pagination={{
                 clickable: true,
                 }}
                 modules={[Pagination]}
                 className="mySwiper "
                > 
                    <SwiperSlide >
                        <div className=''>
                            <div className='w-[100%]'>
                                <Image src={firstP} alt='' className='w-full' height={0} width={0}/>
                            </div>
                            <p className='absolute rounded-full p-5 flex bg-white justify-center items-center right-5 top-5'><MdOutlineFavoriteBorder /></p>
                        </div>
                    </SwiperSlide>
                

                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo