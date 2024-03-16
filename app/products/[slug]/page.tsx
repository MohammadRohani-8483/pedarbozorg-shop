'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import ImageGallery from '@/components/products/productSlug/ImageGallery';
import Features from '@/components/products/productSlug/Features';
import ShortInfo from '@/components/products/productSlug/ShortInfo';
import LongInfo from '@/components/products/productSlug/LongInfo';
import Link from 'next/link';
import AvgRateBox from '@/components/products/productSlug/AvgRateBox';
import CommentSection from '@/components/products/productSlug/CommentSection';
import AddToCartBox from '@/components/products/productSlug/AddToCartBox';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import ShareForm from '@/components/products/ShareForm';

export default function ProductsSlug() {
    const { slug } = useParams()
    const [product, setProduct] = useState<any>()
    const api = '/api/store-api/products-public/'
    const [correctAPI, setCorrectAPI] = useState(true)
    const [isShareFormOpen, setIsShareFormOpen] = useState(false)

    const pathname = usePathname()
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    useEffect(() => {
        axios.get(`${api}${slug}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                setProduct({})
                err.response.status === 404 && setCorrectAPI(false)
                // console.log("err " + err)
            })
    }, [slug]);

    const itemsInfo = [
        {
            id: 1,
            name: "معرفی",
            ref: useRef<any>()
        },
        {
            id: 2,
            name: "مشخصات",
            ref: useRef<any>()
        },
        {
            id: 3,
            name: "فواید",
            ref: useRef<any>()
        },
        {
            id: 4,
            name: "نظرات کاربران",
            ref: useRef<any>()
        }
    ]

    const TITLE = product?.name ? `قیمت و خرید ${product?.name}` : 'پدربزرگ'

    useEffect(() => {
        document.title = TITLE
    }, [TITLE])

    const toastify = () => {
        toast.error("این قابلیت به زودی اضافه میشود.")
    }

    const clickShareFormHandler = () => {
        setIsShareFormOpen(true)
        document.documentElement.classList.add('overflow-hidden')
    }

    const link = origin + pathname

    return (
        <main className='w-full mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-4 py-20 md:py-[117px] pb-48 lg:pb-[117px]'>
            {product ?
                correctAPI ?
                    <>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                            toastOptions={{ duration: 3000 }}
                        />
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
                            <Link href={`/products/`} className='px-3 py-2 text-base-300' onLoad={(e) => console.log(e)}>
                                {product.categories?.map((category: any) => category.title)}
                            </Link>
                            /
                            <Link href={`/products/${slug}`} className='px-3 py-2 text-base-300'>
                                {product?.name}
                            </Link>
                        </div>
                        <div className='w-[90%] lg:w-full mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start'>
                            <div className='flex flex-row md:flex-col w-full md:w-auto justify-end items-center gap-2'>
                                <div className='relative w-10 h-10 cursor-pointer'>
                                    <motion.div
                                        onClick={toastify}
                                        className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/bell.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[195px] hover:bg-[#e0f1e9] transition-all duration-300'
                                    // whileHover={{ width: "195px", backgroundColor: "#e0f1e9" }}
                                    >
                                        <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                                            افزودن به علاقه مندی ها
                                        </h2>
                                    </motion.div>
                                </div>
                                <div className='relative w-10 h-10 cursor-pointer'>
                                    <motion.div
                                        onClick={clickShareFormHandler}
                                        className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/share-green.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[158px] hover:bg-[#e0f1e9] transition-all duration-300'
                                    // whileHover={{ width: "158px", backgroundColor: "#e0f1e9" }}
                                    >
                                        <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                                            به اشتراک گذاشتن
                                        </h2>
                                    </motion.div>
                                </div>
                                {isShareFormOpen && <ShareForm setIsFormOpen={setIsShareFormOpen} link={link} />}
                                <div className='relative w-10 h-10 cursor-pointer'>
                                    <motion.div
                                        onClick={toastify}
                                        className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/love-green.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[180px] hover:bg-[#e0f1e9] transition-all duration-300'
                                    // whileHover={{ width: "180px", backgroundColor: "#e0f1e9" }}
                                    >
                                        <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                                            اطلاع رسانی تخفیف ها
                                        </h2>
                                    </motion.div>
                                </div>
                            </div>
                            <ImageGallery image={product?.featured_image} />
                            <div className='flex flex-col w-full gap-4 justify-center items-center'>
                                <ShortInfo product={product} />
                                <Features />
                            </div>
                            <AddToCartBox product={product} />
                        </div>
                        <LongInfo product={product} itemsInfo={itemsInfo} />
                        <div className='w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start ltr'>
                            <AvgRateBox product={product} />
                            <CommentSection commentsID={product.id} itemsInfo={itemsInfo} />
                        </div>
                        {/* <AddToCartBoxMobile product={product} /> */}
                        {/* <RelatedProducts product={product.related_products} /> */}
                    </>
                    :
                    <div className='flex justify-center items-center h-[400px] text-3xl text-gray-400 font-bold'>
                        محصول مورد نظر موجود نمیباشد.
                    </div>

                :
                <div className='w-full h-[500px] md:h-[400px] flex justify-center items-center gap-4 text-xl md:text-3xl text-gray-400 md:font-bold'>
                    <div className='w-6 md:w-12 relative flex justify-center items-center'>
                        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                            <div className="relative border-t-transparent border-solid animate-[rereverse-spin_1s_ease-in-out_infinite] rounded-full border-gray-400 border-[2px] md:border-[3px] h-6 md:h-12 w-6 md:w-12">
                            </div>
                        </div>
                        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                            <div className="right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 border-t-transparent border-solid animate-[reverse-spin_1s_ease-in-out_infinite] rounded-full border-gray-400 border-[2px] md:border-[3px] h-3 md:h-6 w-3 md:w-6">
                            </div>
                        </div>
                    </div>
                    در حال پیدا کردن محصول ...
                </div>
            }
        </main>
    )
}
