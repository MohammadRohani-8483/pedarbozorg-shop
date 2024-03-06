import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'

const AddToCartItem = ({ product, price, priceWithOffer, name, image }: any) => {
    const offerPresent = (price - priceWithOffer) / price * 100
    return (
        <div className='h-[65px] w-full flex justify-between items-center gap-2'>
            <div className='h-full flex justify-center items-center gap-2'>
                <Image
                    src={image}
                    alt={name}
                    width={65}
                    height={65}
                    className='rounded-md'
                />
                <h3 className='text-base-300 font-bold'>
                    {name}
                </h3>
            </div>
            <div className='gap-2 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-xl text-base-300 font-bold'>
                        {formatNumber(priceWithOffer)}
                    </h2>
                    {price !== priceWithOffer &&
                        <div className='h-5 gap-2 flex justify-center items-center'>
                            <div className='h-full flex justify-center items-center px-2 rounded-full bg-[#C62020] text-xs text-white'>
                                {offerPresent}%
                            </div>
                            <h3 className='text-[#ADADAD] text-sm line-through'>
                                {formatNumber(price)}
                            </h3>
                        </div>
                    }
                </div>
                <button className='solid-btn square-btn p-4 w-10 h-10'>
                    <Image
                        src="/iconSax/add-to-cart.svg"
                        alt='Add To Cart'
                        width={24}
                        height={24}
                        className='rounded-md'
                    />
                </button>
            </div>
        </div>
    )
}

export default AddToCartItem