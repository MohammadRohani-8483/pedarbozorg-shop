'use client'
import React, { useEffect, useState } from 'react'
import Benefits from './Benefits'

const LongInfo = ({ product }: any) => {
    const [itemInfo, setItemInfo] = useState('معرفی')
    const itemsInfo = [
        {
            name: "معرفی",
            scrollFrom: 0,
            scrollTo: 520,
            endScroll: 520
        },
        {
            name: "مشخصات",
            scrollFrom: 521,
            scrollTo: 760,
            endScroll: 760
        },
        {
            name: "فواید",
            scrollFrom: 761,
            scrollTo: 890,
            endScroll: 890
        },
        {
            name: "نظرات کاربران",
            scrollFrom: 891,
            scrollTo: 1120,
            endScroll: 11000020
        }
    ]

    const isBrowser = () => typeof window !== 'undefined';

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        for (let item of itemsInfo) {
            if (scrollY >= item.scrollFrom && scrollY <= item.endScroll) {
                setItemInfo(item.name);
                break;
            }
        }
    }, [scrollY]);

    return (
        <div className='w-full flex flex-col gap-7'>
            <div className='w-full max-w-[490px] flex justify-between items-center'>
                {itemsInfo.map((item) => (
                    <div key={item.name}
                        className={`w-full text-center p-2 border-b-2 ${item.name === itemInfo ? "border-base-300 text-base-300" : "border-[#E3E3E3] text-[#ADADAD]"} font-bold text-base cursor-pointer`}
                        onClick={() => {
                            setItemInfo(item.name)
                            if (!isBrowser()) return;
                            window.scrollTo({ top: item.scrollTo, behavior: 'smooth' });
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='w-[90%] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-start gap-2 border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-base-300'>
                        معرفی
                    </h3>
                    <p className='text-lg text-black text-justify'>
                        {product.introduction}
                    </p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start w-full border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-base-300'>
                        مشخصات
                    </h3>
                    <div className='flex flex-col gap-4 '>
                        {product.specifications?.map((specification: any) => (
                            <div key={specification.id} className='flex justify-center items-center gap-4'>
                                <p className='text-[#ADADAD] text-sm'>
                                    {specification.key}
                                </p>
                                <h3 className='text-base text-[#626262] font-bold'>
                                    {specification.value}
                                </h3>
                            </div>
                        ))}
                        <div className='flex justify-center items-center gap-4'>
                            <p className='text-[#ADADAD] text-sm'>
                                حالت فیزیکی:
                            </p>
                            <h3 className='text-base text-[#626262] font-bold'>
                                جامد
                            </h3>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <p className='text-[#ADADAD] text-sm'>
                                حالت فیزیکی:
                            </p>
                            <h3 className='text-base text-[#626262] font-bold'>
                                جامد
                            </h3>
                        </div>
                    </div>
                </div>
                <Benefits product={product} />
            </div>
        </div>
    )
}

export default LongInfo