import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import { sliderSettings } from './common.js';
import data from './slider.json';
import { motion } from 'framer-motion';

const Carousel = () => {
  return (
    <div className='py-[1.5rem] w-5/6 overflow-hidden relative mx-auto mt-4 cursor-pointer'>

        <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
                data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className='flex flex-col justify-center items-start gap-[0.6rem] p-4 rounded-[10px] max-w-[max-content] m-auto transition-all delay-300 ease-in'>
                            <img src={card.image} alt='samskaras' className='rounded-xl'/>

                            <span className='font-bold text-xl'>{card.name}</span>

                            <span className='text-sm'>{card.description}</span>
                        </div>
                    </SwiperSlide>
                )) 
            }
        </Swiper>

    </div>
  )
}

export default Carousel;

const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <div className='flex justify-center gap-4 xs:mt-2 mb-1'>
            <motion.button onClick={() => swiper.slidePrev()}
                className='text-xl py-[0.2rem] px-[0.8rem] border-none rounded-md bg-white cursor-pointer shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]'
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                &lt;
            </motion.button>
            <motion.button onClick={() => swiper.slideNext()}
                className='text-xl py-[0.2rem] px-[0.8rem] border-none rounded-md bg-white cursor-pointer shadow-[0_0_5px_1px_rgba(0,0,0,0.25)]'
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                &gt;
            </motion.button>
        </div>
    )
}