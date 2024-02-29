'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
// import ImageGallery from 'public/components/products/productSlug/ImageGallery';
import { FaStar } from 'react-icons/fa';
import ImageGallery from '@/app/components/products/productSlug/ImageGallery';

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

    return (
        <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col gap-4 py-20'>
            <div className='flex w-full justify-start items-center text-[#ADADAD] text-sm'>
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
            <div className='flex flex-col gap-4 justify-center items-center'>
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
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-2xl text-base-300 font-bold'>
                            آرد نخودچی
                        </h1>
                        <div className='flex justify-center items-center gap-4'>
                            <p className='text-sm text-base-300 px-3'>
                                14 نظر
                            </p>
                            <div className='flex justify-center items-center gap-1'>
                                <FaStar className='text-[#FFC436]' />
                                <p className='text-[#757575] text-base '>
                                    4.3
                                </p>
                                <p className='text-[#ADADAD] text-base'>
                                    (13)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[1px] w-full bg-[#E3E3E3]'></div>
                    <div className='flex flex-col gap-4 justify-start items-start w-full'>
                        <h3 className='text-base text-base-300 font-bold'>
                            توضیحات
                        </h3>
                        <p className='text-[#626262] text-sm w-full text-justify'>
                            از ابزارهای کاربردی برای به پایان متخصصان شناخت ایجاد زیادی شناخت رااز ابزارهای کاربردی برای متخصصان شناخت ایجاد زیادی شناخت را
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 justify-start items-start w-full'>
                        <h3 className='text-base text-base-300 font-bold'>
                            مشخصات
                        </h3>
                        <div className='flex flex-col  gap-2 '>
                            <div className='flex justify-center items-center gap-4'>
                                <p className='text-[#ADADAD] text-sm'>
                                    حالت فیزیکی
                                </p>
                                <h3 className='text-base text-[#626262] font-bold'>
                                    جامد
                                </h3>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <p className='text-[#ADADAD] text-sm'>
                                    حالت فیزیکی
                                </p>
                                <h3 className='text-base text-[#626262] font-bold'>
                                    جامد
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Image
                                src='/iconSax/moneys.svg'
                                alt='قیمت مناسب'
                                width={32}
                                height={32}
                            />
                            <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                                قیمت مناسب
                            </h3>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Image
                                src='/iconSax/tick-square.svg'
                                alt='تضمین اصالت'
                                width={32}
                                height={32}
                            />
                            <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                                تضمین اصالت
                            </h3>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Image
                                src='/iconSax/tree-gray.svg'
                                alt='100% طبیعی'
                                width={32}
                                height={32}
                            />
                            <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                                100% طبیعی
                            </h3>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Image
                                src='/iconSax/truck-time.svg'
                                alt='ارسال سریع و رایگان'
                                width={32}
                                height={32}
                            />
                            <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                                ارسال سریع و رایگان
                            </h3>
                            <p className='text-[10px] text-[#757575] text-center whitespace-nowrap'>
                                سفارش بالای ۷۰۰ هزار تومان تهران
                            </p>
                            <p className='text-[10px] text-[#757575] text-center whitespace-nowrap'>
                                سفارش بالای ۸۵۰ تومان شهرستان‌ها
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
