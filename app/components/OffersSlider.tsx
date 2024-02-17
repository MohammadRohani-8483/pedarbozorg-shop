'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import SliderBtn from './SliderBtn';

import { offersList } from "public/data/offersList"

import { useMediaQuery } from 'react-responsive'
import ProductCardInSlider from './ProductCardInSlider';

export default function OffersSlider() {
    const isSmallWidth = useMediaQuery({
        query: "(min-width: 640px)"
    })

    const isMediumWidth = useMediaQuery({
        query: "(min-width: 768px)"
    })

    const isLargeWidth = useMediaQuery({
        query: "(min-width: 1024px)"
    })

    return (
        <div className='text-center max-w-[1136px] mx-auto w-[90%] p-6 bg-base-300 mt-10 rounded-3xl'>
            <div className='text-white font-bold text-2xl '>بیشترین تخفیف ها</div>
            <div className='justify-center flex gap-6 text-right mt-6 items-center mx-auto'>
                <SliderBtn prev
                    className='prev-offer-btn'
                />
                <Swiper
                    slidesPerView={isLargeWidth ? 4 : isMediumWidth ? 3 : isSmallWidth ? 2 : 1}
                    navigation={{
                        nextEl: '.next-offer-btn',
                        prevEl: '.prev-offer-btn',
                    }}
                    modules={[Navigation]}
                    className="mySwiper flex justify-center "
                >
                    {offersList.map((product, i) => {
                        return (
                            <SwiperSlide
                                key={i}
                                className="px-4"
                            >
                                <ProductCardInSlider
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    offerPresent={product.offerPresent}
                                    link={product.link}
                                />
                            </SwiperSlide>)
                    })}
                </Swiper>
                <SliderBtn next
                    className='next-offer-btn'
                />
            </div>
        </div>
    );
}
