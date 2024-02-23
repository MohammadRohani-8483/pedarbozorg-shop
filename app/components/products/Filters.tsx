import Image from 'next/image'
import React from 'react'
import Category from './category/Category'

const Filters = ({  setCategory }: any) => {
    return (
        <div className='hidden max-w-[272px] lg:flex flex-col gap-4 justify-start items-center'>
            <div className='flex w-full justify-between items-center gap-8'>
                <div className='flex gap-2 justify-center items-center px-3 py-1.5 text-xl text-base-300 font-bold'>
                    <Image
                        src='/iconSax/filter.svg'
                        alt='filter'
                        width={24}
                        height={24}
                    />
                    <h2>فیلترها</h2>
                </div>
                <div className='px-3 py-1.5 text-[#C62020] text-sm whitespace-nowrap'>حذف فیلترها</div>
            </div>
            <Category setCategory={setCategory} />
        </div>
    )
}

export default Filters