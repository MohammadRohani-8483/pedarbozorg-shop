'use client'
import SignUpSignIn from '@/components/signUp_signIn/SignUpSignIn'
import formatNumber from '@/public/Functions/formatNumber'
import { useAppSelector } from '@/public/redux/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

type props = {
    sellPrice: number
    finalPrice: number
    shipmentPrice?: number
    discountCode?: number | null
    discountCodePrecent?: number | null
    discountProducts: number
    discountProductsPercent: number
    yourProfit: number
    yourProfitPercent: number
    page: 'CART' | "SHIPPING" | "PAY"
    countProduct: number
    paymentFunc?: any
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
    countProduct,
    paymentFunc
}: props) => {
    const [isLoginBoxOpen, setIsLoginBoxOpen] = useState(false)
    const { isLogedIn } = useAppSelector(state => state.auth)
    const link = page === 'CART' && isLogedIn ?
        "/checkout-cart/shipping" :
        page === 'SHIPPING' && shipmentPrice !== undefined ?
            "/checkout-cart/pay"
            :
            ""

    const handlePayment = () => {
        if (page === 'PAY') {
            paymentFunc()
        } else if (page === 'CART') {
            setIsLoginBoxOpen(true)
        }
    }

    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full md:w-2/3 gap-4 md:gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <div className='text-neutral-700 text-base font-bold flex justify-between items-center'>
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
                    <div className='text-neutral-700 text-base font-bold flex justify-between items-center'>
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
                    <div className='text-neutral-700 text-base font-bold flex justify-between items-center'>
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
                    <div className='text-error-base text-base font-bold flex justify-between items-center'>
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
                {shipmentPrice !== undefined &&
                    (shipmentPrice !== 0 ?
                        <div className='text-neutral-700 text-base font-bold flex justify-between items-center'>
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
                        <div className='text-neutral-700 text-base font-bold flex justify-between items-center'>
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
            {(page === 'SHIPPING' && shipmentPrice !== undefined) || (page === 'CART' && isLogedIn) ?
                <Link href={link} className='w-full'>
                    <button
                        className={`solid-btn rectangle-btn ${page === 'SHIPPING' && shipmentPrice === undefined ? "disable-btn" : ""} w-full`}
                    >
                        ثبت سفارش
                    </button>
                </Link>
                :
                <>
                    <div className='w-full'>
                        <button
                            onClick={handlePayment}
                            className={`solid-btn rectangle-btn ${page === 'SHIPPING' && shipmentPrice === undefined ? "disable-btn" : ""} w-full`}
                        >
                            ثبت سفارش
                        </button>
                    </div>
                    {isLoginBoxOpen && <SignUpSignIn setIsFormOpen={setIsLoginBoxOpen} />}
                </>
            }
        </div>
    )
}

export default SubmitOrderBox