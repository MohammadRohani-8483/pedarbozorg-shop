import Image from 'next/image'
import React from 'react'

type props = {
    title: string
    image?: string
    desc: string
    leftImage?: boolean
}

const AboutUsItem = ({ title, image = '/Image/logo-login.svg', desc, leftImage }: props) => {
    return (
        <div className={`flex flex-col ${leftImage ? "md:flex-row-reverse" : "md:flex-row"} w-full justify-center items-center gap-4 md:gap-8`}>
            <div className='relative size-40 md:size-[370px]'>
                <Image
                    src={image}
                    alt='flower'
                    fill
                />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-8'>
                <h3 className='text-base md:text-2xl text-secondry-base font-bold text-center'>
                    {title}
                </h3>
                <p className='text-sm md:text-lg text-justify leading-6'>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default AboutUsItem