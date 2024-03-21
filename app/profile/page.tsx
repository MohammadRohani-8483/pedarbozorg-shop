import Account from '@/components/profile/Account'
import Info from '@/components/profile/Info'
import React from 'react'

const ProfilePage = () => {
    return (
        <main className='grid grid-cols-1 md:grid-cols-3 justify-items-center justify-center items-center w-[90%] max-w-[1136px] mx-auto gap-4 py-24 md:py-36'>
            <div className='w-full flex flex-col gap-4'>
                <Info />
                <Account />
            </div>
            <div className='md:col-start-2 md:col-end-4 bg-gray-200 w-full'></div>
        </main>
    )
}

export default ProfilePage