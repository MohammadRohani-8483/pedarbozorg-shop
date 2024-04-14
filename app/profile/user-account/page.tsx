'use client'
import Icon from '@/components/Icon';
import Input from '@/components/Input'
import ProfileBox from '@/components/profile/ProfileBox'
import React, { useEffect, useState } from 'react'
import { DatePicker } from "react-advance-jalaali-datepicker";
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/public/redux/hooks';
import { authState } from '@/public/redux/store/auth';
import toast from 'react-hot-toast';
import { patchMe } from '@/public/redux/actions/authActions';
import Loading from '@/app/loading';

const UserAccount = () => {
    const { userInfo, userToken } = useAppSelector((state: { auth: authState }) => state.auth)
    const [firstname, setFirstName] = useState<string | null | undefined>()
    const [lastName, setLastName] = useState<string | null | undefined>()
    const [mail, setMail] = useState<string | null | undefined>()
    const [nationalCode, setNationalCode] = useState<string | null | undefined>()
    const [phoneNumber, setPhoneNumber] = useState<string | null | undefined>()
    const [birthDate, setBirthDate] = useState<string | null | undefined>()

    const [start, setStart] = useState(false)

    useEffect(() => {
        setFirstName(userInfo.first_name)
        setLastName(userInfo.last_name)
        setMail(userInfo.email)
        setNationalCode(userInfo.national_code)
        setPhoneNumber(userInfo.user?.username)
        setBirthDate(userInfo.birth_date)
        userInfo.user?.username && setStart(true)
    }, [userInfo])

    const dispatch = useAppDispatch()

    const changeMe = () => {
        const newInfo = {
            first_name: firstname,
            last_name: lastName,
            email: mail,
            birth_date: birthDate,
            national_code: nationalCode,
        }
        if (firstname === userInfo.first_name && lastName === userInfo.last_name && mail === userInfo.email && nationalCode === userInfo.national_code && phoneNumber === userInfo.user?.username && birthDate === userInfo.birth_date) {
            toast.error('لطفا حداقل یک مقدار را تغییر دهید')
        } else {
            const func = async () => {
                await dispatch(patchMe({ newInfo, access: userToken.access! }))
                toast.success('با موفقیت تغییر کرد')
            }
            func()
        }
    }

    return (
        <>
            {start ?
                <ProfileBox title='مشخصات حساب کاربری'>
                    <form onSubmit={changeMe} className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4'>
                        <Input name='firstName' placeholder='نام' setValue={setFirstName} type='text' value={firstname} />
                        <Input name='lastName' placeholder='نام خانوادگی' setValue={setLastName} type='text' value={lastName} />
                        <Input name='mail' placeholder='ایمیل' setValue={setMail} type='email' value={mail} />
                        <Input name='nationalCode' placeholder='کد ملی' setValue={setNationalCode} type='tel' maxLength={10} value={nationalCode} />
                        <Input name='phoneNumber' placeholder='شماره همراه' setValue={setPhoneNumber} type='tel' maxLength={11} value={phoneNumber} />
                        <InputDate setDate={setBirthDate} date={birthDate} />
                    </form>
                    <div className='w-full flex justify-end'>
                        <button onClick={changeMe} className='solid-btn rectangle-btn'>
                            ذخیره تغییرات
                        </button>
                    </div>
                </ProfileBox>
                :
                <Loading />
            }
        </>
    )
}

export default UserAccount

const InputDate = ({ setDate, date }: any) => {
    const [hoverIcon, setHoverIcon] = useState(false)
    return (
        <motion.div onHoverStart={() => !date && setHoverIcon(true)} onHoverEnd={() => setHoverIcon(false)} className='relative'>
            <DatePicker
                placeholder=""
                format="jYYYY-jMM-jDD"
                onChange={(unix, formatted) => setDate(formatted)}
                containerClass={`${date ? "border-secondry-base" : "border-gray-400 hover:border-gray-700"} peer/date w-full [&_input]:w-full [&_input]:h-full [&_input]:outline-none h-10 p-2 outline-none border rounded-lg text-black transition-all`}
                cancelOnBackgroundClick={true}
                preSelected={date || ''}
            />
            <div className={`${date ? "text-[10px] text-secondry-base right-4 -top-2.5" : "text-base top-2 right-2 text-gray-400"} absolute bg-white px-1 transition-all pointer-events-none`}>
                تاریخ تولد
            </div>
            <div className='absolute top-2.5 left-2 pointer-events-none'>
                <Icon nameIcon={hoverIcon ? 'calendar-green' : "calendar-gray"} size={20} />
            </div>
        </motion.div>
    )
}