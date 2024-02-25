'use client'
import React, { useEffect, useState } from 'react'
import SearchBarProducts from '../components/products/SearchBarProducts'
import PaginationButtons from '../components/PaginationButtons'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import ProductCard from '../components/productCard'
import Filters from '../components/products/Filters'
import Ordering from '../components/products/Ordering'

const Products = () => {
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [productsCount, setproductsCount] = useState(0)
  const [activeOrder, setActiveOrder] = useState("-view_count")
  const [categories, setCategories] = useState<number[]>([])
  const [isAvailable, setIsAvailable] = useState(false)
  const [maxPrice, setMaxPrice] = useState(0)
  const [maxPriceIpnut, setmaxPriceIpnut] = useState(maxPrice)
  const [minPriceIpnut, setMinPriceIpnut] = useState(0)
  const Router = useRouter()

  const api = '/api/store-api/products-public/'
  useEffect(() => {
    setmaxPriceIpnut(maxPrice)
  }, [maxPrice])

  const [currPage, setCurrPage] = useState(1)
  useEffect(() => {
    const categoryParams = categories?.map((category) => `categories=${category}`).join('&');
    console.log(`${api}?page=${currPage}&ordering=${activeOrder}${isAvailable ? '&available=true' : ''}&${categoryParams}`)

    axios.get(`${api}?page=${currPage}&ordering=${activeOrder}${isAvailable ? '&available=true' : ''}&min_price=${minPriceIpnut}&max_price=${maxPriceIpnut}&${categoryParams}`)
      .then(res => {
        setProducts(res.data.results)
        setproductsCount(res.data.count)
        setMaxPrice(res.data.max_price)
        // setmaxPriceIpnut(maxPrice)
      })
  }, [currPage, activeOrder, categories, isAvailable, minPriceIpnut, maxPriceIpnut]);

  return (
    <main className='w-[90%] max-w-[1136px] mx-auto pt-16 md:pt-[117px] flex gap-4'>
      <Filters
        max={maxPrice}
        inputFrom={minPriceIpnut}
        setInputFrom={setMinPriceIpnut}
        inputTo={maxPriceIpnut}
        setInputTo={setmaxPriceIpnut}
        categories={categories}
        setCategory={setCategories}
        setIsAvailable={setIsAvailable}
        isAvailable={isAvailable}
      />
      <div className='grid grid-cols-1 gap-4 w-full'>
        <div className='flex justify-start items-center w-full gap-2'>
          <SearchBarProducts searchValue={searchValue} setSearchValue={setSearchValue} />
          <Ordering setActiveOrder={setActiveOrder} activeOrder={activeOrder} />
        </div>
        <div className='flex flex-col gap-2 items-start justify-center'>
          <div className='flex justify-center items-center text-sm text-base-300 lg:hidden'>
            <div className='flex gap-2 justify-center items-center px-3 py-1.5'>
              <Image
                src='/iconSax/filter.svg'
                alt='filter'
                width={20}
                height={20}
              />
              <h2>فیلترها</h2>
            </div>
            <div className='flex gap-2 justify-center items-center px-3 py-1.5'>
              <Image
                src='/iconSax/sort.svg'
                alt='sort'
                width={20}
                height={20}
              />
              <h2>مرتب سازی</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-4 lg:gap-8 w-full">
            {products?.map((product: any) => (
              <ProductCard
                key={product.id}
                link={product.slug}
                name={product.name}
                price={product.min_price}
                image={product.featured_image}
                score={product.avg_rate}
                priceWithOffer={product.min_sell_price}
              />
            ))}
          </div>
        </div>
        <PaginationButtons
          productsCount={productsCount}
          setCurrentPage={setCurrPage}
        />
      </div>
    </main>
  )
}

export default Products