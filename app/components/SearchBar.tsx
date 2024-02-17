"use client"
import React, { useState, useEffect } from 'react'
import Image from '@/node_modules/next/image'
import { IoClose } from "@/node_modules/react-icons/io5/index";
import { motion } from 'framer-motion';

export default function SearchBar({ handleOpenSearch, handleCloseSearch, openSearchBar, searchValue, setSearchValue, setFocus }: any) {
    const [inputValue, setInputValue] = useState(searchValue)
    useEffect(() => {
        setInputValue(searchValue)

    }, [searchValue])

    // const [focus, setFocus] = useState(false)

    const variants = {
        openSearch: {
            width: "80%",
            x: "15%"
        },
        closeSearch: {
            width: "40px",
            x: 0
        }
    }

    return (
        <motion.div
            animate={openSearchBar ? "openSearch" : "closeSearch"}
            variants={variants}
            transition={{ duration: 0.3 }}

            className={`${openSearchBar ? 'w-4/5' : 'w-40px]'} border-gray-400 rounded-lg border text-gray-400 h-10 flex items-center p-2 z-50`}
        >
            {openSearchBar &&
                <>
                    <div className='flex items-center gap-1 text-xl text-gray-200'>
                        <IoClose
                            onClick={handleCloseSearch}
                            className="cursor-pointer text-gray-300"
                        />|
                    </div>
                    <input
                        value={inputValue}
                        type="text"
                        name="Search Bar"
                        placeholder="جستجو.."
                        className=' bg-transparent w-full
                focus:outline-none pr-2 cursor-pointer'
                        onFocus={() => setFocus(true)}
                        onChange={(e: any) => {
                            setInputValue(e.nativeEvent.target.value)
                            setSearchValue(e.nativeEvent.target.value)
                        }}
                    >
                    </input>
                </>
            }
            <Image
                src="/iconSax/search-normal.svg"
                width={24}
                height={24}
                alt="search icon"
                onClick={handleOpenSearch}
                className="cursor-pointer"
            />
        </motion.div>
    )
}
