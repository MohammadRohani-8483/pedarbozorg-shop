"use client"
import { useState } from 'react'
import Image from '@/node_modules/next/image'
import { IoClose } from "@/node_modules/react-icons/io5/index";
import SearchValueProduct from './SearchValueProduct';
import { products } from 'public/data/products'
import { motion } from 'framer-motion';

type searchProps = {
    setOpenSearchBar: (value: boolean) => void
}
const SearchMobile: React.FC<searchProps> = ({ setOpenSearchBar }) => {
    const [isOpen, setIsOpen] = useState(true)

    const [inputValue, setInputValue] = useState('')
    const variants = {
        visible: {
            y: 0,
        },
        hidden: {
            y: "100vh",
        },
    };

    return (
        <motion.div
            animate={isOpen ? "visible" : "hidden"}
            initial={isOpen ? "hidden" : "visible"}
            variants={variants}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-white w-screen h-screen z-50'
        >
            <div className='border-gray-200 border-b text-gray-400 z-40 bg-white flex fixed top-0 px-6 py-3 justify-between items-center w-full'>
                <div className='flex items-center gap-1 text-xl text-gray-200'>
                    <IoClose
                        className="cursor-pointer text-gray-300"
                        onClick={() => {
                            setIsOpen(false)
                            setTimeout(() => {
                                setOpenSearchBar(false)
                                setInputValue("")
                                document.documentElement.classList.remove('overflow-hidden')
                            }, 300)
                        }}
                    />|
                </div>
                <input
                    value={inputValue}
                    type="text"
                    name="Search Bar"
                    placeholder="جستجو.."
                    className=' bg-transparent w-4/5
                focus:outline-none pr-1 cursor-pointer'
                    onChange={(e: any) => {
                        setInputValue(e.nativeEvent.target.value)
                    }}
                >
                </input>
                <Image
                    src="/iconSax/search-normal.svg"
                    width={24}
                    height={24}
                    alt="search icon"
                    className="cursor-pointer"
                />
            </div>
            <div className='w-[90%] mx-auto mt-14'>
                {products.slice(0, 4).map((product) => (
                    <SearchValueProduct link={product.link} image={product.image} key={product.id} name={product.name} />
                ))}
                {inputValue &&
                    <div className='w-full flex items-center justify-center mt-2'>
                        <button className='rectangle-btn outline-btn'>
                            جستجوی {inputValue} در تمامی محصولات
                        </button>
                    </div>
                }
            </div>
        </motion.div>
    )
}

export default SearchMobile