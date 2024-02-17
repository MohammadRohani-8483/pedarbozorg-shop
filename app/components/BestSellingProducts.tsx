import React from 'react'
import { bestSellingProducts } from "public/data/bestSellingProducts"
import BestSellingCard from './BestSellingCard'

const BestSellingProducts = () => {
    return (
        <div className='max-w-[1136px] w-[90%] mx-auto mt-20 flex flex-col gap-8 justify-between items-center'>
            <div>
                <h1 className='text-2xl text-base-300 font-bold'>پرفروش ترین محصولات</h1>
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