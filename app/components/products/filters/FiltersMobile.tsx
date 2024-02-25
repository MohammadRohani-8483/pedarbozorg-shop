import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import AvailableProductsToggle from '../AvailableProductsToggle';
import Category from '../Category';
import PriceRange from '../PriceRange';

const FiltersMobile = ({ setIsFiltersOpen, categories, isAvailable, setCategory, setIsAvailable, max, inputFrom, setInputFrom, inputTo, setInputTo }: any) => {
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
            setIsFiltersOpen(false)
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
                className='fixed bottom-0 left-0 right-0 bg-white w-screen h-[580px] z-50 flex flex-col overflow-auto gap-4 items-start justify-start p-4'
            >
                <IoClose
                    className="cursor-pointer text-gray-400 text-2xl"
                    onClick={handleClose}
                />
                <div className='flex w-full justify-between items-center gap-8'>
                    <div className='flex gap-2 justify-center items-center px-3 py-1.5 text-xl text-base-300 font-bold'>
                        <Image
                            src='/iconSax/filter.svg'
                            alt='filter'
                            width={24}
                            height={24}
                        />
                        <h2>فیلترها</h2>
                    </div>
                    <div
                        className='px-3 py-1.5 text-[#C62020] text-sm whitespace-nowrap cursor-pointer'
                        onClick={() => {
                            setCategory([])
                            setIsAvailable(false)
                            setInputFrom(0)
                            setInputTo(max)
                        }}
                    >
                        حذف فیلترها
                    </div>
                </div>
                <Category categoryState={categories} setCategory={setCategory} />
                <PriceRange
                    max={max}
                    inputFrom={inputFrom}
                    setInputFrom={setInputFrom}
                    inputTo={inputTo}
                    setInputTo={setInputTo}
                />
                <AvailableProductsToggle
                    isAvailable={isAvailable}
                    setIsAvailable={setIsAvailable} />
            </motion.div>
        </motion.div>
    )
}

export default FiltersMobile