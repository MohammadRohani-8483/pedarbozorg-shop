'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import EnterPhoneNumberForm from './EnterPhoneNumberForm';
import CodeVerificationForm from './CodeVerificationForm';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SignUpSignIn = ({ setIsFormOpen }: { setIsFormOpen: (par: boolean) => void }) => {
    const [inputValue, setInputValue] = useState('')
    const [isEnterNumber, setIsEnterNumber] = useState(false)
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
        params.delete("sign_in")
        // console.log(params.get("sign_in"));
        replace(`${pathname}?${params.toString()}`)
    }

    const verificationCode = Math.floor((Math.random() * 89999) + 10000)

    useEffect(() => {
        console.log(verificationCode);
    }, [])


    return (
        <motion.div
            onClick={(e: any) => e.target.className === "fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-[2000] flex justify-center items-center" && handleClose()}
            animate={isAnimate ? "bgVisible" : "bgHidden"}
            initial={isAnimate ? "bgHidden" : "bgVisible"}
            variants={variants}
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50 flex justify-center items-center'
        >
            <motion.div
                className='flex flex-col justify-center items-center p-6 gap-2 bg-white rounded-3xl w-[288px] md:w-[419px]'
                animate={isAnimate ? "visible" : "hidden"}
                initial={isAnimate ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                {!isEnterNumber ?
                    <EnterPhoneNumberForm
                        handleClose={handleClose}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        setIsEnterNumber={setIsEnterNumber}
                    />
                    :
                    <CodeVerificationForm
                        handleClose={handleClose}
                        phoneNumber={inputValue}
                        verificationCode={verificationCode}
                    />
                }
            </motion.div>
        </motion.div>
    )
}

export default SignUpSignIn