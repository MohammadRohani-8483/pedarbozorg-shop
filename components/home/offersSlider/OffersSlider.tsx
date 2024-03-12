'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import SliderBtn from '../../SliderBtn';

import { useMediaQuery } from 'react-responsive'
import ProductCardInSlider from './ProductCardInSlider';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function OffersSlider() {
    const [products, setProducts] = useState([])
    const url = "/api/core-api/site/landing/"
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProducts(res.data.most_discount_products)
            })
    }, [])

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
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right-white.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-white'>بیشترین تخفیف ها</h1>
                <Image
                    src="/Image/title-vecors/left-white.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
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
                    {products.map((product: any) => {
                        return (
                            <SwiperSlide
                                key={product.id}
                                className="px-4"
                            >
                                <ProductCardInSlider
                                    name={product.name}
                                    price={product.min_price}
                                    image={product.featured_image}
                                    priceWithOffer={product.min_price}
                                    link={`products/${product.slug}`}
                                    score={product.avg_rate}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <SliderBtn next
                    className='next-offer-btn'
                />
            </div>
        </div>
    );
}
