// import React from 'react'
'use client'
import SectionFour from '@/Components/HomeSections/SectionFour';
import SectionOne from '@/Components/HomeSections/SectionOne';
import SectionTwo from '@/Components/HomeSections/SectionTwo';
import SectionThree from '@/Components/HomeSections/SectionThree';
import React, { useRef, useState } from 'react';
import SectionThreeTwo from '@/Components/HomeSections/SectionThreeTwo';
import SectionFive from '@/Components/HomeSections/SectionFive';

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionThreeTwo />
      <SectionFour />
      <SectionFive />
    </div>
  )
}

export default Home
