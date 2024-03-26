'use client'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image';
import { FiCameraOff } from "@/node_modules/react-icons/fi/index";

export default function BlogCard({ link, image, name, category, readingTime, constructYear, constructMonth, constructDay, description }: any) {
    return (
        <Link
            href={link}
            className='bg-white gap-4 justify-center items-center rounded-2xl p-4 flex flex-col max-w-[272px] w-full hover:shadow-hover hover:transition-shadow hover:duration-300'>
            <div className='relative overflow-hidden h-auto w-full aspect-[5/4] rounded-[10px] flex items-center justify-center'>
                {image ?
                    <Image
                        src={image}
                        fill
                        alt={name}
                        className="hover:scale-125 transition-transform duration-500 object-cover"
                    /> :
                    <div className='flex w-full justify-center items-center bg-gray-200 text-3xl h-full hover:scale-125 transition-transform duration-500 text-gray-600'>
                        <FiCameraOff />
                    </div>}
            </div>
            <div className='flex flex-col justify-between items-center gap-2'>
                <div className='flex justify-between w-full'>
                    <h2 className='text-base-500 text-sm'>{category}</h2>
                    <div className='flex gap-2 text-xs text-gray-600'>
                        <div className='flex items-center'>
                            ’{readingTime}
                            <Image
                                src='/iconSax/clock.svg'
                                alt='Reading Time'
                                width={18}
                                height={18}
                                className='mr-1'
                            />
                        </div>
                        <div className='flex items-center'>
                            {constructYear}/{constructMonth}/{constructDay}
                            <Image
                                alt='Calender'
                                src='/iconSax/calendar.svg'
                                width={18}
                                height={18}
                                className='mr-1'
                            />
                        </div>
                    </div>
                </div>
                <h2 className='text-base-300 font-bold'>{name}</h2>
                <p className='text-justify text-sm text-gray-500'>{description}</p>
            </div>
        </Link>
    )
}
