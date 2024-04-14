'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IoIosClose } from "react-icons/io";
import toast from 'react-hot-toast';

type props = {
    setIsFormOpen: (par: boolean) => void
    link: any
}

const ShareForm = ({ setIsFormOpen, link }: props) => {
    const [isAnimate, setIsAnimate] = useState(true)

    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const pathname = usePathname()

    const variants = {
        visible: {
            y: 0,
            opacity: 1
        },
        hidden: {
            y: "50vh",
            opacity: 0
        },
        bgHidden: {
            opacity: 0
        },
        bgVisible: {
            opacity: 1
        },
    };

    const handleClose = () => {
        setIsAnimate(false)
        setTimeout(() => {
            setIsFormOpen(false)
            document.documentElement.classList.remove('overflow-hidden')
        }, 200)
    }

    const copyLink = () => {
        navigator.clipboard.writeText(link)
        handleClose()
        toastify()
    }

    const toastify = () => {
        toast.success("لینک کپی شد.")
    }

    return (
        <motion.div
            onClick={(e: any) => e.target.className === "fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-[2000] flex justify-center items-center" && handleClose()}
            animate={isAnimate ? "bgVisible" : "bgHidden"}
            initial={isAnimate ? "bgHidden" : "bgVisible"}
            variants={variants}
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-center items-center'
        >
            <motion.div
                className='flex flex-col justify-center items-center p-6 gap-6 bg-white rounded-2xl w-[288px] md:w-[419px]'
                animate={isAnimate ? "visible" : "hidden"}
                initial={isAnimate ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                <div className='flex justify-between items-center text-secondry-base text-xl font-bold w-full'>
                    <h1>اشتراک گذاری</h1>
                    <IoIosClose className='text-3xl cursor-pointer'
                        onClick={handleClose} />
                </div>
                <div className='flex flex-col gap-5 justify-center items-start w-full'>
                    <h3 className='text-gray-500 text-sm'>این کالا را با دوستان خود به اشتراک بگذارید!</h3>
                    <button
                        onClick={copyLink}
                        className='flex justify-center items-center w-full border border-gray-300 rounded-lg py-2 hover:bg-background text-secondry-base'>کپی کردن لینک</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ShareForm