import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { number } from 'yup'

type props = {
    categoryState: number[]
    setCategory: (par: number[]) => void
    categories: {
        name: string
        value: number
    }[]
}

const Category = ({ categoryState, setCategory, categories }: props) => {
    const [boxIsOpen, setBoxIsOpen] = useState(false)

    const handleCheckboxChange = (value: number) => {
        const isSelected = categoryState.includes(value);
        const newSelectedValues = isSelected
            ? categoryState.filter((v: any) => v !== value)
            : [...categoryState, value];
        setCategory(newSelectedValues);
    };
    return (
        <motion.div
            animate={boxIsOpen ? { height: '225px' } : { height: "48px" }}
            transition={{ type: "tween" }}
            whileHover={!boxIsOpen ? { backgroundColor: '#F9F9F9' } : {}}
            className="overflow-hidden h-12 border-gray-200 border text-secondry-base rounded-xl bg-white flex flex-col px-4 py-3 justify-start items-start transition-all w-full gap-4"
        >
            <div
                className='w-full flex justify-between items-center text-secondry-base cursor-pointer'
                onClick={() => setBoxIsOpen(prev => !prev)}
            >
                <div className='flex justify-center items-center gap-1'>
                    <h1>
                        دسته بندی
                    </h1>
                    {categoryState.length > 0 && <div className='w-2 h-2 bg-primery-base rounded-full'></div>}
                </div>
                {boxIsOpen ?
                    <Image
                        src='/iconSax/arrow-down.svg'
                        width={24}
                        height={24}
                        alt='left arrow'
                    />
                    :
                    <Image
                        src='/iconSax/arrow-left.svg'
                        width={24}
                        height={24}
                        alt='left arrow'
                    />
                }
            </div>
            <div className='flex flex-col gap-2 justify-start items-start text-neutral-700 text-sm'>
                {categories.map((category) => (
                    <div key={category.value} className='flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            id={`my_option1${category.value}`}
                            style={{ accentColor: "#3D8361" }}
                            value={category.value}
                            onChange={(e: any) => handleCheckboxChange(category.value)}
                            checked={categoryState.includes(category.value)}
                            className='cursor-pointer'
                        />
                        <label htmlFor={`my_option1${category.value}`} className='cursor-pointer'>{category.name}</label>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Category