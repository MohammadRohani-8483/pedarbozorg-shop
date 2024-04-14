'use client'
import LastMessages from '@/components/profile/LastMessages'
import OrdersList from '@/components/profile/OrdersList'
import React from 'react'
import LastSeenProducts from '@/components/profile/LastSeenProducts'
import { useSelector } from 'react-redux'
import { authState } from '@/public/redux/store/auth'

const ProfilePage = () => {
    const userInfo = useSelector((state: { auth: authState }) => state.auth.userInfo)

    return (
        <>
            <OrdersList />
            <LastMessages messages={userInfo.latest_notifications || []} />
            {/* <FavoriteList products={data.results} /> */}
            <LastSeenProducts products={userInfo.last_seen_products || []} />
        </>
    )
}

export default ProfilePage