'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import SliderBtn from '../../SliderBtn';

import { comments } from "public/data/comments"

import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import CommentCard from './CommentCard';

export default function CommentsSlider() {

    return (
        <div className='flex flex-col justify-center items-center gap-8 mt-10 md:mt-20 max-w-[1268px] mx-auto w-[90%]'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-base-300'>نظرات کاربران</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className='flex justify-center items-center gap-8'>

                <SliderBtn prev className='prev-comment-btn hidden md:flex' />
                <Swiper
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.next-comment-btn',
                        prevEl: '.prev-comment-btn',
                    }}
                    modules={[Navigation]}
                    className="mySwiper max-w-[1136px] !py-4"
                >
                    {
                        comments.slice(0, 8).map((comment) => (
                            <SwiperSlide
                                key={comment.id}
                                className='px-2'
                            >
                                <CommentCard
                                    name={comment.name}
                                    score={comment.score}
                                    product={comment.productName}
                                    like={comment.like}
                                    dislike={comment.disLike}
                                    comment={comment.comment}
                                />
                            </SwiperSlide>)
                        )
                    }
                </Swiper>
                <SliderBtn next className='next-comment-btn hidden md:flex' />
            </div>
        </div>
    );
}
