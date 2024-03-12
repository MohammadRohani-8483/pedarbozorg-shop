import Select from '@/components/contact-us/Select'
import SendMessageToPedarbozorg from '@/components/contact-us/SendMessageToPedarbozorg'
import Title from '@/components/Title'
import React from 'react'

export default function page() {
    return (
        <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 py-20 md:py-[117px]'>
            <Title>تماس با ما</Title>
            <div className='flex flex-col w-full justify-center items-center gap-2 lg:gap-6'>
                <SendMessageToPedarbozorg />
                
            </div>
        </main>
    )
}
