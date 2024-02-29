'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import ImageGallery from '@/app/components/products/productSlug/ImageGallery';
import Features from '@/app/components/products/productSlug/Features';
import ShortInfo from '@/app/components/products/productSlug/ShortInfo';
import LongInfo from '@/app/components/products/productSlug/LongInfo';
import Star from '@/app/components/products/productSlug/Star';

export default function ProductsSlug() {
    const { slug } = useParams()
    const [product, setProduct] = useState({})
    const api = '/api/store-api/products-public/'

    // useEffect(() => {
    //     axios.get(`${api}${slug}`)
    //         .then(res => {
    //             setProduct(res.data)
    //         })
    // }, [slug]);

    const avgRate = 3.5
    const roundRate = Math.floor(avgRate)

    return (
        <main className='w-full mx-auto max-w-[1136px] flex flex-col gap-4 py-20'>
            <div className='flex w-[90%] mx-auto justify-start items-center text-[#ADADAD] text-sm'>
                <div className='px-3 py-2 text-base-300'>
                    پدربزرگ
                </div>
                /
                <div className='px-3 py-2 text-base-300'>
                    ادویه جات
                </div>
                /
                <div className='px-3 py-2 text-base-300'>
                    آرد نخودچی
                </div>
            </div>
            <div className='w-[90%] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div className='flex w-full justify-end items-center gap-2'>
                    <div className='relative w-10 h-10'>
                        <Image
                            src='/iconSax/bell.svg'
                            alt='Bell icon'
                            fill
                        />
                    </div>
                    <div className='relative w-10 h-10'>
                        <Image
                            src='/iconSax/share-green.svg'
                            alt='Share icon'
                            fill
                        />
                    </div>
                    <div className='relative w-10 h-10'>
                        <Image
                            src='/iconSax/love-green.svg'
                            alt='Love icon'
                            fill
                        />
                    </div>
                </div>
                <ImageGallery />
                <div className='flex flex-col w-full gap-4 justify-center items-center'>
                    <ShortInfo />
                    <Features />
                </div>
            </div>
            <LongInfo />
            <div className='w-[90%] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div className='bg-white rounded-3xl w-full h-auto border border-[#E3E3E3] p-4 flex flex-col justify-center items-center gap-4'>
                    <div className='text-[#ADADAD] text-base font-bold'>
                        <span className='text-base-300 text-lg'>{avgRate}</span> از 5
                    </div>
                    <div className='flex gap-4 justify-center items-center'>
                        {Array.from({ length: roundRate }, (_, i) => {
                            return (
                                <Image key={i}
                                    src='/iconSax/like-yellow.svg'
                                    alt="love"
                                    width={18}
                                    height={18}
                                />
                            )
                        })}
                        <Star present={(avgRate - roundRate) * 100} />
                        {Array.from({ length: 4 - roundRate }, (_, i) => {
                            return (
                                <Image key={i}
                                    src='/iconSax/like-yellow-regular.svg'
                                    alt="love"
                                    width={18}
                                    height={18}
                                />
                            )
                        })}
                    </div>
                    <h5 className='text-[#757575] text-xs'>
                        از مجموع {13} امتیاز
                    </h5>
                    <button
                        className='border border-base-300 rounded-md text-base-300 text-base rectangle-btn w-full transition-all duration-300 hover:bg-base-200 py-2'
                    >
                        افزودن نظر
                    </button>
                </div>
                <div className='flex flex-col gap-4 justify-center items-start w-full py-2'>
                    <h2 className='text-xl font-bold text-base-300'>
                        نظرات کاربران
                    </h2>
                    <div
                        // onClick={() => {
                        //     setIsOrderingOpen(true)
                        //     document.documentElement.classList.add('overflow-hidden')
                        // }}
                        className='flex gap-2 justify-center items-center text-sm text-base-300 px-3 py-1.5 cursor-pointer'
                    >
                        <Image
                            src='/iconSax/sort.svg'
                            alt='sort'
                            width={20}
                            height={20}
                        />
                        <h2>مرتب سازی</h2>
                    </div>
                    <div className='border-t border-[#CBCBCB] w-full'></div>
                </div>
            </div>
        </main>
    )
}
