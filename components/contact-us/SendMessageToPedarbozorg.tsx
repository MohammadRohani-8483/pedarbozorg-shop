'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Select from 'components/contact-us/Select'
import UploadFiles from 'components/contact-us/UploadFiles'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input"

export default function SendMessageToPedarbozorg() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [orderNumber, setOrderNumber] = useState('')
    const subjectOptions = [
        'پیشنهاد',
        'انتقاد یا شکایت',
        'پیگیری سفارش',
        'خدمات پس از فروش',
        'امور مالی',
        'مدیریت',
        'سایر',
    ]
    const [activeOption, setActiveOption] = useState<string>()

    const defaultValue = "انتخاب موضوع"

    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 items-center justify-center w-full gap-6'>
            <h2 className='text-secondry-base font-bold text-xl'>
                ارسال پیام به پدربزرگ
            </h2>
            <form className='w-full gap-4 flex flex-col items-end justify-center'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex justify-center items-center w-full gap-3'>
                        <label htmlFor="subject">موضوع*:</label>
                        <Select
                            options={subjectOptions}
                            activeOption={activeOption}
                            setActiveOption={setActiveOption}
                            defaultValue={defaultValue}
                        />
                    </div>
                    <Input
                        type='text'
                        name='name'
                        placeholder='نام و نام خانوادگی*'
                        setValue={setName}
                    />
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Input
                        type='email'
                        name='E_mail'
                        placeholder='ایمیل*'
                        className='w-full'
                        setValue={setMail}
                    />
                    <Input
                        type='tel'
                        pattern="[0-9]{11}"
                        maxLength={11}
                        name='phone_number'
                        placeholder='تلفن تماس*'
                        className='w-full'
                        setValue={setPhoneNumber}
                    />
                    <Input
                        type='number'
                        name='order_number'
                        placeholder='شماره سفارش'
                        className='w-full'
                        setValue={setOrderNumber}
                    />
                </div>
                <div className='relative w-full focus:border-secondry-base border border-gray-400 hover:border-gray-700 rounded-lg p-1 flex justify-center items-center h-40'>
                    <textarea
                        className='peer/message w-full h-10 p-2 outline-none  text-black resize-none h-full '
                        id='scroll'
                        placeholder=''
                    />
                    <label htmlFor="scroll" className='peer-focus/message:text-[10px] text-[10px] peer-focus/message:text-secondry-base text-gray-400 absolute peer-focus/message:-top-2.5 peer-focus/message:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/message:text-base peer-placeholder-shown/message:right-2 peer-placeholder-shown/message:top-2'>
                        متن پیام*
                    </label>
                </div>
                <UploadFiles />
                <button type='submit' className='solid-btn rectangle-btn flex justify-center items-center gap-2 w-[100px]'>
                    ارسال
                    <Image
                        src='/iconSax/send-2.svg'
                        alt='send btn'
                        width={24}
                        height={24}
                    />
                </button>
            </form>
        </div>
    )
}
