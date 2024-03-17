/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import SliderBtn from "../../SliderBtn";
import { useEffect, useState } from "react";
import SliderProductItems from "./SliderProductItems";

import './pagination-slider-product.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { titles, description } from "@/public/data/sliderProductImages";
import Link from "next/link";

export default function SliderProduct() {
    const [imageIndex, setImageIndex] = useState(0);
    const [animateIndex, setAnimateIndex] = useState(true);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };

    const handleSliderIndex = (e: any) => {
        setAnimateIndex(prev => !prev);
        setTimeout(() => {
            setImageIndex(e.realIndex);
            setAnimateIndex(prev => !prev);
        }, 300)
    }

    return (
        <div className="lg:max-w-[1136px] w-[90%] mx-auto flex flex-col lg:flex-row justify-between lg:h-[431px] items-center ltr gap-6 overflow-hidden">
            <div className='bg-[url("/Image/background/bg-slide-product.png")] bg-cover bg-no-repeat min-w-[270px] aspect-[836/609] w-[90%] lg:max-w-lg max-w-xl relative'>
                <SliderProductItems
                    imageIndex={imageIndex}
                    animateIndex={animateIndex}
                />
            </div>
            <div className="lg:max-w-[464px] w-full flex flex-col gap-2">
                <h1 className="text-center lg:text-right font-bold text-base-300 text-[32px] lg:text-[44px] leading-[62px]">
                    محصولات پدربزرگ
                </h1>
                <div className="flex flex-col items-start gap-2 justify-start">
                    <div className="flex justify-center w-full md:w-auto">
                        <Swiper
                            onSlideChange={(e: any) => {
                                isTop && imageIndex !== e.realIndex && handleSliderIndex(e)
                            }}
                            direction='vertical'
                            loop={true}
                            simulateTouch={false}
                            
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                el: '.paginate',
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.next-descript-btn',
                                prevEl: '.prev-descript-btn',
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper h-[34px]"
                        >
                            {
                                titles.map((title, i) => (
                                    <SwiperSlide key={i}>
                                        <h2 className="text-yellow-400 text-2xl font-bold leading-9 text-center lg:text-right">
                                            {title}
                                        </h2>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <Swiper
                        direction='vertical'
                        loop={true}
                        simulateTouch={false}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            el: '.paginate',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.next-descript-btn',
                            prevEl: '.prev-descript-btn',
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper h-64 lg:h-[137px]"
                    >
                        {
                            description.map((descript, i) => (
                                <SwiperSlide key={i}>
                                    <p className="text-justify text-md text-base-300 leading-8">
                                        {descript}
                                    </p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="flex justify-center items-center gap-1 paginate" style={{ transform: "translate3d(0px, 0, 0)" }}>
                    <div className="w-[36px] h-2 bg-[#FFC436] rounded-lg" ></div>
                    <div className="w-3 h-2 bg-[#E3E3E3] rounded-lg" ></div>
                    <div className="w-3 h-2 bg-[#E3E3E3] rounded-lg" ></div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <SliderBtn prev className="prev-descript-btn" />
                        <SliderBtn next className="next-descript-btn" />
                    </div>
                    <div>
                        <Link href='/products'>
                        <button className="solid-btn rectangle-btn">
                            ورود به فروشگاه
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
