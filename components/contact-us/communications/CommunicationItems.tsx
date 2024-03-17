import Image from 'next/image'
import React from 'react'
// import icon from 'public/iconSax/alarm.svg'

type props = {
    icon?: string
    title: string
    desc?: string
    descs?: {
        key: string
        value: string
    }[]
}

const icon = '/iconSax/alarm.svg'

const CommunicationItems = ({ icon = '/iconSax/alarm.svg', title, desc, descs }: props) => {
    return (
        <div className='w-full flex flex-col justify-center items-center p-4 bg-white rounded-3xl gap-6 md:h-[318px]'>
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
                        descs.map((desc) => (
                            <div
                                key={crypto.randomUUID()}
                                className=' flex justify-between items-center'
                            >
                                <div>{desc.key}:</div>
                                <div>{desc.value}</div>
                            </div>
                        ))
                        :
                        desc
                }
            </div>
        </div>
    )
}

export default CommunicationItems