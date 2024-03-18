'use client'
import CheckoutCartItem from '@/components/checkout-cart/CheckoutCartItem'
import CheckoutItems from '@/components/checkout-cart/CheckoutItems'
import EmptyCheckoutCart from '@/components/checkout-cart/EmptyCheckoutCart'
import Title from '@/components/Title'
import { shopCartItem } from '@/public/types/productType'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../loading'

const CheckoutCart = () => {
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)

    const cart: shopCartItem[] = useSelector((state: any) => state.cart.cart)

    useEffect(() => {
        setTotalFinalPrice(cart.reduce((previous: any, current: any) => previous + current?.shatootInfo.finalPrice * current?.quantity, 0))
    }, [cart])

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    return (
        <>
            {start ?
                <>
                    <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 md:gap-20 py-20 md:py-[117px]'>
                        <Title>سبد خرید</Title>
                        {cart?.length > 0
                            ?
                            <div className='flex flex-col w-full justify-center items-center gap-2 lg:gap-6'>
                                <CheckoutItems />
                            </div>
                            :
                            <EmptyCheckoutCart />
                        }
                    </main>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default CheckoutCart