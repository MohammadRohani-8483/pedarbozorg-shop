import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    icon: string
    title: string
    desc?: string
    descs?: {
        key: string
        value: string
        link: string
    }[]
    link?: string
}

const CommunicationItems = ({ icon, title, desc, descs, link }: props) => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-4 bg-white rounded-2xl gap-6 md:h-[318px]'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                />
                <h2 className='font-bold text-center text-xl text-base-300'>
                    {title}
                </h2>
            </div>
            <div className='flex flex-col gap-4 w-full text-gray-500 text-base font-bold text-center'>
                {
                    descs ?
                        descs.map((desc,i) => (
                            <div
                                key={i}
                                className=' flex justify-between items-center'
                            >
                                <div>{desc.key}:</div>
                                <Link href={desc.link}>{desc.value}</Link>
                            </div>
                        ))
                        : link ?
                            <Link href={link}>{desc}</Link>
                            :
                            desc
                }
            </div>
        </div>
    )
}

export default CommunicationItems