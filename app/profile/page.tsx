import Account from '@/components/profile/Account'
import Info from '@/components/profile/Info'
import LastMessages from '@/components/profile/LastMessages'
import OrdersList from '@/components/profile/OrdersList'
import React, { useEffect, useState } from 'react'
import '../../components/profile/profile.css'
import FavoriteList from '@/components/profile/FavoriteList'
import LastSeenProducts from '@/components/profile/LastSeenProducts'

const fetchFunc = async () => {
    const res = fetch(`${process.env.API}/store-api/products-public/`, {
        method: "GET"
    })
    return (await res).json()
}

const ProfilePage = async () => {
    const data = await fetchFunc()

    return (
        <>
            <main className='grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center w-[90%] max-w-[1136px] mx-auto gap-4 py-24 md:py-36'>
                <div className='w-full flex flex-col gap-4'>
                    <Info />
                    <Account />
                </div>
                <div className='md:col-start-2 md:col-end-4 w-full flex flex-col gap-4'>
                    <OrdersList />
                    <LastMessages />
                    <FavoriteList products={data.results} />
                    <LastSeenProducts products={data.results} />
                </div>
            </main>
        </>
    )
}

export default ProfilePage