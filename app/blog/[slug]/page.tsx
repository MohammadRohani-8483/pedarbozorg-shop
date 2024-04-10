import { blog } from '@/public/data/blogs'
import Image from 'next/image'
import React from 'react'

const fetchFunc = async (slug?: string) => {
    const res = fetch(`${process.env.API}/store-api/products-public/${slug}`, {
        method: "GET"
    })
    return (await res).json()
}

const Page = ({ params }: any) => {
    // const product = await fetchFunc(params.slug)

    return (
        <main className='w-full mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-4 py-20 md:py-[117px] pb-48 lg:pb-[117px]'>
            {true ?
                <>
                    <Image
                        src="/Image/background/vectors/tree-2.svg"
                        alt="tree 2"
                        width={218}
                        height={218}
                        className='top-2 left-0 absolute z-[-1]'
                    />
                    <div dangerouslySetInnerHTML={{ __html: blog.body }} className='[&_img]:!w-full [&_img]:!rounded-2xl [&_b]:!text-secondry-base [&_b]:!text-xl [&_b]:!font-bold [&_b_a_span]:!text-xl [&_b_a_span]:!text-secondry-base [&_b_a_span]:!font-bold [&_b_span]:!text-secondry-base [&_b_span]:!font-bold [&_b_span]:!text-xl [&_*]:!text-justify [&_*]:!font-light [&_*]:!leading-8 [&_*]:!text-secondry-shade-4'></div>
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