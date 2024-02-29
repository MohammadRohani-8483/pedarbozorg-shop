'use client'
import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'
import ShopingCardItem from './ShopingCardItem'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const ShopingCard = ({ isVisible }: any) => {

    const cart = useSelector((state: any) => state.cart.cart)
    console.log(cart);

    const variants = {
        vsisble: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    }

    return (
        <motion.div
            className={`hidden  lg:flex  flex-col rtl w-[492px] h-[354px] justify-center items-center bg-white rounded-lg absolute top-12 -left-0.5 z-[100] p-4`}
            animate={true ? "vsisble" : 'hidden'}
            // initial={isVisible ? "hidden" : "vsisble"}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            variants={variants}
            transition={{ duration: 0.3 }}
        >
            {
                cart.length > 0 ?
                    <>
                        <div className='w-full h-[266px] overflow-auto overflow-x-hidden flex flex-col gap-2 ltr' id='scroll'>
                            {cart.map((cartItem: any, i: any, array: any) => {
                                return (
                                    <div
                                        className='gap-2 flex flex-col justify-center items-center'
                                        key={cartItem.id}
                                    >
                                        <ShopingCardItem
                                            price={cartItem.shatootInfo.finalPrice}
                                            priceWithOffer={cartItem.shatootInfo.finalPrice}
                                            image={cartItem.product.featuredImage}
                                            link={cartItem.product.slug}
                                            // weight={130}
                                            name={cartItem.product.name}
                                            count={cartItem.quantity}
                                        />
                                        {i < array.length - 1 && <div className='w-[432px] h-[1px] bg-[#E3E3E3]'></div>}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='w-full h-[56px] flex justify-between items-center pt-6'>
                            <div className='flex justify-center items-center gap-1 text-[#626262] text-[10px]'>
                                مجموع قیمت
                                <span className='text-base font-bold'>
                                    {4}
                                </span>
                                کالا:
                                <span className='text-xl text-[#353535] font-bold'>
                                    {formatNumber(255000)}
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