'use client'
import React, { MouseEventHandler, useState } from 'react'
import { motion } from 'framer-motion';
import Icon from 'components/Icon';
import { useSelector } from 'react-redux';
import { authState } from 'public/redux/store/auth';
import Link from 'next/link';
import Alert from 'components/Alert';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/public/redux/hooks';
import { logoutUser } from '@/public/redux/actions/authActions';
import { getCartFromLocalStorage } from '@/public/redux/store/cart';

type menuProps = {
    isHover: boolean
}
type itemProps = {
    iconName: string
    title: string
    red?: boolean
    link?: string
    clickFunc?: MouseEventHandler<HTMLElement>
}

const ProfileMenu = ({ isHover }: menuProps) => {
    const { replace } = useRouter()
    const dispatch = useAppDispatch()
    const { userInfo, userToken } = useSelector((state: { auth: authState }) => state.auth)
    const [isLogingOut, setIsLogingOut] = useState(false)
    const handleLogOut = async () => {
        await dispatch(logoutUser({ access: userToken.access!, refresh: userToken.refresh! }))
        dispatch(getCartFromLocalStorage())
        replace('/')
    }

    return (
        <motion.div
            className={`${(isHover || false) ? "pointer-events-auto" : "pointer-events-none"} flex flex-col w-40 justify-center items-center bg-white rounded-lg absolute top-12 -left-0 z-[100] px-3 py-2 gap-4`}
            animate={(isHover || false) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link href='/profile' className='w-full flex justify-between items-center'>
                <h3 className='text-base-300 text-sm font-medium hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]'>
                    {userInfo.first_name ?
                        `${userInfo.first_name} ${userInfo.last_name}`
                        :
                        userInfo.user.username
                    }
                </h3>
                <Icon nameIcon='arrow-left' size={20} />
            </Link>
            <ProfileMenuItem link='/profile/orders' iconName='box' title='سفارش‌ها' />
            <ProfileMenuItem link='/profile/favorite' iconName='heart' title='لیست علاقه‌مندی' />
            <ProfileMenuItem iconName='logout' title='خروج از حساب' red clickFunc={() => setIsLogingOut(true)} />
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
        </motion.div>
    )
}

const ProfileMenuItem = ({ iconName, title, red, link = '', clickFunc = () => { } }: itemProps) => {
    return (
        <div className='flex justify-start items-center w-full'>
            {link ?
                <Link
                    onClick={clickFunc}
                    href={link}
                    className='flex justify-center items-center gap-2 cursor-pointer'
                >
                    <Icon nameIcon={iconName} size={20} />
                    <h3 className={`text-sm whitespace-nowrap font-medium ${red ? "text-[#C62020] hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-base-300 hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>{title}</h3>
                </Link>
                :
                <div
                    onClick={clickFunc}
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    >
                    <Icon nameIcon={iconName} size={20} />
                    <h3 className={`text-sm whitespace-nowrap font-medium ${red ? "text-[#C62020] hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-base-300 hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>{title}</h3>
                </div>
            }
        </div>
    )
}

export default ProfileMenu