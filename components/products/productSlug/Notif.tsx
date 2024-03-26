'use client'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ShareForm from '../ShareForm';

const Notif = () => {
    const [isShareFormOpen, setIsShareFormOpen] = useState(false)

    const pathname = usePathname()
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    const clickShareFormHandler = () => {
        setIsShareFormOpen(true)
        document.documentElement.classList.add('overflow-hidden')
    }

    const toastify = () => {
        toast.error("این قابلیت به زودی اضافه میشود.")
    }

    const link = origin + pathname

    return (
        <div className='flex flex-row md:flex-col w-full md:w-auto justify-end items-center gap-2'>
            <div className='relative w-10 h-10 cursor-pointer'>
                <div
                    onClick={toastify}
                    className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/bell.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[195px] hover:bg-[#e0f1e9] transition-all duration-300'
                // whileHover={{ width: "195px", backgroundColor: "#e0f1e9" }}
                >
                    <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                        افزودن به علاقه مندی ها
                    </h2>
                </div>
            </div>
            <div className='relative w-10 h-10 cursor-pointer'>
                <div
                    onClick={clickShareFormHandler}
                    className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/share-green.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[158px] hover:bg-[#e0f1e9] transition-all duration-300'
                // whileHover={{ width: "158px", backgroundColor: "#e0f1e9" }}
                >
                    <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                        به اشتراک گذاشتن
                    </h2>
                </div>
            </div>
            {isShareFormOpen && <ShareForm setIsFormOpen={setIsShareFormOpen} link={link} />}
            <div className='relative w-10 h-10 cursor-pointer'>
                <div
                    onClick={toastify}
                    className='absolute top-0 right-0 bg-base-100 rounded-lg h-10 z-10 flex justify-center items-center gap-1 w-10 bg-[url("/iconSax/love-green.svg")] bg-right bg-contain bg-no-repeat overflow-hidden md:hover:w-[180px] hover:bg-[#e0f1e9] transition-all duration-300'
                // whileHover={{ width: "180px", backgroundColor: "#e0f1e9" }}
                >
                    <h2 className='whitespace-nowrap text-sm text-base-300 font-bold absolute right-10'>
                        اطلاع رسانی تخفیف ها
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Notif