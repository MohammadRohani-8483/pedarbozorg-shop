import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'
import ShopingCardItem from './ShopingCardItem'
import { motion } from 'framer-motion';

const ShopingCard = ({ isVisible }: any) => {
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
                true ?
                    <>
                        <div className='w-full h-[266px] overflow-auto overflow-x-hidden flex flex-col gap-2 ltr' id='shoping-card'>
                            {Array.from({ length: 4 }, (_, i) => {
                                return (
                                    <div
                                        className='gap-2 flex flex-col justify-center items-center'
                                        key={i}
                                    >
                                        <ShopingCardItem
                                            price={200000}
                                            offerPresent={20}
                                            image='/Image/offer-products/ard-nokhodchi.png'
                                            link='/'
                                            weight={130}
                                            name='آرد نخودچی'
                                            count={2}
                                        />
                                        {i < 3 && <div className='w-[432px] h-[1px] bg-[#E3E3E3]'></div>}
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