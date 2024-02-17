'use client'
import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import { motion } from "framer-motion";

const SignUpSignIn = ({ setIsFormOpen }: { setIsFormOpen: (par: boolean) => void }) => {
    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [inputValue, setInputValue] = useState(phoneNumber)
    useEffect(() => {
        setInputValue(phoneNumber)
    }, [phoneNumber])

    const [isAnimate, setIsAnimate] = useState(true)

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

    return (
        <motion.div
            onClick={(e: any) => e.target.className === "fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-center items-center" && handleClose()}
            animate={isAnimate ? "bgVisible" : "bgHidden"}
            initial={isAnimate ? "bgHidden" : "bgVisible"}
            variants={variants}
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-center items-center'
        >
            <motion.div
                className='flex flex-col justify-center items-center p-6 gap-2 bg-white rounded-3xl w-[288px]'
                animate={isAnimate ? "visible" : "hidden"}
                initial={isAnimate ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                <div className='flex justify-between items-center text-base-400 text-xl font-bold w-full'>
                    <h1>ثبت نام | ورود</h1>
                    <IoIosClose className='text-3xl cursor-pointer'
                        onClick={handleClose} />
                </div>
                <div className='flex flex-col gap-2 justify-center items-center w-full'>
                    <Image
                        alt='Logo'
                        src='/Image/logo-login.png'
                        width={145}
                        height={145}
                    />
                    <div className='flex flex-col w-full gap-6'>
                        <div className='w-full flex flex-col justify-center items-center gap-4'>
                            <h2 className="text-sm text-[#757575]">شماره همراه خود را وارد کنید</h2>
                            <input maxLength={11} type="tel" pattern="09[0-9]{9}" placeholder="شماره همراه"
                                value={inputValue}
                                onChange={(e: any) => {
                                    setInputValue(e.nativeEvent.target.value)
                                    setPhoneNumber(e.nativeEvent.target.value)
                                }}
                                className='w-full h-10 placeholder:text-[#757575] placeholder:text-base p-2 focus:outline-none border border-[#CBCBCB] rounded-lg'
                            />
                        </div>
                        <button className='solid-btn rectangle-btn w-full'>ورود</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SignUpSignIn