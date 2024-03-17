'use client'
import React, { createRef } from 'react'
import AvgRateBox from './AvgRateBox'
import CommentSection from './CommentSection'
import LongInfo from './LongInfo'

const InfosAndComments = ({product}:any) => {
    const itemsInfo = [
        {
            id: 1,
            name: "معرفی",
            ref: createRef<any>()
        },
        {
            id: 2,
            name: "مشخصات",
            ref: createRef<any>()
        },
        {
            id: 3,
            name: "فواید",
            ref: createRef<any>()
        },
        {
            id: 4,
            name: "نظرات کاربران",
            ref: createRef<any>()
        }
    ]

    return (
        <>
            <LongInfo product={product} itemsInfo={itemsInfo} />
            <div className='w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:items-start ltr'>
                <AvgRateBox product={product} />
                <CommentSection commentsID={product.id} itemsInfo={itemsInfo} />
            </div>
        </>
    )
}

export default InfosAndComments