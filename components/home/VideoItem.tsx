import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { motion } from "framer-motion"

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
                className={`object-cover max-w-[272px] w-full h-auto rounded-2xl ${classNameVideo}`}
                itemType="video/mp4"
                src={video}
            />
            <div
                style={{ color: color, backgroundColor: bgColor }}
                className={`rounded-2xl max-w-[272px] w-full h-auto p-4 gap-4 flex flex-col items-center justify-center text-center ${classNameDiv}`}
            >
                <h1 className="lg:text-2xl text-base font-bold">
                    {title}
                </h1>
                <p className={`lg:text-lg text-sm`}>
                    {desc}
                </p>
                <Link
                    href={link}
                    className='rounded-lg text-white text-sm overflow-hidden'
                    style={{ backgroundColor: color }}
                >
                    <button className='w-full flex justify-center items-center gap-2 hover:!backdrop-brightness-[0.9] px-3 py-1.5 transition-all duration-300'>
                        خرید
                        <FaChevronLeft />
                    </button>
                </Link>
            </div>
        </div>
    )
}

