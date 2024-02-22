'use client'
import React, { useEffect, useState } from 'react'
import SearchBarProducts from '../components/products/SearchBarProducts'
// import { products } from '@/public/data/products'
import PaginationButtons from '../components/PaginationButtons'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
import ProductCard from '../components/productCard'

const Products = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const api = '/api/store-api/products-public/'
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [productsCount, setproductsCount] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.push('?page=1')
    axios.get(api)
      .then(res => {
        setProducts(res.data.results)
        setproductsCount(res.data.count)
      })
  }, [])

  console.log(products);


  const [currPage, setCurrPage] = useState(1)
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', currPage.toString());
    router.push(url.toString());
    axios.get(`${api}?page=${currPage}`)
      .then(res => {
        setProducts(res.data.results)
      })
  }, [currPage, router]);

  const page = (searchParams.page || "1") as string

  return (
    <main className='w-[90%] max-w-[1136px] mx-auto pt-16 md:pt-20'>
      <div className='grid grid-cols-1 gap-4 w-full'>
        <SearchBarProducts searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className='flex flex-col gap-2 items-start justify-center'>
          <div className='flex justify-center items-center text-sm text-base-300'>
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
          {products?.map((product: any) => (
            <ProductCard
              key={product.id}
              link={product.slug}
              name={product.name}
              price={product.min_price}
              image={product.featured_image}
              score={product.avg_rate}
              priceWithOffer={product.min_price}
            />
          ))}
        </div>
        <PaginationButtons
          productsCount={productsCount}
          setCurrentPage={setCurrPage}
        />
        {/* <p>{productsCount}</p> */}
      </div>
    </main>
  )
}

export default Products