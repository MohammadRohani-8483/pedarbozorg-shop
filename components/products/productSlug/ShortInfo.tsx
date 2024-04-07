import { toFixedDigit } from '@/public/Functions/toFixedDigit'
import React from 'react'
import { FaStar } from 'react-icons/fa'
type specification = {
    id: number,
    key: string,
    value: string,
}

const ShortInfo = ({ product }: any) => {
    const specifications = product.specifications
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-2xl text-base-300 font-bold'>
                    {product.name}
                </h1>
                {
                    product.rate_count > 0 &&
                    <div className='flex justify-center items-center gap-1'>
                        <FaStar className='text-[#FFC436]' />
                        <p className='text-[#757575] text-base '>
                            {toFixedDigit(product.avg_rate)}
                        </p>
                        <p className='text-[#ADADAD] text-base'>
                            ({product.rate_count})
                        </p>
                    </div>
                }
            </div>
            <div className='h-[1px] w-full bg-[#E3E3E3]' />
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-base-300 font-bold'>
                    توضیحات
                </h3>
                <p className='text-[#626262] text-sm w-full text-justify'>
                    {product.short_description}
                </p>
            </div>
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-base-300 font-bold'>
                    مشخصات
                </h3>
                <div className='flex flex-col  gap-2 '>
                    {product.specifications?.map((specification: specification) => (
                        <div key={specification.id} className='flex justify-start items-center gap-4'>
                            <p className='text-[#ADADAD] text-sm'>
                                {specification.key}{!specification.key.includes(":") ? " :" : ''}
                            </p>
                            <h3 className='text-base text-[#626262] font-bold'>
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