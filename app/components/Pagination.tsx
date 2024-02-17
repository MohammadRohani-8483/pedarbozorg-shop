'use client'
import React, { useState } from 'react'
import { products } from '@/public/data/products'
import { usePaginate } from '@/public/hooks/usePaginate'
const Pagination = () => {
    const [numProductPage, setNumProductPage] = useState(10)

    const {
        page,
        nextPage,
        prevPage,
        clickInPaginate,
    } = usePaginate(products, numProductPage)

    return (
        <>
            {
                products.slice((page - 1) * numProductPage + 1, numProductPage).map(() => {
                    return (<></>)
                })
            }
        </>
    )
}

export default Pagination