'use client'
import { useState } from 'react';
import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
import { FaStar } from "@/node_modules/react-icons/fa/index";
import tooman from "@/public/Image/tooman.svg";
import formatNumber from '@/public/Functions/formatNumber';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@/public/redux/store/cart';
import toast from 'react-hot-toast';
import { shopCartItem } from '@/public/types/productType';

const ProductCard = ({ price, link, image, name, priceWithOffer, score, product }: any) => {
    const offerPresent = ((price - priceWithOffer) / price * 100) || 0

    const productIsAvailable = price || product?.is_available

    const [isLike, setIsLike] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const cart = useSelector((state: { cart: { cart: shopCartItem[] } }) => state.cart.cart)

    const cartItem = {
        id: product.cheapest_variant_id,
        shatootInfo: {
            sellPrice: product.min_sell_price,
            finalPrice: product.min_price,
            discount: product.min_price - product.min_sell_price,
        },
        product: {
            id: product.id,
            featuredImage: product.featured_image,
            name: product.name,
            slug: product.slug,
        },
    }

    const isProductToCart = Boolean(Array(...cart).find((item: any) => item.id === cartItem.id))

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(cartItem))
    }

    const handleDeleteFromCart = () => {
        dispatch(removeFromCart(cartItem))
    }

    const toastify = (msg: string) => {
        toast.error(msg)
    }

    return (
        <motion.div
            whileHover={{ boxShadow: "0px 0px 18.6px 0px rgba(61, 131, 97, 0.22)" }}
            className='w-full bg-white gap-3.5 justify-between items-center rounded-2xl p-4 flex flex-col h-72 gap-2'
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div
                className='overflow-hidden relative min-w-[85px] w-full h-auto aspect-square rounded-[10px] flex items-center justify-center'
            >
                <Image
                    src={image}
                    fill
                    alt={name}
                    className="object-cover"
                />
                <div
                    className='w-full absolute top-0.5 left-0 flex justify-between items-center px-2'
                >
                    <motion.div
                        animate={isHover ? { x: 0 } : { x: '30px' }}
                        transition={{ duration: 0.3 }}
                    >
                        {isLike ?
                            <Image
                                src='/iconSax/is-like.svg'
                                alt="like"
                                width={20}
                                height={20}
                                className='cursor-pointer'
                            />
                            :
                            <Image
                                onClick={() => toastify("این قابلیت به زودی اضافه میشود.")}
                                src='/iconSax/like.png'
                                alt="like"
                                width={20}
                                height={20}
                                className='cursor-pointer'
                            />
                        }
                    </motion.div>
                    <motion.div
                        animate={isHover ? { x: 0 } : { x: "-30px" }}
                        transition={{ duration: 0.3 }}
                    >
                        {isProductToCart ?
                            <Image
                                onClick={handleDeleteFromCart}
                                src='/iconSax/is-shopping-cart-product.svg'
                                alt="shoping cart"
                                width={20}
                                height={20}
                                className='cursor-pointer'
                            />
                            :
                            <Image
                                onClick={() => {
                                    productIsAvailable ?
                                        handleAddToCart()
                                        :
                                        toastify('این محصول ناموجود میباشد.')
                                }}
                                src='/iconSax/shopping-cart-product.svg'
                                alt="shoping cart"
                                width={20}
                                height={20}
                                className='cursor-pointer'
                            />
                        }
                    </motion.div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <Link href={link} className='text-base-300 text-xl font-bold'>{name}</Link>
                <div className='flex justify-between w-full items-center ltr gap-2'>
                    <div className='flex gap-2 items-center justify-end w-full'>
                        {productIsAvailable ?
                            <>
                                <p className='font-bold text-xl gap-2'>
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
                            </>
                            :
                            <p className='font-bold text-xl gap-2'>
                                ناموجود
                            </p>
                        }
                    </div>
                    {offerPresent !== 0 ?
                        <div className='bg-red-500 text-white rounded-full px-2 h-[20px] flex items-center text-xs'>
                            {offerPresent}%
                        </div>
                        :
                        (score &&
                            <div className='flex items-center justify-center gap-1'>
                                <FaStar className='text-[#FFC436]' />
                                <p className='text-gray-600 text-base'>{score.toFixed(1)}</p>
                            </div>
                        )
                    }
                </div>
                <div className='flex justify-between items-center ltr'>
                    {offerPresent !== 0 &&
                        <>
                            <p className='line-through text-gray-400 text-base'>{formatNumber(price)}</p>
                            {score &&
                                <div className='flex items-center justify-center gap-1'>
                                    <FaStar className='text-[#FFC436]' />
                                    <p className='text-gray-600 text-base'>{score.toFixed(1)}</p>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard