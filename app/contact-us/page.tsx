import Communications from '@/components/contact-us/communications/Communications'
import SendMessageToPedarbozorg from '@/components/contact-us/SendMessageToPedarbozorg'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'
import Map from 'components/contact-us/Map'

export default function page() {
    return (
        <>
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={219}
                height={218}
                className='top-2 left-0 absolute hidden md:block z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-1.svg"
                alt="tree 1"
                width={152}
                height={192}
                className='top-12 right-0 absolute hidden md:block z-[-1]'
            />
            <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 py-20 md:py-[117px]'>
                <Title>تماس با ما</Title>
                <div className='flex flex-col w-full justify-center items-center gap-2 lg:gap-6'>
                    <SendMessageToPedarbozorg />
                    <Communications />
                </div>
                {/* <Map /> */}
            </main>
        </>
    )
}
