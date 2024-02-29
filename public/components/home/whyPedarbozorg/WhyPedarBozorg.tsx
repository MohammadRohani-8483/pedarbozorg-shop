import React from 'react'
import { whyPedarBozorg } from "@/public/data/whyPedarBozorg"
import WhyPedarbozorgItem from './WhyPedarbozorgItem'
import Image from 'next/image'

export const WhyPedarBozorg: React.FC = () => {
    return (
        <div className='max-w-[1136px] w-[90%] lg:gap-8 gap-4 mx-auto flex flex-col text-center justify-center mt-20'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-base-300'>چرا پدربزرگ؟</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className='grid justify-items-center lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8'>
                {
                    whyPedarBozorg.map((item) => (
                        <WhyPedarbozorgItem
                            key={item.id}
                            icon={item.icon}
                            description={item.description}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}
