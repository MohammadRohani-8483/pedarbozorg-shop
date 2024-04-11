'use client'
import { getMeThunk, loginUser } from '@/public/redux/actions/authActions';
import { AppDispatch } from '@/public/redux/store';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import OTPInputGroup from './OTP';
import { useTimer } from 'public/hooks/useTimer'
import { authState, getMe } from '@/public/redux/store/auth';
import { sendSMS } from './EnterPhoneNumberForm';
import { getCartFromServer, makeCartFromLocalStorage } from '@/public/redux/actions/cartActions';

type props = {
    handleClose: () => void
    phoneNumber: string
}

const CodeVerificationForm = ({ handleClose, phoneNumber }: props) => {
    const dispatch = useDispatch<AppDispatch>()
    const { isLoad, userToken, error }: authState = useSelector((state: any) => state.auth)

    useEffect(() => {
        if (userToken.access) {
            const login = async () => {
                await dispatch(getMeThunk(userToken.access!))
                await dispatch(makeCartFromLocalStorage(userToken.access!))
                await dispatch(getCartFromServer(userToken.access!))
                localStorage.removeItem('shoping_cart')
                handleClose()
                toast.success("شما با موفقیت وارد شدید.")
            }
            login()
        } else if (error) {
            toast.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userToken, error])

    const [isTimerEnd, setIsTimerEnd] = useState(false)
    const [timer, setTimer] = useState(120)
    const { finalMinute, finalSec } = useTimer(timer, setTimer, setIsTimerEnd)

    const [inputValues, setInputValues] = useState(new Array(5).fill(""));
    let inputValuesString = inputValues.join('');

    const handleSubmit = async () => {
        if (inputValuesString.length > 4) {
            await dispatch(loginUser({ phone_number: phoneNumber, code: inputValuesString }))
            setInputValues(new Array(5).fill(""))
        }
    }

    return (
        <>
            <div className='flex justify-between items-center text-secondry-base text-xl font-bold w-full'>
                <h1>ثبت نام | ورود</h1>
                <IoIosClose className='text-3xl cursor-pointer'
                    onClick={handleClose} />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center w-full max-w-[300px]'>
                <Image
                    alt='Logo'
                    src='/Image/logo-login.svg'
                    width={145}
                    height={145}
                />
                <div className='flex flex-col w-full gap-6'>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <h2 className="text-sm text-gray-500">کد ارسال شده به شماره {phoneNumber} را وارد کنید.</h2>
                        <OTPInputGroup
                            setInputValues={setInputValues}
                            inputValuesString={inputValuesString}
                            inputValues={inputValues}
                            handleSubmit={handleSubmit}
                        />
                        <div className='flex justify-between items-center -mt-2 -mb-4 w-full'>
                            <h2 className='flex justify-start items-center text-sm text-gray-600'>
                                {finalSec} : {finalMinute}
                            </h2>
                            <h2
                                onClick={() => {
                                    if (isTimerEnd) {
                                        sendSMS(phoneNumber)
                                        setTimer(120)
                                        setIsTimerEnd(false)
                                    }
                                }}
                                className={`text-sm ${isTimerEnd ? "text-gray-600 cursor-pointer" : "text-gray-400"}`}
                            >
                                ارسال مجدد کد
                            </h2>
                        </div>
                    </div>
                    {isLoad ?
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
                        <button id='submit_btn' onClick={handleSubmit} className='flex justify-center solid-btn rectangle-btn w-full'>
                            ورود
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default CodeVerificationForm