import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AvailableProductsToggle from 'components/products/AvailableProductsToggle'
import Category from 'components/products/Category'
import PriceRange from 'components/products/PriceRange'
import { categories as categoriesArray } from 'public/data/pageProducts'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Filters = ({ categories, isAvailable, setIsAvailable, max, inputFrom, setInputFrom, inputTo, setInputTo }: any) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())
    const { replace } = useRouter()
    const pathname = usePathname()
    return (
        <div className='hidden max-w-[272px] lg:flex flex-col gap-4 justify-start items-center'>
            <div className='flex w-full justify-between items-center gap-8'>
                <div className='flex gap-2 justify-center items-center px-3 py-1.5 text-xl text-secondry-base font-bold'>
                    <Image
                        src='/iconSax/filter.svg'
                        alt='filter'
                        width={24}
                        height={24}
                    />
                    <h2>فیلترها</h2>
                </div>
                {(categories.length > 0 || isAvailable || inputFrom > 0 || inputTo < max) &&
                    <div
                        className='px-3 py-1.5 text-error-base text-sm whitespace-nowrap cursor-pointer'
                        onClick={() => {
                            params.delete('categories')
                            replace(`${pathname}?${params.toString()}`)
                            setIsAvailable(false)
                            setInputFrom(0)
                            setInputTo(max)
                        }}
                    >
                        حذف فیلترها
                    </div>
                }
            </div>
            <Category
                categories={categoriesArray}
                categoryState={categories}
            />
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