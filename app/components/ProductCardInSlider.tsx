'use client'
import { useState } from 'react';
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image';
import { FiCameraOff } from "@/node_modules/react-icons/fi/index";
import { FaStar } from "@/node_modules/react-icons/fa/index";
import tooman from "@/public/Image/tooman.svg"
import formatNumber from '@/public/Functions/formatNumber';
import { product } from '@/public/types/productType';
import { motion } from 'framer-motion';

export const ProductCardInSlider: React.FC<product> = ({ price, link, image, name, priceWithOffer , score }) => {
    // const priceWithOffer = Math.floor((price * ((100 - offerPresent) / 100)) / 1000) * 1000

    const present = (price - priceWithOffer) / price * 100

    const [isHover, setIsHover] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [isShopingCard, setIsShopingCard] = useState(false)

    const variants = {
        hover: {
            scale: 1,
        },
        unHover: {
            scale: 1.5,
        }
    }

    return (
        <div
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            className='bg-white gap-2 justify-between rounded-3xl p-4 flex flex-col h-72 hover:shadow-hover hover:transition-shadow hover:duration-300'>
            <div
                className='relative overflow-hidden h-auto w-full aspect-square rounded-xl flex items-center justify-center'
            >
                {image ?
                    <Image
                        src={image}
                        width={180}
                        height={180}
                        alt={name}
                        className="object-cover"
                    /> :
                    <div className='flex w-full justify-center items-center bg-gray-200 text-3xl h-full text-gray-600'>
                        <FiCameraOff />
                    </div>
                }
                <motion.div
                    className='w-full absolute top-0.5 left-0 flex justify-between items-center px-2'
                    animate={isHover ? "hover" : "unHover"}
                    variants={variants}
                    transition={{ duration: 0.3 }}
                >
                    {isLike ?
                        <Image onClick={() => setIsLike(false)} src='/iconSax/is-like.svg' alt="like" width={20} height={20} className='cursor-pointer' />
                        :
                        <Image onClick={() => setIsLike(true)} src='/iconSax/like.png' alt="like" width={20} height={20} className='cursor-pointer' />
                    }
                    {isShopingCard ?
                        <Image onClick={() => setIsShopingCard(false)} src='/iconSax/is-shopping-cart-product.svg' alt="shoping cart" width={20} height={20} className='cursor-pointer' />
                        :
                        <Image onClick={() => setIsShopingCard(true)} src='/iconSax/shopping-cart-product.svg' alt="shoping cart" width={20} height={20} className='cursor-pointer' />
                    }
                </motion.div>
            </div>
            <Link href={link} className='font-bold text-base-300 text-xl'>{name}</Link>
            <div className='flex justify-between items-center ltr'>
                <div className='flex gap-2 items-center'>
                    <p className='font-bold text-xl'>
                        {priceWithOffer === 0 ? "رایگان" : (present !== 0 ? formatNumber(priceWithOffer) : formatNumber(price))}
                    </p>
                    {priceWithOffer !== 0 &&
                        <Image
                            src={tooman}
                            alt='تومان'
                            width={23}
                            height={16}
                            className='object-cover'
                        />
                    }
                </div>
                {present !== 0 ?
                    <div className='bg-red-500 text-white rounded-full px-2 h-[20px] flex items-center text-xs'>
                        {present}%
                    </div>
                    :
                    (score &&
                        <div className='flex items-center justify-center gap-1'>
                            <FaStar className='text-yellow-600' /><p className='text-gray-600'>{score}</p>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between items-center ltr'>
                {present !== 0 &&
                    <>
                        <p className='line-through text-gray-400'>{formatNumber(price)}</p>
                        {score &&
                            <div className='flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-600' /><p className='text-gray-600'>{score}</p>
                            </div>
                        }
                    </>
                }
            </div>
        </div>)
}

export default ProductCardInSlider