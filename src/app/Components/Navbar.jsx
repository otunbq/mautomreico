'use client'

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import logo from '../Components/Images/logo.14d0e71d.svg'
import Image from 'next/image';
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import dog from "../Components/Images/discover (3).png"

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init(); 

const Navbar = () => { 
  const [showDropDown, setShowDropDown] = useState(false)
  const [showDropDownInner, setShowDropDownInner] = useState(false)

  const [showCategory2, setShowCategory2] = useState(false)
  const [showCategory2Inner, setShowCategory2Inner] = useState(false)

  const [showCategory3, setShowCategory3] = useState(false)
  const [showCategory3Innner, setShowCategory3Inner] = useState(false)

  const [showTemplate, setShowTemplate] = useState(false)

  const toggleTemplate = () => {
    setShowTemplate(!showTemplate)
    setShowDropDown(false)
  }

  const toggleTemplateInner = () => {
    setShowTemplateInner(!showTemplateInner)
  }

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
    setShowTemplate(false)
  }
  const toggleDropDownInner = () => {
    setShowDropDownInner(!showDropDownInner)
    setShowCategory2(false)
    setShowCategory3(false)
  }

  const toggleCategory2 = () => {
    setShowCategory2(!showCategory2)
  }
  const toggleCategory2Inner = () => {
    setShowCategory2Inner(!showCategory2Inner)
    setShowCategory3(false)
    setShowDropDownInner(false)
  }

  const toggleCategory3 = () => {
    setShowCategory3(!showCategory3)
  }
  const toggleCategory3Inner = () => {
    setShowCategory3Inner(!showCategory3Innner)
    setShowDropDownInner(false)
    setShowCategory3(false)
  }
  
  return (
    <div className=' flex z-50 fixed w-full shadow[0_3px_10px_rgb(0,0,0,0.2)] justify-between px-[10rem] py-3 items-center bg-white'>
      <div>
        <Image src={logo} alt/>
      </div>
      <ul className='flex gap-5'>
        <li className='hover:bg-neutral-200 text-neutral-800 text-[4] font-normal rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear'>Men</li>
        <li className='hover:bg-neutral-200 text-neutral-800 text-[4] font-normal rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear'>Women</li>
        <li className='hover:bg-neutral-200 text-neutral-800 text-[4] font-normal rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear'>Beauty</li>
        <li className='hover:bg-neutral-200 text-neutral-800 text-[4] font-normal rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear'>Sport</li>
        <li onClick={toggleTemplate} className='flex gap-2 items-center text-neutral-800 text-[4] font-normal hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear'>
          Templates <IoIosArrowDropdown className='text-xl'/>
          </li>
          {showTemplate === true &&
                <div data-aos="fade-up" data-aos-duration="1000" className='absolute w-full text-sm flex gap-12 justify-between px-[10rem] py-[3rem] bg-neutral-200 top-[4.4rem] left-0 right-0 rounded-lg'>
                  <ul>
                    <li className='font-bold gap-2'>Home Categories</li>
                    <li className=''>Home Demo</li>
                    <li className=''>Home Demo 2</li>
                    <li className=''>Home Demo 3</li>
                    <li className=''>Home Demo 4</li>
                    <li className=''>Checkout Page</li>
                  </ul>
                  <ul>
                    <li className='font-bold gap-2'>Shop Pages</li>
                    <li>Category Page</li>
                    <li>Category Page 2</li>
                    <li>Category Page 3</li>
                    <li>Product Page</li>
                    <li>Product Page 1</li>
                    <li>Product Page 2</li>
                    <li>Cart Page</li>
                    <li>Checkout Page</li>
                  </ul>
                  <ul>
                    <li className='font-bold gap-2'>Other Pages</li>
                    <li>CheckoutPage</li>
                    <li>Search Page</li>
                    <li>Cart Page</li>
                    <li>Account Page</li>
                    <li>Product Page 1</li>
                    <li>Product Page 2</li>
                    <li>Cart Page</li>
                    <li>Checkout Page</li>
                  </ul>
                  <ul>
                    <li className='font-bold gap-2'>Blog Pages</li>
                    <li>Category Page</li>
                    <li>Category Page 2</li>
                    <li>Category Page 3</li>
                    <li>Product Page</li>
                    <li>Product Page 1</li>
                    <li>Product Page 2</li>
                    <li>Cart Page</li>
                    <li>Checkout Page</li>
                  </ul>
                  <div className='flex bg-blue-300 rounded-lg gap-4 p-4'>
                    <div>
                      <p>Sale Collection</p>
                      <h1 className='font-bold text-2xl py-5'>Up to <br /> 80% off retail</h1>
                      <button className='py-2 px-4 rounded-full bg-white'>Show me all</button>
                    </div>
                    <div className=''>
                      <Image src={dog} width={100} height={300}/>
                    </div>
                  </div>
                </div>
            }
        <li onClick ={toggleDropDown} className='flex z-[100] items-center gap-2 text-neutral-800 text-[4] font-normal hover:bg-neutral-200 rounded-full px-3 py-2 cursor-pointer hover:transition hover:ease-linear' data-aos="zoom-out">
          Explore <IoIosArrowDropdown className='text-xl'/>
          </li>
          {showDropDown === true &&
                <ul data-aos="fade-up" data-aos-duration="1000" className='absolute  text-sm flex flex-col gap-5 bg-neutral-200 top-[4.4rem] right-[19.4rem] p-6 w-[14rem] rounded-lg'>
                  <li className=''>Home Demo 1</li>
                  <li className=''>Home Demo 2</li>
                  <li onClick={toggleCategory2} className='flex gap-1 cursor-pointer'>Categories Page <RiArrowDropDownLine className='text-2xl'/> </li>
                  {showCategory2 === true &&
                    <ul data-aos="fade-left" data-aos-duration="1000" className='rounded-lg flex-col gap-5 absolute bg-neutral-200 right-[-11rem] top-15 p-6 w-[10rem]'>
                      <li>Soap</li>
                      <li>Cream</li>
                      <li>Shampoo</li>
                      <li>Body Spray</li>
                      <li>Box</li>
                    </ul>
                  }
                  <li onClick={toggleCategory3} className='flex gap-1 items-center cursor-pointer'>Category Page 2<RiArrowDropDownLine className='text-2xl'/> 
                  {showCategory3 === true &&
                    <ul data-aos="fade-left" data-aos-duration="1000" className='rounded-lg flex-col gap-5 absolute bg-neutral-100 right-[-13rem] p-6 w-[10rem]'>
                      <li>Na so so</li>
                      <li>Wonder</li>
                      <li>Jesus</li>
                      <li>Dey</li>
                      <li>Do</li>
                    </ul>
                  }
                  </li>
                  <li className=''>Category Page 3</li>
                  <li className=''>Cart Page </li>
                  <li onClick={toggleDropDownInner} className='flex relative items-center cursor-pointer'>Product Page 
                    <RiArrowDropDownLine className='text-2xl'/>

                  {showDropDownInner === true &&
                    <ul data-aos="fade-left" data-aos-duration="1000" className='rounded-lg flex-col gap-5 absolute bg-neutral-200 right-[-13rem] p-6 w-[10rem]'>
                      <li>Home</li>
                      <li>Shop</li>
                    </ul>
                  }
                  </li>
                  <li className=''>Checkout Page</li>
                </ul>
            }
      </ul>
      <div className='flex gap-7 text-2xl'>
        <i className='hover:bg-neutral-200 rounded-full px-3 text-neutral-800 py-2 cursor-pointer hover:transition hover:ease-linear'><CiSearch /></i>
        <i className='hover:bg-neutral-200 rounded-full px-3 py-2 text-neutral-800 cursor-pointer hover:transition hover:ease-linear'><GoPerson /></i>
        <i className='hover:bg-neutral-200 rounded-full px-3 py-2 text-neutral-800 cursor-pointer hover:transition hover:ease-linear'><CiShoppingCart /></i>
      </div>
    </div>
  )
}

export default Navbar;
