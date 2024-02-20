import React from 'react'
import { bestSellingProducts } from "public/data/bestSellingProducts"
import BestSellingCard from './BestSellingCard'
import Image from 'next/image'

const BestSellingProducts = () => {
    return (
        <div className='max-w-[1136px] w-[90%] mx-auto mt-20 flex flex-col gap-8 justify-between items-center'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='text-2xl text-base-300 font-bold'>پرفروش ترین محصولات</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
                {bestSellingProducts.map((product) => (
                    <BestSellingCard
                        name={product.name}
                        key={product.id}
                        num={product.num}
                        image={product.image}
                    />
                ))}
            </div>
            <button className='rectangle-btn solid-btn'>مشاهده همه</button>
        </div>
    )
}

export default BestSellingProducts