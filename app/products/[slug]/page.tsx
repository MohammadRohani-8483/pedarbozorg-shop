'use client'
import React, { useEffect, useRef, useState } from 'react'
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
import formatNumber from '@/public/Functions/formatNumber';
import AddToCartItem from '@/app/components/products/productSlug/AddToCartItem';
import AddToCartBox from '@/app/components/products/productSlug/AddToCartBox';

export default function ProductsSlug() {
    const { slug } = useParams()
    const [product, setProduct] = useState<any>({})
    const api = '/api/store-api/products-public/'
    const [correctAPI, setCorrectAPI] = useState(true)

    useEffect(() => {
        axios.get(`${api}${slug}`)
            .then(res => {
                setProduct(res.data)
                res.status !== 200 && setCorrectAPI(false)
            })
            .catch(err => {
                console.log(err)
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

    // const [itemsInfo, setItemsInfo] = useState<any>([])

    // const itemsInfoRefs = useRef(namesInfos.map(() => React.createRef()))

    // useEffect(() => {
    //     const calculateScrollPositions = () => {
    //         const newItemsInfo: itemsInfo = [];
    //         itemsInfoRefs.current.forEach((item: any, i, array) => {
    //             const element = item;
    //             if (element) {
    //                 const rect = element.getBoundingClientRect();
    //                 let scrollFrom = rect.top + 100;
    //                 let scrollThere;
    //                 i === 0 ? scrollThere = 0 : scrollThere = scrollFrom
    //                 let scrollTo;
    //                 i === array.length - 1 ? scrollTo = 120000 : scrollTo = rect.top + 100 + rect.height;

    //                 newItemsInfo.push({
    //                     name: namesInfos[i],
    //                     scrollFrom,
    //                     scrollThere,
    //                     scrollTo,
    //                 });
    //                 setItemsInfo(newItemsInfo);
    //             }

    //         })
    //     };
    // }, [itemsInfoRefs])


    // console.log(product.categories[0]?.title || 0)

    return (
        <main className='w-full mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-4 py-20 md:py-[117px]'>
            {correctAPI ?
                <>
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
                        <Link href={`/products/`} className='px-3 py-2 text-base-300'>
                            {"ادویه"}
                        </Link>
                        /
                        <Link href={`/products/${slug}`} className='px-3 py-2 text-base-300'>
                            {product.name}
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
                    {/* <RelatedProducts product={product.related_products} /> */}
                </>
                :
                <div className='flex justify-center items-center h-[300px] text-3xl text-gray-400 font-bold'>
                    محصول مورد نظر موجود نمیباشد.
                </div>
            }
        </main>
    )
}
