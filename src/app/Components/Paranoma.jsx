"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Pagination, Navigation } from 'swiper';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const PanoramaSlider = () => {
  return (
    <Swiper
      slidesPerView={3}  // Number of slides visible at once
      spaceBetween={30}  // Space between slides in pixels
      centeredSlides={true} // Center the active slide
      loop={true} // Enable continuous loop mode
      pagination={{ clickable: true }} // Add pagination dots
      navigation={true} // Add navigation arrows
    >
      <SwiperSlide>
        <div style={{ height: '300px', backgroundColor: '#ff6347' }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', backgroundColor: '#4682b4' }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', backgroundColor: '#32cd32' }}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', backgroundColor: '#ffa500' }}>Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ height: '300px', backgroundColor: '#9400d3' }}>Slide 5</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PanoramaSlider;
