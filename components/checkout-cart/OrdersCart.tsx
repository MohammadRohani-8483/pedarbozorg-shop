import Image from 'next/image'
import React from 'react'

type props = {
    image: string
    name: string
    quantity: number
}

const OrdersCart = ({ image, name, quantity }: props) => {
    return (
        <div className='w-[133px] flex flex-col gap-2 justify-center items-center'>
            <Image
                src={image}
                alt='product'
                width={133}
                height={133}
            />
            <div className='w-full h-[1px] bg-[#EDEDED]' />
            <div className='flex flex-col w-full justify-center items-start gap-1'>
                <h2 className='text-[#353535] text-sm leading-[18.2px]'>
                    {name}
                </h2>
                <div className='flex justify-center items-center gap-2'>
                    <div className='rounded-full bg-[#626262] size-1.5' />
                    <p className='text-[#626262] text-[10px] leading-[18px]'>
                        {quantity} عدد
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrdersCart