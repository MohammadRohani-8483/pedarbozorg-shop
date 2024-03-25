'use client'
import React, { useEffect, useState } from 'react'
import ProfileBox from './ProfileBox'
// import { products } from '@/public/data/fakeProducts';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

import SliderBtn from 'components/SliderBtn';
import ProductCard from 'components/productCard';
import SkeletonCard from 'components/SkeletonCard';
import toast, { Toaster } from 'react-hot-toast';

const LastSeenProducts = ({ products }: any) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])

  const toastify = (msg: string) => {
    toast.error(msg)
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <ProfileBox title='آخرین بازدید ها'>
        <div className='flex flex-col gap-4 justify-center items-center w-full md:hidden'>
          {products?.slice(0, 6).map((product: any, i: number) => (
            <React.Fragment key={product.id}>
              {start ?
                <ProductCard
                  link={product.slug}
                  name={product.name}
                  price={product.min_sell_price}
                  image={product.featured_image}
                  score={product.avg_rate}
                  priceWithOffer={product.min_sell_price}
                  product={product}
                  toastify={toastify}
                />
                :
                <SkeletonCard />
              }
            </React.Fragment>
          ))}
        </div>
        <div className='relative w-full hidden md:block'>
          {start ?
            <>
              <SliderBtn prev
                className='prev-favorite-btn absolute -right-5 top-[30%] z-10'
              />
              <SliderBtn next
                className='next-favorite-btn absolute -left-5 top-[30%] z-10'
              />
              <Swiper
                slidesPerView={2}
                spaceBetween={16}
                freeMode={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  }
                }}
                navigation={{
                  nextEl: '.next-favorite-btn',
                  prevEl: '.prev-favorite-btn',
                }}
                modules={[FreeMode, Navigation]}
                className="mySwiper !p-4 !-mx-4"
              >
                {products?.map((product: any, i: number) => {
                  return (
                    <SwiperSlide key={product.id} className='!flex !justify-center !items-center !gap-5'>
                      <ProductCard
                        link={product.slug}
                        name={product.name}
                        price={product.min_sell_price}
                        image={product.featured_image}
                        score={product.avg_rate}
                        priceWithOffer={product.min_sell_price}
                        product={product}
                        toastify={toastify}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </>
            :
            <div className='flex w-full justify-between items-center'>
              <div className='w-full flex justify-center'>
                <SkeletonCard />
              </div>
              <div className='w-full flex justify-center'>
                <SkeletonCard />
              </div>
              <div className='hidden lg:block w-full flex justify-center'>
                <SkeletonCard />
              </div>
            </div>
          }
        </div>
      </ProfileBox>
    </>
  )
}

export default LastSeenProducts