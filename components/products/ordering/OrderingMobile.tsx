import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { orders } from '@/public/data/pageProducts';

const OrderingMobile = ({ setIsOrderingOpen, activeOrder, setActiveOrder }: any) => {
    const [isVisible, setIsVisible] = useState(true)

    const variants = {
        visible: {
            y: 0,
        },
        hidden: {
            y: "100vw",
        },
        bgHidden: {
            opacity: 0
        },
        bgVisible: {
            opacity: 1
        },
    };

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            setIsOrderingOpen(false)
            document.documentElement.classList.remove('overflow-hidden')
        }, 300)
    }

    return (
        <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50'
            animate={isVisible ? "bgVisible" : "bgHidden"}
            initial={isVisible ? "bgHidden" : "bgVisible"}
            variants={variants}
            onClick={(e: any) => e.target.className === "fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50" && handleClose()}
        >
            <motion.div
                animate={isVisible ? "visible" : "hidden"}
                initial={isVisible ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.3 }}
                className='fixed bottom-0 left-0 right-0 bg-white w-screen h-auto z-50 flex flex-col overflow-auto gap-4 items-start justify-start p-4 pb-8'
            >
                <IoClose
                    className="cursor-pointer text-gray-400 text-2xl"
                    onClick={handleClose}
                />
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className='w-full flex justify-start items-start gap-2'>
                        <Image
                            src='/iconSax/sort.svg'
                            alt='sort'
                            width={24}
                            height={24}
                        />
                        <h2 className='text-xl text-secondry-base font-bold whitespace-nowrap'>مرتب سازی</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        {orders.map((order: any) => {
                            return (
                                activeOrder === order.value ?
                                    <div className='bg-secondry-base text-sm text-white px-3 py-1.5 rounded-md cursor-pointer whitespace-nowrap' defaultValue={order.value} key={order.id}>
                                        {order.name}
                                    </div>
                                    :
                                    <div
                                        className='text-secondry-base text-sm px-3 py-1.5 cursor-pointer whitespace-nowrap'
                                        key={order.id}
                                        onClick={() => {
                                            setActiveOrder(order.value)
                                        }}
                                    >
                                        {order.name}
                                    </div>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default OrderingMobile