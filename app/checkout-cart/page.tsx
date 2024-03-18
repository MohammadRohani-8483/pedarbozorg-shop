'use client'
import CheckoutItems from '@/components/checkout-cart/CheckoutItems'
import EmptyCheckoutCart from '@/components/checkout-cart/EmptyCheckoutCart'
import OrderBox from '@/components/checkout-cart/OrderBox'
import Title from '@/components/Title'
import { shopCartItem } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from '../loading'

const CheckoutCart = () => {
    const cart: shopCartItem[] = useSelector((state: any) => state.cart.cart)

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    const TITLE = 'پدربزرگ - سبد خرید'

    useEffect(() => {
        document.title = TITLE
    }, [TITLE])

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
            {start ?
                <>
                    <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 md:gap-20 py-20 md:py-[117px]'>
                        <Title>سبد خرید</Title>
                        {cart?.length > 0
                            ?
                            <div className='flex flex-col md:flex-row w-full justify-center items-start gap-2 lg:gap-6'>
                                <CheckoutItems />
                                <OrderBox />
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