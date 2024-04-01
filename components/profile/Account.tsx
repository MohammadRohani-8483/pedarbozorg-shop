'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler, useState } from 'react'
import Alert from '../Alert'
import ProfileBox from './ProfileBox'
import Icon from 'components/Icon'

type itemProps = {
    red?: boolean
    link?: string
    clickFunc?: MouseEventHandler<HTMLAnchorElement>
    iconName: string
    title: string
}

const Account = () => {
    const [isLogingOut, setIsLogingOut] = useState(false)

    const { replace } = useRouter()

    const handleLogOut = () => {
        replace('/')
    }

    return (
        <ProfileBox>
            <div className='w-full flex flex-col gap-2 md:gap-4 justify-center items-center'>
                <AccountItem iconName='home' link='' title='حساب من در یک نگاه' />
                <AccountItem iconName='box' link='' title='سفارش ها' />
                <AccountItem iconName='heart' link='' title='لیست علافه مندی من' />
                <AccountItem iconName='bg-location' link='' title='آدرس ها' />
                <AccountItem iconName='mail' link='' title='پیغام ها' />
                <AccountItem iconName='message-text' link='' title='نظرات' />
                <AccountItem iconName='user-square' link='' title='مشخصات حساب کاربری' />
                <AccountItem iconName='logout' title='مشخصات حساب کاربری' red clickFunc={() => setIsLogingOut(true)} />
                {isLogingOut &&
                    <Alert
                        confirmFunc={handleLogOut}
                        messageToast='با موفقیت از حساب خود خارج شدید'
                        setIsAlertOpen={setIsLogingOut}
                        textBtn='خروج از حساب'
                        title='خروج از حساب کاربری' redBtn
                    >
                        <p className='text-[#353535] w-full text-right'>
                            برای سفارش و مشاهده سبد خرید بایستی وارد حساب خود باشید
                        </p>
                    </Alert>
                }
            </div>
        </ProfileBox >
    )
}

export default Account

const AccountItem = ({ title, link = '', clickFunc = () => { }, red, iconName }: itemProps) => {
    return (
        <div className='w-full flex justify-start items-center'>
            <Link
                onClick={clickFunc}
                href={link}
                className='cursor-pointer flex justify-center items-center text-sm md:text-xl text-base-300'
            >
                <div className="-mr-2 size-10 flex justify-center items-center" >
                    <Icon nameIcon={iconName} size={24} />
                </div>
                <h3 className={`text-sm md:text-xl ${red ? "text-[#C62020] hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-base-300 hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>
                    {title}
                </h3>
            </Link>
        </div>
    )
}