import Image from 'next/image'
import React from 'react'
import ProfileBox from './ProfileBox'

const Account = () => {
    return (
        <ProfileBox>
            <div className='w-full flex flex-col gap-2 md:gap-4 justify-center items-center'>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300 md:font-bold gap-0.5 md:gap-0'>
                    <div className="-mr-1.5 md:-mr-2 bg-[url('/Image/background/bg-title-account.svg')] bg-cover size-8 md:size-10 bg-no-repeat flex justify-center items-center" >
                        <Image
                            src='/iconSax/home.svg'
                            alt="account"
                            width={24}
                            height={24}
                        />
                    </div>
                    حساب من در یک نگاه
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/box.svg'
                            alt="orders"
                            width={24}
                            height={24}
                        />
                    </div>
                    سفارش ها
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/heart.svg'
                            alt="my favorite list"
                            width={24}
                            height={24}
                        />
                    </div>
                    لیست علافه مندی من
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/bg-location.svg'
                            alt="locations"
                            width={24}
                            height={24}
                        />
                    </div>
                    آدرس ها
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/mail.svg'
                            alt="messages"
                            width={24}
                            height={24}
                        />
                    </div>
                    پیغام ها
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/message-text.svg'
                            alt="comments"
                            width={24}
                            height={24}
                        />
                    </div>
                    نظرات
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-base-300'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/user-square.svg'
                            alt="user account"
                            width={24}
                            height={24}
                        />
                    </div>
                    مشخصات حساب کاربری
                </div>
                <div className='w-full flex justify-start items-center text-sm md:text-xl text-[#C62020]'>
                    <div className="-mr-2 size-10 flex justify-center items-center" >
                        <Image
                            src='/iconSax/logout.svg'
                            alt="logout"
                            width={24}
                            height={24}
                        />
                    </div>
                    خروج از حساب
                </div>
            </div>
        </ProfileBox>
    )
}

export default Account