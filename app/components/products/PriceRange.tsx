import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DoubleRangeSlider from '../DoubleRangeSlider/DoubleRangeSlider'
import formatNumber from 'public/Functions/formatNumber'

const PriceRange = ({ max, inputFrom, setInputFrom, inputTo, setInputTo }: any) => {
    const [boxIsOpen, setBoxIsOpen] = useState(false)
    return (
        <motion.div
            animate={boxIsOpen ? { height: '160px' } : { height: "48px" }}
            transition={{ type: "tween" }}
            whileHover={!boxIsOpen ? { backgroundColor: '#F9F9F9' } : {}}
            className="overflow-hidden h-12 border-gray-200 border text-base-300 rounded-2xl bg-white cursor-pointer flex flex-col px-4 py-3 justify-start items-start transition-all w-full gap-4"
            style={{ height: "auto" }}
        >
            <div
                className='w-full flex justify-between items-center text-base-300'
                onClick={() => setBoxIsOpen(prev => !prev)}
            >
                <div className='flex justify-center items-center gap-1'>
                    <h1>
                        قیمت
                    </h1>
                    {(inputFrom > 0 || inputTo < max) && <div className='w-2 h-2 bg-[#FFC436] rounded-full'></div>}
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
            <div className='w-full gap-6 flex flex-col'>
                <div className='w-full gap-2 flex justify-center items-center'>
                    <div className='flex justify-between items-center px-2 border border-[#CBCBCB] rounded-lg h-8 relative'>
                        <span className='absolute text-xs text-black font-bold -top-2 right-4 w-5 bg-white flex justify-center'>
                            از
                        </span>
                        <input type="text" name="From" className='outline-none text-sm text-black w-full' defaultValue={formatNumber(inputFrom)} readOnly />
                        <Image
                            src='/Image/gray-Tooman.svg'
                            alt="تومان"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='flex justify-between items-center px-2 border border-[#CBCBCB] rounded-lg h-8 relative'>
                        <span className='absolute text-xs text-black font-bold -top-2 right-4 w-5 bg-white flex justify-center'>
                            تا
                        </span>
                        <input type="text" name="To" className='outline-none text-sm text-black w-full' defaultValue={formatNumber(inputTo)} readOnly />
                        <Image
                            src='/Image/gray-Tooman.svg'
                            alt="تومان"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className='w-full gap-4 flex flex-col justify-center items-center'>
                    <DoubleRangeSlider
                        max={max}
                        inputFrom={inputFrom}
                        setInputFrom={setInputFrom}
                        inputTo={inputTo}
                        setInputTo={setInputTo}
                    />
                    <div className='w-full flex justify-between items-center text-xs text-[#757575]'>
                        <div>ارزانترین</div>
                        <div>گرانترین</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PriceRange