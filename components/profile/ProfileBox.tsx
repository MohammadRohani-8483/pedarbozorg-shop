import React from 'react'

const ProfileBox = ({ children }: any) => {
    return (
        <div className='flex w-full p-4 md:p-8 items-center justify-center bg-white border border-[#E3E3E3] rounded-3xl'>
            {children}
        </div>
    )
}

export default ProfileBox