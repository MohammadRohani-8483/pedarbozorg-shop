'use client'
import Icon from '@/components/Icon'
import ProfileBox from '@/components/profile/ProfileBox'
import React from 'react'
import { motion } from 'framer-motion'

const NotificationPage = () => {
    return (
        <ProfileBox>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                <div className='flex justify-between items-center w-full text-secondry-base text-base font-bold'>
                    پیغام ها
                    <motion.button whileHover={{ backgroundColor: "#F8C8C8" }} className='rounded-lg rectangle-btn flex gap-2 justify-center items-center bg-[#F9E3E3] text-error-base'>
                        حذف همه
                        <Icon nameIcon='trash-red' size={20} />
                    </motion.button>
                </div>
                <div className='min-h-[2px] w-full bg-[#E3E3E3]' />
            </div>
        </ProfileBox>
    )
}

export default NotificationPage