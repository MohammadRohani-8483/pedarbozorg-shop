'use client'
import Image from 'next/image'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import OTPInputGroup from './OTP';

type props = {
    handleClose: () => void
    phoneNumber: string
    verificationCode: number
}

const CodeVerificationForm = ({ handleClose, phoneNumber, verificationCode }: props) => {
    const [isLoading, setIsLoading] = useState(false)

    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
    });
    let inputValuesString = Object.values(inputValues).join('');
    let inputValuesNumber = Number(inputValuesString);

    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            console.log("inputNumber", inputValuesNumber);
            console.log("verificationCode", verificationCode);
            (inputValuesNumber > 9999 && (verificationCode == inputValuesNumber)) ? alert('yes') : alert('no')
        }, 700)
    }

    return (
        <>
            <div className='flex justify-between items-center text-base-300 text-xl font-bold w-full'>
                <h1>ثبت نام | ورود</h1>
                <IoIosClose className='text-3xl cursor-pointer'
                    onClick={handleClose} />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center w-full max-w-[300px]'>
                <Image
                    alt='Logo'
                    src='/Image/logo-login.png'
                    width={145}
                    height={145}
                />
                <div className='flex flex-col w-full gap-6'>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <h2 className="text-sm text-[#757575]">کد ارسال شده به شماره {phoneNumber} را وارد کنید</h2>
                        <OTPInputGroup
                            setInputValues={setInputValues}
                            inputValuesNumber={inputValuesNumber}
                            inputValues={inputValues}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    {isLoading ?
                        <button className='relative flex justify-center solid-btn rectangle-btn w-full h-10'>
                            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                                <div className="relative border-t-transparent border-solid animate-[rereverse-spin_1s_ease-in-out_infinite] rounded-full border-white border-2 h-6 w-6">
                                </div>
                            </div>
                            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                                <div className="right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 border-t-transparent border-solid animate-[reverse-spin_1s_ease-in-out_infinite] rounded-full border-white border-2 h-3 w-3">
                                </div>
                            </div>
                        </button>
                        :
                        <button onClick={handleSubmit} className='flex justify-center solid-btn rectangle-btn w-full'>
                            ورود
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default CodeVerificationForm