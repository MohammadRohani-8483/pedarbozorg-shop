'use client'
import Icon from '@/components/Icon'
import ProfileBox from '@/components/profile/ProfileBox'
import React from 'react'
import { motion } from 'framer-motion'

type itemProps = {
    iconName: string
    value: string
}

const page = () => {
    return (
        <ProfileBox>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                <div className='flex justify-between items-center w-full text-secondry-base text-base font-bold'>
                    آدرس های من
                    <motion.button whileHover={{ backgroundColor: "#C1E2D2" }} className='rounded-lg rectangle-btn flex gap-2 justify-center items-center bg-secondry-tint-7 text-secondry-base'>
                        افزودن آدرس
                        <Icon nameIcon='location-add' size={20} />
                    </motion.button>
                </div>
                <div className='min-h-[2px] w-full bg-[#E3E3E3]' />
                <Address />
            </div>
        </ProfileBox>
    )
}

export default page

const Address = () => {
    return (
        <div className='flex w-full justify-between items-center'>
            <div className='flex flex-col gap-4 justify-center items-start'>
                <h4 className='text-sm text-neutral-800'>
                    قم/ خیابان امام موسی صدر/ کوچه ۷۷/ فرعی ۶
                </h4>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <AddressItem iconName='outline-user' value='صبا وطن دوست' />
                    <AddressItem iconName='outline-call' value='09330146331' />
                    <AddressItem iconName='signpost' value='18' />
                    <AddressItem iconName='Mailbox' value='25632563147' />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <motion.button
                    whileHover={{ backgroundColor: "#C1E2D2" }}
                    className='p-1.5 rounded-lg bg-secondry-tint-7'
                >
                    <Icon nameIcon='edit-green' size={20} />
                </motion.button>
                <motion.button
                    whileHover={{ backgroundColor: "#F8C8C8" }}
                    className='p-1.5 rounded-lg bg-[#F9E3E3]'
                >
                    <Icon nameIcon='trash-red' size={20} />
                </motion.button>
            </div>
        </div>
    )
}

const AddressItem = ({ iconName, value }: itemProps) => {
    return (
        <div className='flex gap-4 justify-center items-center text-neutral-800 text-xs'>
            <Icon nameIcon={iconName} size={16} />
            {value}
        </div>
    )
}