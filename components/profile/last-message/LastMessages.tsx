import React from 'react'
import Message from '../Message'
import ProfileBox from '../ProfileBox'
import './LastMessages.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

import SliderBtn from '../../SliderBtn';

const LastMessages = () => {
    return (
        <ProfileBox title='آخرین پیغام ها' viewBtn>
            <div className='flex flex-col gap-4 justify-center items-center w-full md:hidden'>
                {Array(10).fill(1).slice(0, 4).map((_, i, array) => (
                    <React.Fragment key={crypto.randomUUID()}>
                        <Message
                            desc='سفارش شما درحال پردازش می‌باشد و پس از تایید تحویل پست خواهد شد'
                            month='08' day='05' year='1409' title='سفارش شما ثبت شد'
                        />
                        {i < array.length - 1 &&
                            <div className='h-[1px] w-full bg-[#E3E3E3]' />
                        }
                    </React.Fragment>
                ))}
            </div>
            <div className='relative w-full hidden md:block'>
                <SliderBtn prev
                    className='prev-message-btn absolute -right-5 top-[30%] z-10'
                />
                <SliderBtn next
                    className='next-message-btn absolute -left-5 top-[30%] z-10'
                />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={16}
                    freeMode={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                    navigation={{
                        nextEl: '.next-message-btn',
                        prevEl: '.prev-message-btn',
                    }}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    {Array(10).fill(1).map((_, i, array) => {
                        return (
                            <SwiperSlide key={crypto.randomUUID()} className='!flex !justify-center !items-center !gap-5'>
                                <Message
                                    desc='سفارش شما درحال پردازش می‌باشد و پس از تایید تحویل پست خواهد شد'
                                    month='08' day='05' year='1409' title='سفارش شما ثبت شد'
                                />
                                {
                                    i < array.length - 1 &&
                                    <div className='w-[1px] h-[112px] bg-[#E3E3E3]' />
                                }
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </ProfileBox>
    )
}

export default LastMessages