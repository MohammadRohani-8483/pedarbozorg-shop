'use client'
import CheckoutItems from '@/components/checkout-cart/cart/CheckoutItems'
import EmptyCheckoutCart from '@/components/checkout-cart/cart/EmptyCheckoutCart'
import SubmitOrderBox from '@/components/checkout-cart/cart/SubmitOrderBox'
import Title from '@/components/Title'
import { cart } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from './loading'

const CheckoutCart = () => {
    const { cartItems, successRedux } = useSelector((state: { cart: cart }) => state.cart)

    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalSellPrice, setTotalSellPrice] = useState(0)

    useEffect(() => {
        setTotalFinalPrice(cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.final_price * current?.quantity!, 0))
        setTotalSellPrice(cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.sell_price * current?.quantity!, 0))
    }, [cartItems])

    useEffect(() => {
        document.title = 'پدربزرگ - سبد خرید'
    }, [])

    return (
        <>
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={219}
                height={218}
                className='top-2 left-0 absolute hidden md:block z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-1.svg"
                alt="tree 1"
                width={152}
                height={192}
                className='top-12 right-0 absolute hidden md:block z-[-1]'
            />
            {successRedux ?
                <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 md:gap-20 py-20 md:py-[117px]'>
                    <Title>سبد خرید</Title>
                    {cartItems.length > 0 ?
                        <div className='flex flex-col md:flex-row w-full justify-center items-start gap-2 lg:gap-6'>
                            <CheckoutItems />
                            <SubmitOrderBox
                                page='CART'
                                countProduct={cartItems?.length}
                                finalPrice={totalFinalPrice}
                                sellPrice={totalSellPrice}
                                discountProducts={totalSellPrice - totalFinalPrice}
                                discountProductsPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                                yourProfit={totalSellPrice - totalFinalPrice}
                                yourProfitPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                            />
                        </div>
                        :
                        <EmptyCheckoutCart />
                    }
                </main>
                :
                <Loading />
            }
        </>
    )
}

export default CheckoutCart