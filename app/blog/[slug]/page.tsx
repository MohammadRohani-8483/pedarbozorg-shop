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
                        width={400}
                        height={400}
                        className='top-2 left-0 absolute z-[-1]'
                    />
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