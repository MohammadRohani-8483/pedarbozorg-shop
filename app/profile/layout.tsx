'use client'
import Account from '@/components/profile/Account'
import Info from '@/components/profile/Info'
import { authState } from '@/public/redux/store/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loading from './loading'

const LayoutProfile = ({ children }: any) => {
    const { isLogedIn, userInfo } = useSelector((state: { auth: authState }) => state.auth)
    const { replace } = useRouter()

    useEffect(() => {
        !isLogedIn &&
            replace('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogedIn])

    return (
        <>
            {userInfo.user?.username ?
                <main className='grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center w-[90%] max-w-[1136px] mx-auto gap-4 py-24 md:py-36'>
                    <div className='w-full flex flex-col gap-4'>
                        <Info />
                        <Account />
                    </div>
                    <div className='md:col-start-2 md:col-end-4 w-full flex flex-col gap-4'>
                        {children}
                    </div>
                </main>
                :
                <Loading />
            }
        </>
    )
}

export default LayoutProfile