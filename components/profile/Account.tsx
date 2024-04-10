'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
    activeIcon?: string
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
                <AccountItem iconName='home-2' activeIcon='home' link='/profile/' title='حساب من در یک نگاه' />
                <AccountItem iconName='box' activeIcon='active-box' link='/profile/orders/' title='سفارش ها' />
                <AccountItem iconName='heart' activeIcon='solid-heart' link='/profile/favorite/' title='لیست علافه مندی من' />
                <AccountItem iconName='bg-location' activeIcon='solid-location' link='/profile/addresses/' title='آدرس ها' />
                <AccountItem iconName='mail' activeIcon='solid-mail' link='/profile/notifications/' title='پیغام ها' />
                <AccountItem iconName='message-text' activeIcon='solid-message-text' link='/profile/comments/' title='نظرات' />
                <AccountItem iconName='user-square' activeIcon='user-square-active' link='/profile/user-account/' title='مشخصات حساب کاربری' />
                <AccountItem iconName='logout' title='خروج از حساب' red clickFunc={() => setIsLogingOut(true)} />
                {isLogingOut &&
                    <Alert
                        confirmFunc={handleLogOut}
                        messageToast='با موفقیت از حساب خود خارج شدید'
                        setIsAlertOpen={setIsLogingOut}
                        textBtn='خروج از حساب'
                        title='خروج از حساب کاربری' redBtn
                    >
                        <p className='text-neutral-800 w-full text-right'>
                            برای سفارش و مشاهده سبد خرید بایستی وارد حساب خود باشید
                        </p>
                    </Alert>
                }
            </div>
        </ProfileBox >
    )
}

export default Account

const AccountItem = ({ title, link = '', clickFunc = () => { }, red, iconName, activeIcon }: itemProps) => {
    const pathname = usePathname()
    return (
        <div className='w-full flex justify-start items-center'>
            <Link
                onClick={clickFunc}
                href={link}
                className='cursor-pointer flex justify-center items-center text-sm md:text-xl text-secondry-base'
            >
                <div className={`-mr-2 size-10 flex justify-center items-center ${link === pathname ? "bg-[url('/Image/background/bg-title-account.svg')] bg-no-repeat bg-cover" : ""}`} >
                    <Icon nameIcon={link === pathname ? activeIcon! : iconName} size={24} />
                </div>
                <h3 className={`text-sm md:text-xl ${link === pathname ? "font-bold" : ""} ${red ? "text-error-base hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-secondry-base hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>
                    {title}
                </h3>
            </Link>
        </div>
    )
}