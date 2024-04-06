import Image from 'next/image'
import { IoIosClose } from "react-icons/io";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Input from '../Input';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

type props = {
    handleClose: () => void
    setInputValue: (par: string) => void
    setIsEnterNumber: (val: boolean) => void
}

export const sendSMS = (phoneNumber: string) => {
    axios.post(`/api/core-api/auth/send-sms/`, { phone_number: phoneNumber })
        .then(res => toast.success(res.data.message))
}

const EnterPhoneNumberForm = ({ handleClose, setInputValue, setIsEnterNumber }: props) => {
    const phoneNumberRegEx = new RegExp(/^09\d{9}$/)
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const {
        register,
        watch,
    } = useForm()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (phoneNumber.length === 0) {
            toast.error("تلفن تماس اجباری است.");
            return
        }
        if (!phoneNumberRegEx.test(phoneNumber)) {
            toast.error("لطفا شماره صحیح وارد کنید.");
            return
        }
        sendSMS(phoneNumber)
        setInputValue(phoneNumber)
        setIsEnterNumber(true)
    }

    return (
        <>
            <div className='flex justify-between items-center text-base-300 text-xl font-bold w-full'>
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
                        <h2 className="text-sm text-[#757575]">شماره همراه خود را وارد کنید</h2>
                        <Input
                            maxLength={11}
                            className='w-full'
                            type='tel'
                            name='phone_number'
                            placeholder='شماره همراه*'
                            register={register}
                            value={phoneNumber}
                            setValue={setPhoneNumber}
                        />
                    </div>
                    <button onClick={handleSubmit} className='flex justify-center solid-btn rectangle-btn w-full'>ورود</button>
                </form>
            </div>
        </>
    )
}

export default EnterPhoneNumberForm