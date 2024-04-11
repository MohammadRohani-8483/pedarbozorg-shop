import AddToCartBox from '@/components/products/productSlug/AddToCartBox'
import Features from '@/components/products/productSlug/Features'
import ImageGallery from '@/components/products/productSlug/ImageGallery'
import InfosAndComments from '@/components/products/productSlug/InfosAndComments'
import Notif from '@/components/products/productSlug/Notif'
import ShortInfo from '@/components/products/productSlug/ShortInfo'
import { productDetail } from '@/public/types/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const fetchFunc = async (slug?: string) => {
    const res = fetch(`${process.env.API}/store-api/products-public/${slug}`, {
        method: "GET"
    })
    return (await res).json()
}

const Page = async ({ params }: any) => {
    const product:productDetail = await fetchFunc(params.slug)

    return (
        <main className='w-full mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-4 py-20 md:py-[117px] pb-48 lg:pb-[117px]'>
            {product.detail !== "یافت نشد." ?
                <>
                    <Image
                        src="/Image/background/vectors/tree-2.svg"
                        alt="tree 2"
                        width={400}
                        height={400}
                        className='top-2 left-0 absolute z-[-1]'
                    />
                    <div className='flex w-[90%] lg:w-full mx-auto justify-start items-center text-neutral-500 text-sm'>
                        <Link href='/' className='px-3 py-2 text-secondry-base'>
                            پدربزرگ
                        </Link>
                        /
                        <Link href='/products/' className='px-3 py-2 text-secondry-base'>
                            {product.categories.map((category: any) => category.title)}
                        </Link>
                        /
                        <Link href={`/products/${product.slug}`} className='px-3 py-2 text-secondry-base'>
                            {product.name}
                        </Link>
                    </div>
                    <div className='w-[90%] lg:w-full mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start'>
                        <Notif />
                        <ImageGallery image={product.featured_image} />
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
            }
        </main>
    )
}

export default Page