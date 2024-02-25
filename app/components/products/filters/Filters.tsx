import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AvailableProductsToggle from '../AvailableProductsToggle'
import Category from '../Category'
import PriceRange from '../PriceRange'

const Filters = ({ categories, isAvailable, setCategory, setIsAvailable, max, inputFrom, setInputFrom, inputTo, setInputTo }: any) => {
    return (
        <div className='hidden max-w-[272px] lg:flex flex-col gap-4 justify-start items-center'>
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
            <AvailableProductsToggle isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
            <Link
                href='/'
            >
                <Image
                    src='/Image/productPage/roghan-salad-banner-productPage.png'
                    alt='roghan salad banner'
                    width={272}
                    height={435}
                />
            </Link>
        </div>
    )
}

export default Filters