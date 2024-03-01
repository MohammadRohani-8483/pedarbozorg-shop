'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import ImageGallery from '@/app/components/products/productSlug/ImageGallery';
import Features from '@/app/components/products/productSlug/Features';
import ShortInfo from '@/app/components/products/productSlug/ShortInfo';
import LongInfo from '@/app/components/products/productSlug/LongInfo';
import Comment from '@/app/components/products/productSlug/Comment';
import PaginationButtons from '@/app/components/PaginationButtons';
import RelatedProducts from '@/app/components/products/productSlug/RelatedProducts';
import Link from 'next/link';
import AvgRateBox from '@/app/components/products/productSlug/AvgRateBox';
import CommentSection from '@/app/components/products/productSlug/CommentSection';

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
        <main className='w-full mx-auto max-w-[1136px] flex flex-col gap-4 py-20 md:py-[117px]'>
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={400}
                height={400}
                className='top-2 left-0 absolute z-[-1]'
            />
            <div className='flex w-[90%] lg:w-full mx-auto justify-start items-center text-[#ADADAD] text-sm'>
                <Link href='/' className='px-3 py-2 text-base-300'>
                    پدربزرگ
                </Link>
                /
                <Link href={`/products/?categories=${2}`} className='px-3 py-2 text-base-300'>
                    ادویه جات
                </Link>
                /
                <Link href={`/products/${slug}`} className='px-3 py-2 text-base-300'>
                    آرد نخودچی
                </Link>
            </div>
            <div className='w-[90%] lg:w-full mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start'>
                <div className='flex flex-row md:flex-col w-full md:w-auto justify-end items-center gap-2'>
                    <div className='relative w-10 h-10 cursor-pointer'>
                        <Image
                            src='/iconSax/bell.svg'
                            alt='Bell icon'
                            fill
                        />
                    </div>
                    <div className='relative w-10 h-10 cursor-pointer'>
                        <Image
                            src='/iconSax/share-green.svg'
                            alt='Share icon'
                            fill
                        />
                    </div>
                    <div className='relative w-10 h-10 cursor-pointer'>
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
                <div className='hidden lg:flex flex-col p-4 items-center justify-center gap-5 w-full max-w-[465px] bg-white bg-opacity-75 rounded-3xl border border-[#E3E3E3]'>
                    <Image
                        src="/Image/Logo-mobile.svg"
                        alt="logo"
                        width={60}
                        height={56}
                    />
                    <h2 className='text-[#ADADAD] font-bold text-2xl'>
                        ناموجود
                    </h2>
                    <button className='w-full bg-base-200 text-base-300 text-base py-2 rounded-lg flex gap-2 justify-center items-center'>
                        <Image
                            src="/iconSax/alarm.svg"
                            alt="logo"
                            width={24}
                            height={24}
                        />
                        موجود شد اطلاع بده
                    </button>
                </div>
            </div>
            <LongInfo />
            <div className='w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start ltr'>
                <AvgRateBox />
                <CommentSection />
            </div>
            <RelatedProducts />
        </main>
    )
}
