import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image'
import { IoIosClose } from "react-icons/io";
import toast from 'react-hot-toast';

type props = {
    title: string
    setIsAlertOpen: (par: boolean) => void
    confirmFunc: (par?: any) => void
    redBtn?: boolean
    messageToast: string
    children: ReactNode
    textBtn: string
}

const Alert = ({ title, confirmFunc, redBtn, setIsAlertOpen, messageToast, children, textBtn }: props) => {
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

    useEffect(() => {
        document.documentElement.classList.add('overflow-hidden')

        return () => {
            document.documentElement.classList.remove('overflow-hidden')
        }
    }, [])

    const alertRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        setIsAnimate(false)
        document.documentElement.classList.remove('overflow-hidden')
        setTimeout(() => {
            setIsAlertOpen(false)
        }, 300)
    }

    const handleConfirm = () => {
        confirmFunc()
        handleClose()
        toast.success(messageToast)
    }

    return (
        <motion.div
            ref={alertRef}
            onClick={(e: any) => e.target.classList === alertRef?.current?.classList && handleClose()}
            animate={isAnimate ? "bgVisible" : "bgHidden"}
            initial={isAnimate ? "bgHidden" : "bgVisible"}
            variants={variants}
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-center items-center'
        >
            <motion.div
                className='flex flex-col justify-center items-center p-4 md:p-6 gap-4 md:gap-6 bg-white rounded-2xl w-[288px] md:w-auto'
                animate={isAnimate ? "visible" : "hidden"}
                initial={isAnimate ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                <div className='flex justify-between items-center text-base-300 text-xl font-bold w-full'>
                    <h1>
                        {title}
                    </h1>
                    <IoIosClose className='text-3xl cursor-pointer'
                        onClick={handleClose} />
                </div>
                {children}
                <div className='flex w-full justify-end gap-3 md:gap-4'>
                    <button
                        onClick={handleClose}
                        className='rectangle-btn outline-btn !border-red-600 !bg-white !text-red-600 hover:!bg-red-50'
                    >
                        انصراف
                    </button>
                    <button
                        onClick={handleConfirm}
                        className={`rectangle-btn solid-btn ${redBtn ? "!bg-red-600 hover:!bg-red-700" : ""}`}
                    >
                        {textBtn}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Alert