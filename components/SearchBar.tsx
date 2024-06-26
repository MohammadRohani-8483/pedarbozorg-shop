"use client"
import React, { useState, useEffect } from 'react'
import Image from '@/node_modules/next/image'
import { IoClose } from "@/node_modules/react-icons/io5/index";
import { motion } from 'framer-motion';
import SearchValueProduct from './SearchValueProduct';
import axios from 'axios';
import { useDebounce } from '@/public/hooks/useDebounce';
import { useRouter } from 'next/navigation';

export default function SearchBar({ handleOpenSearch, handleCloseSearch, openSearchBar, searchValue, setSearchValue, focus }: any) {
    const api = '/api/store-api/products-public/'
    const [products, setProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)

    const router = useRouter()

    const clickBtnSearch = () => {
        router.replace(`/products/?search=${searchValue}`)
        handleCloseSearch()
    }

    const debouncedSearch = useDebounce(searchValue)

    useEffect(() => {
        if (searchValue.length > 0)
            axios.get(`${api}${searchValue.length > 0 ? `?search=${debouncedSearch}` : ""}`)
                .then(res => {
                    setProducts(res.data.results)
                    setProductsCount(res.data.count)
                })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearch]);

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
            className={`${openSearchBar ? 'w-4/5' : 'w-40px]'} border-neutral-400 ${searchValue.length > 0 ? "rounded-t-lg bg-white" : "rounded-lg"} border text-gray-400 h-10 flex items-center justify-end p-2 z-50 relative`}
        >
            {openSearchBar &&
                <>
                    {focus && <div className='flex items-center gap-1 text-xl text-gray-200'>
                        <IoClose
                            onClick={handleCloseSearch}
                            className="cursor-pointer text-gray-300"
                        />|
                    </div>
                    }
                    <input
                        value={searchValue}
                        type="text"
                        name="Search Bar"
                        placeholder="جستجو.."
                        className='bg-transparent w-full outline-none focus:bg-transparent pr-2 cursor-pointer'
                        onChange={(e: any) => {
                            setSearchValue(e.target.value)
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
            {focus && searchValue.length > 0 &&
                <div className='absolute w-[calc(100%+2px)] h-[480px] bg-white -left-[1px] top-[38px] border-neutral-400 border rounded-b-lg flex flex-col justify-center items-center'
                >
                    {productsCount > 0 ?
                        <div className='w-full h-full'>
                            <div className='w-full h-[87.5%] overflow-auto ltr' id='scroll'>
                                {products.map((product: any) => (
                                    <SearchValueProduct link={`/products/${product.slug}`} image={product.featured_image} key={product.id} name={product.name} />
                                ))}
                            </div>
                            <div className='w-full flex items-center justify-center mt-2'>
                                <button
                                    onClick={clickBtnSearch}
                                    className='rectangle-btn outline-btn'
                                >
                                    جستجوی {searchValue} در تمامی محصولات
                                </button>
                            </div>
                        </div>
                        :
                        <h1 className='text-2xl text-center text-neutral-400'>
                            هیچ محصولی با این مشخصات وجود ندارد
                        </h1>
                    }
                </div>
            }
        </motion.div >
    )
}
