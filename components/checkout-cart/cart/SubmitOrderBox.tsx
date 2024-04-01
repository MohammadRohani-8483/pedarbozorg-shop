'use client'
import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type props = {
    sellPrice: number
    finalPrice: number
    shipmentPrice?: number | null
    discountCode?: number | null
    discountCodePrecent?: number | null
    discountProducts: number
    discountProductsPercent: number
    yourProfit: number
    yourProfitPercent: number
    page: 'CART' | "SHIPPING" | "PAY"
    countProduct: number
}

const SubmitOrderBox = ({
    sellPrice,
    finalPrice,
    shipmentPrice,
    discountCode,
    discountCodePrecent,
    discountProducts,
    discountProductsPercent,
    yourProfit,
    yourProfitPercent,
    page,
    countProduct
}: props) => {
    const link = page === 'CART' ?
        "/checkout-cart/shipping" :
        page === 'SHIPPING' && shipmentPrice ?
            "/checkout-cart/pay"
            :
            ""

    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full md:w-2/3 gap-4 md:gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                    <p>
                        قیمت کالا ها ({countProduct})
                    </p>
                    <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                        {formatNumber(sellPrice)}
                        <Image
                            src='/Image/gray-Tooman.svg'
                            alt='tooman'
                            width={23.5}
                            height={16}
                        />
                    </div>
                </div>
                {discountProducts !== 0 &&
                    <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                        <p>
                            تخفیف محصولات
                        </p>
                        <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                            <span>({discountProductsPercent}%)</span>
                            {formatNumber(discountProducts)}
                            <Image
                                src='/Image/gray-Tooman.svg'
                                alt='tooman'
                                width={23.5}
                                height={16}
                            />
                        </div>
                    </div>
                }
                {discountCode &&
                    <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                        <p>
                            کد
                        </p>
                        <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                            <span>({discountCodePrecent}%)</span>
                            {formatNumber(discountCode)}
                            <Image
                                src='/Image/gray-Tooman.svg'
                                alt='tooman'
                                width={23.5}
                                height={16}
                            />
                        </div>
                    </div>
                }
                {yourProfit !== 0 &&
                    <div className='text-[#C62020] text-base font-bold flex justify-between items-center'>
                        <p>
                            تخفیف محصولات
                        </p>
                        <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                            <span>({yourProfitPercent}%)</span>
                            {formatNumber(yourProfit)}
                            <Image
                                src='/Image/red-Tooman.svg'
                                alt='tooman'
                                width={23.5}
                                height={16}
                            />
                        </div>
                    </div>
                }
                {shipmentPrice &&
                    (shipmentPrice !== 0 ?
                        <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                            <p>
                                هزینه ارسال
                            </p>
                            <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                                {formatNumber(shipmentPrice)}
                                <Image
                                    src='/Image/gray-Tooman.svg'
                                    alt='tooman'
                                    width={23.5}
                                    height={16}
                                />
                            </div>
                        </div>
                        :
                        <div className='text-[#626262] text-base font-bold flex justify-between items-center'>
                            <p>
                                هزینه ارسال
                            </p>
                            <div className='flex text-base md:text-xl justify-center items-center'>
                                رایگان
                            </div>
                        </div>
                    )
                }
                <div className={`text-black text-base font-bold flex justify-between items-center ${page !== "CART" ? "mt-4" : ""}`}>
                    <p>
                        {page !== "CART" ? "قابل پرداخت" : "مجموع سبد خرید"}
                    </p>
                    <div className='flex text-base md:text-xl justify-center items-center gap-2'>
                        {formatNumber(finalPrice)}
                        <Image
                            src='/Image/Tooman.svg'
                            alt='tooman'
                            width={23.5}
                            height={16}
                        />
                    </div>
                </div>
            </div>
            <Link href={link} className='w-full'>
                <button className={`solid-btn rectangle-btn ${page === 'SHIPPING' && !shipmentPrice ? "disable-btn" : ""} w-full`}>
                    ثبت سفارش
                </button>
            </Link>
        </div>
    )
}

export default SubmitOrderBox