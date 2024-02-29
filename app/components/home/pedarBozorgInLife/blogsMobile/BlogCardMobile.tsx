'use client'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image';
import { FiCameraOff } from "@/node_modules/react-icons/fi/index";

export default function BlogCardMobile({ link, image, name, category, readingTime, constructYear, constructMonth, constructDay }: any) {
    return (
        <Link
            href={link}
            className='bg-white gap-2 items-center rounded-lg p-2 grid grid-cols-[30%_1fr] min-h-[80px] h-full max-h-[112px] hover:shadow-hover hover:transition-shadow hover:duration-300'
            >
            <div className='relative overflow-hidden min-h-[64px] w-full h-full rounded-lg flex items-center justify-center'>
                {image ?
                    <Image
                        src={image}
                        fill
                        alt={name}
                        className="hover:scale-125 transition-transform duration-500 object-cover"
                    /> :
                    <div className='flex w-full justify-center items-center bg-gray-200 text-xl h-full hover:scale-125 transition-transform duration-500 text-gray-600'>
                        <FiCameraOff />
                    </div>}
            </div>
            <div className='flex flex-col justify-center items-center gap-1 w-full'>
                <h2 className='text-base-300 font-bold text-sm w-full'>{name}</h2>
                <div className='flex justify-between w-full'>
                    <h2 className='text-base-500 text-[10px]'>{category}</h2>
                    <div className='flex gap-2 text-[10px] text-gray-600'>
                        <div className='flex items-center'>
                            ’{readingTime}
                            <Image
                                src='/iconSax/clock.svg'
                                alt='Reading Time'
                                width={12}
                                height={12}
                            />
                        </div>
                        <div className='flex items-center'>
                            {constructYear}/{constructMonth}/{constructDay}
                            <Image
                                alt='Calender'
                                src='/iconSax/calendar.svg'
                                width={12}
                                height={12}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
