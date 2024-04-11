import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion';
import Icon from 'components/Icon';
import { useSelector } from 'react-redux';
import { authState } from 'public/redux/store/auth';
import Link from 'next/link';

type menuProps = {
    isHover: boolean
    setIsLogOut: (bool: boolean) => void
}
type itemProps = {
    iconName: string
    title: string
    red?: boolean
    link?: string
    clickFunc?: MouseEventHandler<HTMLElement>
}

const ProfileMenu = ({ isHover, setIsLogOut }: menuProps) => {
    const { userInfo } = useSelector((state: { auth: authState }) => state.auth)

    return (
        <motion.div
            className={`${(isHover || false) ? "pointer-events-auto" : "pointer-events-none"} flex flex-col w-40 justify-center items-center bg-white rounded-lg absolute top-12 -left-0 z-[100] px-3 py-2 gap-4`}
            animate={(isHover || false) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link href='/profile' className='w-full flex justify-between items-center'>
                <h3 className='text-secondry-base text-sm font-medium hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]'>
                    {userInfo.first_name ?
                        `${userInfo.first_name} ${userInfo.last_name}`
                        :
                        userInfo.user?.username
                    }
                </h3>
                <Icon nameIcon='arrow-left' size={20} />
            </Link>
            <ProfileMenuItem link='/profile/orders' iconName='box' title='سفارش‌ها' />
            <ProfileMenuItem link='/profile/favorite' iconName='heart' title='لیست علاقه‌مندی' />
            <ProfileMenuItem iconName='logout' title='خروج از حساب' red clickFunc={() => setIsLogOut(true)} />
        </motion.div>
    )
}

const ProfileMenuItem = ({ iconName, title, red, link , clickFunc = () => { } }: itemProps) => {
    return (
        <div className='flex justify-start items-center w-full'>
            {link ?
                <Link
                    onClick={clickFunc}
                    href={link}
                    className='flex justify-center items-center gap-2 cursor-pointer'
                >
                    <Icon nameIcon={iconName} size={20} />
                    <h3 className={`text-sm whitespace-nowrap font-medium ${red ? "text-error-base hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-secondry-base hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>{title}</h3>
                </Link>
                :
                <div
                    onClick={clickFunc}
                    className='flex justify-center items-center gap-2 cursor-pointer'
                >
                    <Icon nameIcon={iconName} size={20} />
                    <h3 className={`text-sm whitespace-nowrap font-medium ${red ? "text-error-base hover:drop-shadow-[0_0_24px_rgba(198,32,32,0.60)]" : "text-secondry-base hover:drop-shadow-[0_0_24px_rgba(61,131,97,0.60)]"}`}>{title}</h3>
                </div>
            }
        </div>
    )
}

export default ProfileMenu