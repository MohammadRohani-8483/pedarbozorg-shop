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
import SkeletonCard from '@/components/SkeletonCard';

export default function OffersSlider({ products }: any) {
    // const [products, setProducts] = useState<any[]>()
    const url = "/api/core-api/site/landing/"
    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             setProducts(res.data.most_discount_products)
    //         })
    // }, [])

    const [start, setStart] = useState(false)

    useEffect(() => {
        setStart(true)
    }, [])


    console.log(products)

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
        <div className='text-center max-w-[1136px] mx-auto w-[90%] px-2 py-4 sm:px-4 md:px-6 sm:py-5 md:py-6 bg-base-300 mt-10 rounded-2xl'>
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
            <div className='w-full justify-center flex gap-2 sm:gap-4 md:gap-6 text-right mt-6 items-center mx-auto'>
                <SliderBtn prev
                    className='prev-offer-btn'
                />
                {start ?
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={8}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 12
                            },
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
                            nextEl: '.next-offer-btn',
                            prevEl: '.prev-offer-btn',
                        }}
                        modules={[Navigation]}
                        className="mySwiper flex justify-center"
                        loop={true}
                    >
                        {products?.map((product: any) => {
                            return (
                                <SwiperSlide
                                    key={product.id}
                                    className="sm:px-4"
                                >
                                    <ProductCardInSlider
                                        name={product.name}
                                        price={product.min_price}
                                        image={product.featured_image}
                                        priceWithOffer={product.min_price}
                                        link={`/products/${product.slug}`}
                                        score={product.avg_rate}
                                        product={product}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    :
                    <div className='flex justify-between items-center w-full h-72 gap-2'>
                        <div className='w-full flex justify-center'>
                            <SkeletonCard slider />
                        </div>
                        <div className='hidden sm:block w-full flex justify-center'>
                            <SkeletonCard slider />
                        </div>
                        <div className='hidden md:block w-full flex justify-center'>
                            <SkeletonCard slider />
                        </div>
                        <div className='hidden lg:block w-full flex justify-center'>
                            <SkeletonCard slider />
                        </div>
                    </div>
                    // <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 overflow-hidden justify-items-center items-center w-full h-72 bg-red-400 gap-2 px-4'>
                    //     <SkeletonCard />
                    //     <div className='hidden sm:block'>
                    //         <SkeletonCard />
                    //     </div>
                    //     <div className='hidden'>
                    //         <SkeletonCard />
                    //     </div>
                    //     <div className='hidden'>
                    //         <SkeletonCard />
                    //     </div>
                    // </div>
                }
                <SliderBtn next
                    className='next-offer-btn'
                />
            </div>
        </div>
    );
}
