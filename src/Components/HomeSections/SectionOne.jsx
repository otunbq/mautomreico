'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import hero1 from '../assets/hero/hero1.png'
import hero2 from '../assets/hero/hero2.png'
import hero3 from '../assets/hero/hero3.png'
import { BsSearch } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


const SectionOne = () => {

    const [showSectionOne, setShowSectionOne] = useState(true)
    const [showSectionTwo, setShowSectionTwo] = useState(false)
    const [showSectionThree, setShowSectionThree] = useState(false)

    const handleShowSectionOne = () => {
        setShowSectionOne(true)
        setShowSectionTwo(false)
        setShowSectionThree(false)
    }

    const handleShowSectionTwo = () => {
        setShowSectionOne(false)
        setShowSectionTwo(true)
        setShowSectionThree(false)
    }

    const handleShowSectionThree = () => {
        setShowSectionOne(false)
        setShowSectionTwo(false)
        setShowSectionThree(true)
    }

  return (
    <div className='relative'>

        <div className=' '>
            <p onClick={handleShowSectionThree} className='left-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronLeft /></p>
            {showSectionThree === true &&
              <p onClick={handleShowSectionTwo} className='left-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronLeft /></p>
            }
            {showSectionTwo === true &&
              <p onClick={handleShowSectionOne} className='left-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronLeft /></p>
            }
            {showSectionOne === true &&
              <p onClick={handleShowSectionThree} className='left-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronLeft /></p>
            }
            <p onClick={handleShowSectionTwo} className='right-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronRight /></p>
            {showSectionTwo === true &&
              <p onClick={handleShowSectionThree} className='right-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronRight /></p>
            }
            {showSectionThree === true &&
              <p onClick={handleShowSectionOne} className='right-10 top-[40vh] text-2xl bg-white p-3 rounded-full cursor-pointer absolute'><FaChevronRight /></p>
            }        
        </div>


        <div className='flex items-center gap-5 justify-center m-auto right-0 left-0 absolute bottom-[20px]'>
            <p onClick={handleShowSectionOne} className={`h-2 w-36 cursor-pointer ${showSectionOne === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
            <p onClick={handleShowSectionTwo} className={`h-2 w-36 cursor-pointer ${showSectionTwo === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
            <p onClick={handleShowSectionThree} className={`h-2 w-36 cursor-pointer ${showSectionThree === true ? 'bg-black' : 'bg-white' } rounded-full`}></p>
        </div>

        {/* ============== SECTION ONE ================= */}

        {showSectionOne === true &&
            <section className='px-[10rem] py-20 flex h-[80vh] bg-green-100 items-center '>
                <div className='w-[85%]' data-aos="fade-up" data-aos-duration="500">
                    <p className='text-2xl'>In this season, find the best 🔥</p>
                    <h2 className='text-5xl font-bold leading-[50px] py-10'>Exclusive collection <br /> for everyone</h2>
                    <button className='text-white bg-black rounded-full py-3 px-10 flex items-center gap-2'>Explore Now <BsSearch /></button>
                </div>

                <div className='ml-auto w-[120%]' data-aos="fade-up" data-aos-duration="500">
                    <Image className='w-[100%]' src={hero1} alt='image' width={0} height={0}/>
                </div>
            </section>
        }


      {/* ==================== SECTION TWO ================= */}
      {showSectionTwo === true &&
        <section className='px-[10rem] py-20 flex h-[80vh] bg-green-100 items-center '>
            <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
                <p className='text-2xl'>In this season, find the best 🔥</p>
                <h2 className='text-5xl font-bold leading-[50px] py-10'>Exclusive collection <br /> for everyone</h2>
                <button className='text-white bg-black rounded-full py-3 px-10 flex items-center gap-2'>Explore Now <BsSearch /></button>
            </div>

            <div className='ml-auto w-[100%]' data-aos="fade-up" data-aos-duration="500">
                <Image className='w-[100%]' src={hero2} alt='image' width={100} height={100}/>
            </div>
        </section>
        }
      {/* ===================== SECTION THREE ================== */}
      {showSectionThree === true &&
        <section className='px-[10rem] py-20 flex h-[80vh] bg-green-100 items-center '>
            <div className='w-[100%]' data-aos="fade-up" data-aos-duration="500">
                <p className='text-2xl'>In this season, find the best 🔥</p>
                <h2 className='text-5xl font-bold leading-[50px] py-10'>Exclusive collection <br /> for everyone</h2>
                <button className='text-white bg-black rounded-full py-3 px-10 flex items-center gap-2'>Explore Now <BsSearch /></button>
            </div>

            <div className='ml-auto w-[100%]' data-aos="fade-up" data-aos-duration="500">
                <Image className='w-[100%]' src={hero3} alt='image' width={0} height={0}/>
            </div>
        </section>
        }
    </div>
  )
}

export default SectionOne