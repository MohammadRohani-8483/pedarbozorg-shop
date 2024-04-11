import { toFixedDigit } from '@/public/Functions/toFixedDigit'
import { productDetail } from '@/public/types/products'
import React from 'react'
import { FaStar } from 'react-icons/fa'

type props = {
    product: productDetail
}

const ShortInfo = ({ product }: props) => {
    const { rate_count, avg_rate, short_description, specifications, name } = product
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-2xl text-secondry-base font-bold'>
                    {name}
                </h1>
                {
                    rate_count && avg_rate &&
                    <div className='flex justify-center items-center gap-1'>
                        <FaStar className='text-primery-base' />
                        <p className='text-neutral-600 text-base '>
                            {toFixedDigit(avg_rate)}
                        </p>
                        <p className='text-neutral-500 text-base'>
                            ({rate_count})
                        </p>
                    </div>
                }
            </div>
            <div className='h-[1px] w-full bg-[#E3E3E3]' />
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-secondry-base font-bold'>
                    توضیحات
                </h3>
                <p className='text-neutral-700 text-sm w-full text-justify'>
                    {short_description}
                </p>
            </div>
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-secondry-base font-bold'>
                    مشخصات
                </h3>
                <div className='flex flex-col  gap-2 '>
                    {specifications.map((specification) => (
                        <div key={specification.id} className='flex justify-start items-center gap-4'>
                            <p className='text-neutral-500 text-sm'>
                                {specification.key}{!specification.key.includes(":") ? " :" : ''}
                            </p>
                            <h3 className='text-base text-neutral-700 font-bold'>
                                {specification.value}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShortInfo