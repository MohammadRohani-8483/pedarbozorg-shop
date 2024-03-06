'use client'
import React, { useEffect, useState } from 'react'
import { bestSellingProducts } from "public/data/bestSellingProducts"
import BestSellingCard from './BestSellingCard'
import Image from 'next/image'
import axios from 'axios'

const BestSellingProducts = () => {
    const [products, setProducts] = useState([])
    const url = "/api/core-api/site/landing/"
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setProducts(res.data.best_seller_products)
            })
    }, [])

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-full'>
                {products.map((product: any, i: number) => (
                    <BestSellingCard
                        name={product.name}
                        key={product.id}
                        num={i + 1}
                        image={product.featured_image}
                        link={`products/${product.slug}`}
                    />
                ))}
            </div>
            <button className='rectangle-btn solid-btn'>مشاهده همه</button>
        </div>
    )
}

export default BestSellingProducts