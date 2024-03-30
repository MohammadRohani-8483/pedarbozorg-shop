'use client'
import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ShopingCardItem from './ShopingCardItem'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { cart } from '@/public/types/productType'

const ShopingCard = ({ isVisible }: any) => {
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

    useEffect(() => {
        setTotalFinalPrice(cart.reduce((previous, current) => previous + current.variant.shatoot_info.final_price * current.quantity!, 0))
    }, [cart])

    return (
        <motion.div
            className={`${(isVisible || false) ? "pointer-events-auto" : "pointer-events-none"} flex flex-col rtl w-[492px] h-[354px] justify-center items-center bg-white rounded-lg absolute top-12 -left-0.5 z-[100] p-4 opacity-0`}
            animate={(isVisible || false) ? { opacity: 1, display: "flex" } : { opacity: 0, display: "flex" }}
            transition={{ duration: 0.3 }}
        >
            {cart &&
                cart.length > 0 ?
                <>
                    <div className='w-full h-[266px] overflow-auto overflow-x-hidden flex flex-col gap-2 ltr' id='scroll'>
                        {cart.map((cartItem, i, array) => {
                            return (
                                <div
                                    className='gap-2 flex flex-col justify-center items-center'
                                    key={cartItem.variant.id}
                                >
                                    <ShopingCardItem
                                        price={cartItem?.variant?.shatoot_info.sell_price!}
                                        priceWithOffer={cartItem?.variant?.shatoot_info.sell_price}
                                        image={cartItem?.variant?.image||cartItem.variant.product.featured_image}
                                        link={cartItem?.variant?.product.slug}
                                        name={cartItem?.variant?.name}
                                        count={cartItem?.quantity!}
                                        product={cartItem!}
                                    />
                                    {i < array.length - 1 && <div className='w-[432px] h-[1px] bg-[#E3E3E3]' />}
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-full h-[56px] flex justify-between items-center pt-6'>
                        <div className='flex justify-center items-center gap-1 text-[#626262] text-[10px]'>
                            مجموع قیمت
                            <span className='text-base font-bold'>
                                {cart.length}
                            </span>
                            کالا:
                            <span className='text-xl text-[#353535] font-bold'>
                                {formatNumber(+totalFinalPrice)}
                            </span>
                            <Image
                                src='/Image/gray-Tooman.svg'
                                alt='tooman'
                                width={22.8}
                                height={15.1}
                            />
                        </div>
                        <div
                            className='rectangle-btn solid-btn'
                        >
                            ثبت سفارش
                        </div>
                    </div>
                </>
                :
                <h1 className='text-xl text-gray-600'>سبد خرید شما خالی میباشد</h1>
            }
        </motion.div>
    )
}

export default ShopingCard