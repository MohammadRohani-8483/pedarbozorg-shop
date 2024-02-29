'use client'
import { blogs } from 'public/data/blogs'
import React, { useState } from 'react'
import Category from 'public/components/blog/Category'
import BlogCard from '@/public/components/home/pedarBozorgInLife/blogsDesktop/BlogCard'
import BlogCardMobile from '@/public/components/home/pedarBozorgInLife/blogsMobile/BlogCardMobile'
import PaginationButtons from 'public/components/PaginationButtons'
import SearchBarProducts from 'public/components/products/SearchBarProducts'

const Blog = () => {
    const [currPage, setCurrPage] = useState(1)
    const [blogsCount, setBlogsCount] = useState(12)
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState<number[]>([])
    return (
        <main className='w-[90%] max-w-[1136px] mx-auto py-16 md:py-[117px] flex flex-col gap-2 lg:gap-4'>
            <div className='w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-[65%_33%] lg:grid-cols-[74.8%_24%] md:gap-4 ltr'>
                <SearchBarProducts searchValue={searchValue} setSearchValue={setSearchValue} />
                <Category
                    categoryState={category}
                    setCategory={setCategory}
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify- gap-2 md:gap-4'>
                {
                    blogs.slice(0, 12).map((blog) => (
                        <>
                            <div className='block md:hidden'>
                                <BlogCardMobile
                                    key={blog.id}
                                    image={blog.image}
                                    link={blog.link}
                                    name={blog.name}
                                    readingTime={blog.readingTime}
                                    category={blog.category}
                                    constructDay={blog.constructDay}
                                    constructMonth={blog.constructMonth}
                                    constructYear={blog.constructYear}
                                />
                            </div>
                            <div className='hidden md:block'>
                                <BlogCard
                                    image={blog.image}
                                    link={blog.link}
                                    name={blog.name}
                                    readingTime={blog.readingTime}
                                    description={blog.description}
                                    category={blog.category}
                                    constructDay={blog.constructDay}
                                    constructMonth={blog.constructMonth}
                                    constructYear={blog.constructYear}
                                />
                            </div>
                        </>
                    ))
                }
            </div>
            {Math.ceil(blogsCount / 12) > 1 &&
                <PaginationButtons
                    productsCount={blogsCount}
                    setCurrentPage={setCurrPage}
                />
            }
        </main>
    )
}

export default Blog