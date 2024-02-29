import React from 'react'
import BlogCardMobile from './BlogCardMobile'
import { blogs } from '@/public/data/blogs'

const BlogsDemo = () => {
    return (
        <div className='w-[90%] mx-auto grid lg:hidden sm:grid-cols-2 grid-cols-1 gap-2'>
            {
                blogs.slice(0, 8).map((blog) => (
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
                ))
            }
        </div>
    )
}

export default BlogsDemo