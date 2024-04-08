'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import SliderBtn from '@/components/SliderBtn';

import { blogs } from "public/data/blogs"
import BlogCard from './BlogCard';

export default function BlogSlider() {
    return (
        <div className='hidden lg:flex justify-center items-center gap-8'>
            <SliderBtn prev className='prev-blog-btn'/>
            <Swiper
                slidesPerView={4}
                navigation={{
                    nextEl: '.next-blog-btn',
                    prevEl: '.prev-blog-btn',
                }}
                modules={[Navigation]}
                className="mySwiper max-w-[1136px] w-[90%] !py-4"
            >
                {
                    blogs.slice(0, 8).map((blog) => (
                        <SwiperSlide
                            key={blog.id}
                        >
                            <BlogCard
                                image={blog.image}
                                link={blog.link}
                                name={blog.name}
                                readingTime={blog.readingTime}
                                description={blog.description}
                                category={blog.category}
                                constructDay={blog.constructDay}
                                constructMonth={blog.constructMonth}
                                constructYear={blog.constructYear}
                            />
                        </SwiperSlide>)
                    )
                }
            </Swiper>
            <SliderBtn next className='next-blog-btn'/>
        </div>
    );
}
