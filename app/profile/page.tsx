'use client'
import Account from '@/components/profile/Account'
import Info from '@/components/profile/Info'
import LastMessages from '@/components/profile/last-message/LastMessages'
import OrdersList from '@/components/profile/OrdersList'
import React, { useEffect, useState } from 'react'
import Loading from './loading'

const ProfilePage = () => {
    const [start, setStart] = useState(false)

    useEffect(() => {
        setStart(true)
    }, [])

    return (
        <>
            {start ?
                <main className='grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center w-[90%] max-w-[1136px] mx-auto gap-4 py-24 md:py-36'>
                    <div className='w-full flex flex-col gap-4'>
                        <Info />
                        <Account />
                    </div>
                    <div className='md:col-start-2 md:col-end-4 w-full flex flex-col gap-4'>
                        <OrdersList />
                        <LastMessages />
                    </div>
                </main>
                :
                <Loading />
            }
        </>
    )
}

export default ProfilePage