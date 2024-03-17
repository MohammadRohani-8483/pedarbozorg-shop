import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'

type props = {
    video: string
    bgColor: string
    color: string
    title: string
    desc: string
    classNameVideo: string
    classNameDiv: string
    link: string
    firstDiv?: boolean
}

export default function VideoItem({ video, bgColor, color, title, desc, classNameVideo, classNameDiv, link, firstDiv }: props) {
    return (
        <div
            className={`gap-2 md:gap-4 flex flex-col ${firstDiv ? "md:flex-col-reverse" : ""}`}
        >
            <video autoPlay loop
                className={`object-cover max-w-[272px] w-full h-auto rounded-3xl ${classNameVideo}`}
                itemType="video/mp4"
                src={video}
            />
            <div
                style={{ color: color, backgroundColor: bgColor }}
                className={`rounded-3xl max-w-[272px] w-full h-auto p-4 gap-4 flex flex-col items-center justify-center text-center ${classNameDiv}`}
            >
                <h1 className="lg:text-2xl text-base font-bold">
                    {title}
                </h1>
                <p className={`lg:text-lg text-sm`}>
                    {desc}
                </p>
                <Link
                    href={link}
                >
                    <button
                        style={{ backgroundColor: color }}
                        className='rounded-lg text-white text-sm flex justify-center items-center gap-2 hover:backdrop-brightness-[0.8] px-3 py-1.5 '
                    >
                        خرید
                        <FaChevronLeft />
                    </button>
                </Link>
            </div>
        </div>
    )
}

