'use client'
import { useState } from 'react';
import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
import { FiCameraOff } from "@/node_modules/react-icons/fi/index";
import { FaStar } from "@/node_modules/react-icons/fa/index";
import tooman from "@/public/Image/tooman.svg";
import formatNumber from '@/public/Functions/formatNumber';
import { product } from '@/public/types/productType';
import { motion } from 'framer-motion';

const ProductCard = ({ price, link, image, name, offerPresent = 0, score }: product) => {
    const priceWithOffer = Math.floor((price * ((100 - offerPresent) / 100)) / 1000) * 1000;

    const [isLike, setIsLike] = useState(false)
    const [isShopingCard, setIsShopingCard] = useState(false)
    const [isHover, setIsHover] = useState(false)

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
            className='w-full bg-white gap-3.5 justify-center rounded-3xl p-2  lg:p-4 flex flex-col h-36 lg:h-72 hover:shadow-hover hover:transition-shadow hover:duration-300'
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className='flex flex justify-center lg:justify-between lg:flex-col items-center w-full lg:h-full gap-2'>
                {<>
                    <div
                        className='overflow-hidden relative min-w-[85px] lg:w-full aspect-square rounded-xl hidden lg:flex items-center justify-center'
                    >
                        {image ?
                            <Image
                                src={image}
                                fill
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
                            transition={{ duration: 0.5 }}
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
                    <Link href={link} className='overflow-hidden relative min-w-[85px] lg:w-full aspect-square rounded-xl flex lg:hidden items-center justify-center'>
                        {image ?
                            <Image
                                src={image}
                                fill
                                alt={name}
                                className="object-cover"
                            /> :
                            <div className='flex w-full justify-center items-center bg-gray-200 text-3xl h-full text-gray-600'>
                                <FiCameraOff />
                            </div>
                        }
                    </Link>
                </>
                }
                <div className='w-full flex flex-col gap-2'>
                    <Link href={link} className='text-base-300 text-base lg:text-xl font-bold'>{name}</Link>
                    <div className='flex justify-between w-full items-center ltr gap-2'>
                        <div className='flex gap-2 items-center justify-start lg:justify-end w-full'>
                            <p className='font-bold text-base lg:text-xl gap-2'>
                                {priceWithOffer === 0 ? "رایگان" : (offerPresent !== 0 ? formatNumber(priceWithOffer) : formatNumber(price))}
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
                        {offerPresent !== 0 ?
                            <div className='bg-red-500 text-white rounded-full px-2 h-[18px] lg:h-[20px] flex items-center text-[10px] lg:text-xs'>
                                {offerPresent}%
                            </div>
                            :
                            (score &&
                                <div className='flex items-center justify-center gap-1'>
                                    <FaStar className='text-[#FFC436]' /><p className='text-gray-600 text-xs lg:text-base'>{score}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex justify-between items-center ltr'>
                        {offerPresent !== 0 &&
                            <>
                                <p className='line-through text-gray-400 text-sm lg:text-base'>{formatNumber(price)}</p>
                                {score &&
                                    <div className='flex items-center justify-center gap-1'>
                                        <FaStar className='text-[#FFC436]' /><p className='text-gray-600 text-xs lg:text-base'>{score}</p>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='lg:hidden w-full flex justify-between items-center px-2'>
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
            </div>
        </div>
    )
}

export default ProductCard