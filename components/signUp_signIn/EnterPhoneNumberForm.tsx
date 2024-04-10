import Image from 'next/image'
import { IoIosClose } from "react-icons/io";
import Input from '../Input';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

type props = {
    handleClose: () => void
    setInputValue: (par: string) => void
    setIsEnterNumber: (val: boolean) => void
}

export const sendSMS = async (phoneNumber: string) => {
    const res = await axios.post(`/api/core-api/auth/send-sms/`, { phone_number: phoneNumber })
    toast.success(res.data.message)
    return res
}

const EnterPhoneNumberForm = ({ handleClose, setInputValue, setIsEnterNumber }: props) => {
    const phoneNumberRegEx = new RegExp(/^09\d{9}$/)
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        setIsLoading(true)
        e.preventDefault()
        if (phoneNumber.length === 0) {
            toast.error("تلفن تماس اجباری است.");
            return
        }
        if (!phoneNumberRegEx.test(phoneNumber)) {
            toast.error("لطفا شماره صحیح وارد کنید.");
            return
        }
        const { status } = await sendSMS(phoneNumber)
        if (status === 200) {
            setInputValue(phoneNumber)
            setIsEnterNumber(true)
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className='flex justify-between items-center text-secondry-base text-xl font-bold w-full'>
                <h1>ثبت نام | ورود</h1>
                <IoIosClose className='text-3xl cursor-pointer'
                    onClick={handleClose}
                />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center w-full max-w-[300px]'>
                <Image
                    alt='Logo'
                    src='/Image/logo-login.svg'
                    width={145}
                    height={145}
                />
                <form onSubmit={handleSubmit} className='flex flex-col w-full gap-6'>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <h2 className="text-sm text-neutral-600">شماره همراه خود را وارد کنید</h2>
                        <Input
                            maxLength={11}
                            className='w-full'
                            type='tel'
                            name='phone_number'
                            placeholder='شماره همراه*'
                            value={phoneNumber}
                            setValue={setPhoneNumber}
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
                </form>
            </div>
        </>
    )
}

export default EnterPhoneNumberForm