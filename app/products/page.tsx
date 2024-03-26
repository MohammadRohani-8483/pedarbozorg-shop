'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import Filters from '@/components/products/filters/Filters'
import SearchBarProducts from '@/components/products/SearchBarProducts'
import Ordering from '@/components/products/ordering/Ordering'
import ProductCard from '@/components/ProductCard'
import PaginationButtons from '@/components/PaginationButtons'
import FiltersMobile from '@/components/products/filters/FiltersMobile'
import OrderingMobile from '@/components/products/ordering/OrderingMobile'
import { useDebounce } from '@/public/hooks/useDebounce'
import SkeletonCard from '@/components/SkeletonCard'
import { orders } from '@/public/data/pageProducts'
import toast from 'react-hot-toast'

const Products = () => {
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState<any[]>()
  const [productsCount, setproductsCount] = useState(0)
  const [activeOrder, setActiveOrder] = useState("-view_count")
  const [categories, setCategories] = useState<number[]>([])
  const [isAvailable, setIsAvailable] = useState(false)
  const [maxPrice, setMaxPrice] = useState(7000000)
  const [maxPriceInput, setmaxPriceIpnut] = useState(maxPrice)
  const [minPriceInput, setMinPriceIpnut] = useState(0)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isOrderingOpen, setIsOrderingOpen] = useState(false)
  const [currPage, setCurrPage] = useState(1)
  const searchParams = useSearchParams()

  const debouncedSearch = useDebounce(searchValue)

  const api = '/api/store-api/products-public/'
  useEffect(() => {
    setmaxPriceIpnut(maxPrice)
  }, [maxPrice])

  useEffect(() => {
    const categoryParams = categories?.map((category) => `categories=${category}`).join('&');

    axios.get(`${api}?${`page=${currPage}`}${searchValue ? `&search=${debouncedSearch}` : ''}&ordering=${activeOrder}${isAvailable ? '&available=true' : ''}${minPriceInput > 0 ? `&min_price=${minPriceInput}` : ""}${maxPriceInput < maxPrice ? `&max_price=${maxPriceInput}` : ''}${categoryParams.length > 0 ? `&${categoryParams}` : ''}`)
      .then(res => {
        setProducts(res.data.results)
        setproductsCount(res.data.count)
        setMaxPrice(res.data.max_price)
      })
  }, [currPage, activeOrder, categories, isAvailable, minPriceInput, maxPriceInput, maxPrice, debouncedSearch]);

  useEffect(() => {
    setSearchValue(searchParams.get("search") || "")
  }, [searchParams])


  const TITLE = "پدربزرگ - محصولات"

  useEffect(() => {
    document.title = TITLE
  }, [])

  const toastify = (msg: string) => {
    toast.error(msg)
  }

  return (
    <>
      <main className='w-[90%] max-w-[1136px] mx-auto py-16 md:py-[117px] flex gap-4'>
        <Filters
          max={maxPrice}
          inputFrom={minPriceInput}
          setInputFrom={setMinPriceIpnut}
          inputTo={maxPriceInput}
          setInputTo={setmaxPriceIpnut}
          categories={categories}
          setCategory={setCategories}
          setIsAvailable={setIsAvailable}
          isAvailable={isAvailable}
        />
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex justify-start items-center w-full gap-2'>
            <SearchBarProducts searchValue={searchValue} setSearchValue={setSearchValue} />
            <Ordering
              orders={orders}
              setActiveOrder={setActiveOrder}
              activeOrder={activeOrder}
            />
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <div className='flex justify-center items-center lg:hidden'>
              <div
                className='flex gap-2 justify-center items-center text-sm text-base-300 px-3 py-1.5 cursor-pointer'
                onClick={() => {
                  setIsFiltersOpen(true)
                  document.documentElement.classList.add('overflow-hidden')
                }}
              >
                <Image
                  src='/iconSax/filter.svg'
                  alt='filter'
                  width={20}
                  height={20}
                />
                <h2>فیلترها</h2>
              </div>
              {isFiltersOpen &&
                <FiltersMobile
                  setIsFiltersOpen={setIsFiltersOpen} max={maxPrice}
                  inputFrom={minPriceInput}
                  setInputFrom={setMinPriceIpnut}
                  inputTo={maxPriceInput}
                  setInputTo={setmaxPriceIpnut}
                  categories={categories}
                  setCategory={setCategories}
                  setIsAvailable={setIsAvailable}
                  isAvailable={isAvailable}
                />
              }
              <div
                onClick={() => {
                  setIsOrderingOpen(true)
                  document.documentElement.classList.add('overflow-hidden')
                }}
                className='flex gap-2 justify-center items-center text-sm text-base-300 px-3 py-1.5 cursor-pointer'
              >
                <Image
                  src='/iconSax/sort.svg'
                  alt='sort'
                  width={20}
                  height={20}
                />
                <h2>مرتب سازی</h2>
              </div>
              {isOrderingOpen &&
                <OrderingMobile
                  setIsOrderingOpen={setIsOrderingOpen}
                  setActiveOrder={setActiveOrder}
                  activeOrder={activeOrder}
                />
              }
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-4 lg:gap-8 w-full">
              {products ?
                products.map((product: any) => {
                  return (
                    <ProductCard
                      key={product.id}
                      link={product.slug}
                      name={product.name}
                      price={product.min_sell_price}
                      image={product.featured_image}
                      score={product.avg_rate}
                      priceWithOffer={product.min_sell_price}
                      product={product}
                      toastify={toastify}
                    />
                  )
                })
                :
                Array(8).fill(1).map((_, i) => <SkeletonCard key={i} />)
              }
            </div>
          </div>
          {Math.ceil(productsCount / 12) > 1 && <PaginationButtons
            pageCount={Math.ceil(productsCount / 12)}
            setCurrentPage={setCurrPage}
          />}
        </div>
      </main>
    </>
  )
}

export default Products