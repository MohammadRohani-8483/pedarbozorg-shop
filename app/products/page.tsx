'use client'
import React, { useState } from 'react'
import SearchBarProducts from '../components/products/SearchBarProducts'
import { products } from '@/public/data/products'
import PaginationButtons from '../components/PaginationButtons'


const Products = () => {
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  return (
    <main className='w-[90%] max-w-[1136px] mx-auto pt-16 md:pt-20'>
      <div className='grid grid-rows-2 gap-4 w-full'>
        <SearchBarProducts searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className='flex flex-col gap-2'></div>
        <div className='flex h-10 w-full gap-[14px] px-[14.5px] justify-center items-center'>
          <PaginationButtons
            totalPages={14}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      </div>
    </main>
  )
}

export default Products