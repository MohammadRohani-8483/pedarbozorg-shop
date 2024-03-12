'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Select from './Select'
import UploadFiles from './UploadFiles'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Input"

type Inputs = {
    name: string
    E_mail: string
    phone_number: string
    order_number: string
    text_message: string
    upload: any
}

const schema = yup.object().shape({
    name: yup.string().required(),
    E_mail: yup.string().required().email('ایمیل صحیح وارد کنید.'),
    phone_number: yup.string().required("تلفن تماس اجباری است.")
        .matches(/^09\d{9}$/, "لطفا شماره صحیح وارد کنید.")
        .min(11, "لطفا شماره صحیح وارد کنید.").max(11, "لطفا شماره صحیح وارد کنید."),
    text_message: yup.string().required(),
})

export default function SendMessageToPedarbozorg() {
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

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema,"","","","","") })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const dataWithSubject = {
            ...data,
            subject: activeOption
        }
        console.log(dataWithSubject)
    }


    console.log(errors)
    return (
        <div className='flex flex-col bg-white rounded-3xl p-4 items-center justify-center w-full gap-6'>
            <h2 className='text-base-300 font-bold text-xl'>
                ارسال پیام به پدربزرگ
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full gap-4 flex flex-col items-end justify-center'>
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
                        register={register}
                    />
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Input
                        type='email'
                        name='E_mail'
                        placeholder='ایمیل*'
                        className='w-full'
                        register={register}
                    />
                    <Input
                        type='tel'
                        pattern="[0-9]{11}"
                        maxLength={11}
                        name='phone_number'
                        placeholder='تلفن تماس*'
                        className='w-full'
                        register={register}
                    />
                    <Input
                        type='number'
                        name='order_number'
                        placeholder='شماره سفارش'
                        className='w-full'
                        register={register}
                    />
                </div>
                <div className='relative w-full focus:border-base-300 border border-gray-400 hover:border-gray-700 rounded-lg p-1 flex justify-center items-center h-40'>
                    <textarea
                        className='peer/message w-full h-10 p-2 outline-none  text-black resize-none h-full '
                        id='scroll'
                        placeholder=''
                        {...register("text_message")}
                    />
                    <label htmlFor="scroll" className='peer-focus/message:text-[10px] text-[10px] peer-focus/message:text-base-300 text-gray-400 absolute peer-focus/message:-top-2.5 peer-focus/message:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/message:text-base peer-placeholder-shown/message:right-2 peer-placeholder-shown/message:top-2'>
                        متن پیام*
                    </label>
                </div>
                <UploadFiles register={register} name={"upload"} />
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
