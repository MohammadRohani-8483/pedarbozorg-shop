'use client'
import React, { useEffect, useState } from 'react'
import Benefits from './Benefits'

const LongInfo = ({ product, itemsInfo }: any) => {
    const [itemInfo, setItemInfo] = useState('معرفی')

    useEffect(() => {
        if (!window) return;
        let newItems: any = []
        itemsInfo.forEach((item: any, i: number, array: Array<any>) => {
            const rect = item.ref.current.getBoundingClientRect();
            let scrollFrom = rect.top;
            let scrollThere;
            i === 0 ? scrollThere = 0 : scrollThere = scrollFrom
            let scrollTo;
            i === array.length - 1 ? scrollTo = 120000 : scrollTo = rect.top + 100 + rect.height;
            newItems.push({
                name: item.name,
                scrollFrom,
                scrollThere,
                scrollTo,
            });
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-full flex flex-col gap-7'>
            <div className='w-full sticky top-12 lg:top-20 bg-background pt-8 lg:pt-12'>
                <div className='w-full max-w-[490px] flex justify-between items-center'>
                    {itemsInfo.map((item: any) => (
                        <div key={item.id}
                            className={`w-full text-center p-2 border-b-2 ${item.name === itemInfo ? "border-secondry-base text-secondry-base" : "border-[#E3E3E3] text-neutral-500"} font-bold text-base cursor-pointer`}
                            onClick={() => {
                                setItemInfo(item.name)
                                item.ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[90%] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div ref={itemsInfo[0].ref} className='w-full flex flex-col justify-center items-start gap-2 border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-secondry-base'>
                        معرفی
                    </h3>
                    <p className='text-lg text-gray-600 text-justify'>
                        {product.introduction}
                    </p>
                </div>
                <div ref={itemsInfo[1].ref} className='flex flex-col gap-2 justify-center items-start w-full border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-secondry-base'>
                        مشخصات
                    </h3>
                    <div className='flex flex-col gap-4 '>
                        {product.specifications?.map((specification: any) => (
                            <div key={specification.id} className='flex justify-start items-center gap-4'>
                                <p className='text-neutral-500 text-sm'>
                                    {specification.key}{!specification.key.includes(":") ? " :" : ''}
                                </p>
                                <h3 className='text-base text-neutral-700 font-bold'>
                                    {specification.value}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <Benefits itemsInfo={itemsInfo} product={product} />
            </div>
        </div>
    )
}

export default LongInfo