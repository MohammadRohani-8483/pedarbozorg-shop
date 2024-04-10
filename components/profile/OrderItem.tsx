import Image from 'next/image'
import React from 'react'

const OrderItem = ({ icon, title, count }: any) => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='flex flex-col items-center justify-center gap-2 text-base font-bold text-secondry-base'>
                <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                />
                {title}
            </div>
            <div className="bg-[url('/Image/background/bg-number-orders.svg')] bg-cover w-[70px] h-[82px] bg-no-repeat flex justify-center items-center font-bold text-3xl text-secondry-base">
                {count}
            </div>
        </div>
    )
}

export default OrderItem