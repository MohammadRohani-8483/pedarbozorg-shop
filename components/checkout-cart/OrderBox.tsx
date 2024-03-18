'use client'
import formatNumber from '@/public/Functions/formatNumber'
import { shopCartItem } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const OrderBox = () => {
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalSellPrice, setTotalSellPrice] = useState(0)

    const cart: shopCartItem[] = useSelector((state: any) => state.cart.cart)

    useEffect(() => {
        setTotalFinalPrice(cart.reduce((previous, current) => previous + current?.shatootInfo.finalPrice * current?.quantity, 0))
        setTotalSellPrice(cart.reduce((previous, current) => previous + current?.shatootInfo.sellPrice * current?.quantity, 0))
    }, [cart])

    const discount = totalFinalPrice - totalSellPrice

    return (
        <div className='flex flex-col bg-white rounded-3xl p-4 md:p-8 items-center justify-center w-full md:w-2/3 gap-4 md:gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                    <p>
                        قیمت کالا ها ({cart?.length})
                    </p>
                    <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                        {formatNumber(totalFinalPrice)}
                        <Image
                            src='/Image/gray-Tooman.svg'
                            alt='tooman'
                            width={23.5}
                            height={16}
                        />
                    </div>
                </div>
                {discount !== 0 &&
                    <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                        <p>
                            تخفیف محصولات
                        </p>
                        <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                            <span>({discount / totalFinalPrice * 100}%)</span>
                            {formatNumber(discount)}
                            <Image
                                src='/Image/gray-Tooman.svg'
                                alt='tooman'
                                width={23.5}
                                height={16}
                            />
                        </div>
                    </div>
                }
                <div className='text-black text-base font-bold flex justify-between items-center'>
                    <p>
                        مجموع سبد خرید
                    </p>
                    <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                        {formatNumber(totalSellPrice)}
                        <Image
                            src='/Image/Tooman.svg'
                            alt='tooman'
                            width={23.5}
                            height={16}
                        />
                    </div>
                </div>
            </div>
            <button className='solid-btn rectangle-btn w-full'>
                ثبت سفارش
            </button>
        </div>
    )
}

export default OrderBox