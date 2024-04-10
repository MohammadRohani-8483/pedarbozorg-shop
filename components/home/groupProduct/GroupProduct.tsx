'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useState } from "react"
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { groupProduct } from '@/public/types/props';

const GroupProduct: React.FC<groupProduct> = ({ link, icon, name }) => {
    const [isHover, setIsHover] = useState(false)
    const variants = {
        groupAnimate: {
            scale: 1.2,
        },
        groupInitial: {
            scale: 1,
        },
        bgAnimate: {
            rotateZ: '-35deg',
        },
        bgInitial: {
            rotateZ: 0,
        },
        iconAnimate: {
            rotateZ: '35deg',
        },
        iconInitial: {
            rotateZ: 0,
        },
    }

    return (
        <motion.div
            animate={isHover ? "groupAnimate" : "groupInitial"}
            variants={variants}
            transition={{ duration: 0.3 }}
            className='w-[109px] flex flex-col gap-3.5 justify-center items-center'
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <motion.div
                className='bg-[url("/Image/background/bg-group.png")] w-24 aspect-square flex justify-center items-start'
                animate={isHover ? "bgAnimate" : "bgInitial"}
                variants={variants}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    animate={isHover ? "iconAnimate" : "iconInitial"}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                    className='relative w-[85%] h-[85%]'
                >
                    <Link
                        href={link}
                    >
                        <Image
                            src={icon}
                            alt={name}
                            fill
                        />
                    </Link>
                </motion.div>
            </motion.div>
            <h2 className="text-secondry-base font-bold">{name}</h2>
        </motion.div>
    )
}

export default GroupProduct