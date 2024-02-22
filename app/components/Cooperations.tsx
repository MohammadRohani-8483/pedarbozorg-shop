import React from 'react'
import { cooperations } from "public/data/cooperations"
import Image from '@/node_modules/next/image'

const Cooperations: React.FC = () => {
    return (
        <div className='max-w-[1136px] w-[90%] mx-auto flex flex-col mt-20 gap-8 justify-center items-center mb-40'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-lg md:text-xl lg:text-2xl text-base-300'>همکاری‌های داخلی و خارجی پدربزرگ</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className='flex justify-around items-center w-full'>
                {cooperations.map((cooperation) => (
                    <div key={cooperation.id} className="flex flex-col justify-center items-center gap-8">
                        <div className='relative h-16 md:h-24 lg:h-[120px] aspect-[170.2/120]'>
                            <Image
                                alt={cooperation.name}
                                src={cooperation.image}
                                fill
                                className='object-contain'
                            />
                        </div>
                        <h1 className='text-base-400 text-2xl font-bold'>{cooperation.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cooperations