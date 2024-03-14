import React from 'react'
import { whyPedarBozorg } from "@/public/data/whyPedarBozorg"
import WhyPedarbozorgItem from './WhyPedarbozorgItem'
import Title from '@/components/Title'

export const WhyPedarBozorg: React.FC = () => {
    return (
        <div className='max-w-[1136px] w-[90%] lg:gap-8 gap-4 mx-auto flex flex-col text-center justify-center mt-20'>
            <Title>چرا پدربزرگ؟</Title>
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
