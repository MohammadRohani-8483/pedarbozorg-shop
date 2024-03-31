'use client'
import Account from '@/components/profile/Account'
import Info from '@/components/profile/Info'
import LastMessages from '@/components/profile/LastMessages'
import OrdersList from '@/components/profile/OrdersList'
import React, { useEffect, useState } from 'react'
import '../../components/profile/profile.css'
import FavoriteList from '@/components/profile/FavoriteList'
import LastSeenProducts from '@/components/profile/LastSeenProducts'
import { useSelector } from 'react-redux'
import { authState } from '@/public/redux/store/auth'
import { useRouter } from 'next/navigation'
import Loading from './loading'
import Icon from '@/components/Icon'

const ProfilePage = () => {
    const userInfo = useSelector((state: { auth: authState }) => state.auth.userInfo)
    const isLogedIn = useSelector((state: { auth: authState }) => state.auth.isLogedIn)
    const { replace } = useRouter()
    const [start, setStart] = useState(false)

    useEffect(() => {
        !isLogedIn &&
            replace('/')
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
                        <LastMessages messages={userInfo.latest_notifications} />
                        {/* <FavoriteList products={data.results} /> */}
                        <LastSeenProducts products={userInfo.last_seen_products} />
                    </div>
                </main>
                :
                <Loading />
            }
        </>
    )
}

export default ProfilePage