import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { categories } from '@/public/data/pageProducts'

const Category = ({  setCategory }: any) => {
    const [boxIsOpen, setBoxIsOpen] = useState(false)
    const [selectedValues, setSelectedValues] = useState<number[]>([]);

    useEffect(() => {
        setCategory(selectedValues);
    }, [selectedValues]);

    const handleCheckboxChange = (value: number) => {
        const isSelected = selectedValues.includes(value);
        const newSelectedValues = isSelected
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
        setSelectedValues(newSelectedValues);
    };
    return (
        <motion.div
            animate={boxIsOpen ? { height: '225px' } : { height: "48px" }}
            transition={{ type: "tween" }}
            whileHover={!boxIsOpen ? { backgroundColor: '#F9F9F9' } : {}}
            className="overflow-hidden h-12 border-gray-200 border text-base-300 rounded-2xl bg-white cursor-pointer flex flex-col pr-4 py-3 pl-3 justify-start items-start transition-all w-full gap-4"
            style={{ height: "auto" }}
        >
            <div
                className='w-full flex justify-between items-center text-base-300'
                onClick={() => setBoxIsOpen(prev => !prev)}
            >
                <h1>دسته بندی</h1>
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
            <div className='flex flex-col gap-2 justify-start items-start text-[#626262] text-sm'>
                {categories.map((category: any) => (
                    <div key={category.value} className='flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            id={`my_option1${category.value}`}
                            style={{ accentColor: "#3D8361" }}
                            value={category.value}
                            onClick={(e: any) => {
                                // category.value===e.target.value&&
                                // setCategory(category.flag = e.target.checked)
                                // console.log(e.target.value)
                                handleCheckboxChange(category.value)
                            }}
                        />
                        <label htmlFor={`my_option1${category.value}`} className=''>{category.name}</label>
                    </div>
                ))}
            </div>
            {/* <div>
                    <h2>ادویه جات</h2>
                </div>
                <div>
                    <h2>دمنوش ها</h2>
                </div>
                <div>
                    <h2>روغن ها</h2>
                </div>
                <div>
                    <h2>قهوه ها</h2>
                </div>
                <div>
                    <h2>عرقیجات</h2>
                </div>
                <div>
                    <h2>محصولات ویژه</h2>
                </div> */}
        </motion.div>
    )
}

export default Category