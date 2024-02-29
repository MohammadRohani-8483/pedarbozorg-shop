'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

type props = {
    icon: string,
    title: string,
    description: string
}

const WhyPedarbozorgItem: React.FC<props> = ({ icon, title, description }) => {
    const [isHover, setIsHover] = useState(false)
    const variants = {
        bgAnimate: {
            scale: 1.1,
            rotateZ: '-10deg',
        },
        bgInitial: {
            scale: 1,
            rotateZ: 0,
        },
        iconAnimate: {
            rotateZ: '10deg',
        },
        iconInitial: {
            rotateZ: 0,
        },
    }

    return (
        <motion.div
            animate={isHover ? "bgAnimate" : "bgInitial"}
            variants={variants}
            transition={{ duration: 0.3 }}
            className="lg:py-8 lg:px-6 py-2 px-3 bg-[url(/Image/background-green-vector.svg)] bg-contain bg-no-repeat bg-center max-w-[265px] aspect-[265/305] flex justify-center items-center"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <motion.div
                animate={isHover ? "iconAnimate" : "iconInitial"}
                variants={variants}
                transition={{ duration: 0.3 }}
                className='flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-2 '
            >
                <div
                    className='relative lg:w-1/4 w-1/3 aspect-square flex justify-center items-center'
                >
                    <Image
                        src={icon}
                        fill
                        alt={title}
                    />
                </div>
                <h1 className='text-white lg:text-2xl text-xs font-bold'>{title}</h1>
                <p className='text-gray-200 font-light w-[180px] lg:text-sm text-[10px]'>{description}</p>
            </motion.div>
        </motion.div>
    )
}

export default WhyPedarbozorgItem