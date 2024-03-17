'use client'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image';
import ImageGallery from '@/components/products/productSlug/ImageGallery';
import Features from '@/components/products/productSlug/Features';
import ShortInfo from '@/components/products/productSlug/ShortInfo';
import Link from 'next/link';
import AddToCartBox from '@/components/products/productSlug/AddToCartBox';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import ShareForm from '@/components/products/ShareForm';
import InfosAndComments from '@/components/products/productSlug/InfosAndComments';
import Notif from '@/components/products/productSlug/Notif';

export default function ProductsSlug() {
    const { slug } = useParams()
    const [product, setProduct] = useState<any>()
    const api = '/api/store-api/products-public/'
    const [correctAPI, setCorrectAPI] = useState(true)

    useEffect(() => {
        axios.get(`${api}${slug}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                setProduct({})
                err.response.status === 404 && setCorrectAPI(false)
            })
    }, [slug]);

    const TITLE = product?.name ? `قیمت و خرید ${product?.name}` : 'پدربزرگ'

    // if(document) document.title = TITLE



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
                            <Notif />
                            <ImageGallery image={product?.featured_image} />
                            <div className='flex flex-col w-full gap-4 justify-center items-center'>
                                <ShortInfo product={product} />
                                <Features />
                            </div>
                            <AddToCartBox product={product} />
                        </div>
                        <InfosAndComments product={product} />
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
