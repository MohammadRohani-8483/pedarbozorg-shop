'use client'
import { useState } from 'react';
import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/image';
import { FaStar } from "@/node_modules/react-icons/fa/index";
import tooman from "@/public/Image/tooman.svg";
import formatNumber from '@/public/Functions/formatNumber';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, setCartToLocalStorage } from '@/public/redux/store/cart';
import toast from 'react-hot-toast';
import { cart, cartItem } from '@/public/types/productType';
import { deleteCartItem, getCartFromServer, makeCartItem } from '@/public/redux/actions/cartActions';
import { AppDispatch } from '@/public/redux/store';
import { authState } from '@/public/redux/store/auth';

const ProductCardInSlider = ({ price, link, image, name, priceWithOffer, score, product }: any) => {
    const offerPresent = ((price - priceWithOffer) / price * 100) || 0

    const productIsAvailable = price || product?.is_available

    const [isLike, setIsLike] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const auth = useSelector((state: { auth: authState }) => state.auth)

    const cartItem: cartItem = {
        variant: {
            id: product.cheapest_variant_id,
            image: product.featured_image,
            name: product.name,
            product: {
                id: product.id,
                featured_image: product.featured_image,
                name: product.name,
                slug: product.slug
            },
            shatoot_info: {
                discount: product.min_price - product.min_sell_price,
                final_price: product.min_price,
                sell_price: product.min_sell_price
            }
        }
    }

    const productInCart = cart.find((item) => item.variant.id === cartItem.variant.id)
    const isProductToCart = Boolean(productInCart)
    const productIdForDelete: number | null = productInCart?.id || null

    const dispatch = useDispatch<AppDispatch>()
    const handleAddToCart = async () => {
        if (auth.isLogedIn) {
            await dispatch(makeCartItem({ quantity: 1, token: auth.userToken.access!, variant: cartItem.variant.id }))
            dispatch(getCartFromServer(auth.userToken.access!))
        } else {
            dispatch(addToCart(cartItem))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleDeleteFromCart = async () => {
        if (auth.isLogedIn) {
            await dispatch(deleteCartItem({ cartItemID: productIdForDelete!, token: auth.userToken.access! }))
            dispatch(getCartFromServer(auth.userToken.access!))
        } else {
            dispatch(removeFromCart(cartItem))
            dispatch(setCartToLocalStorage())
        }
    }

    const toastify = (msg: string) => {
        toast.error(msg)
    }

    return (
        <motion.div
            whileHover={{ boxShadow: "0px 0px 18.6px 0px rgba(61, 131, 97, 0.22)" }}
            className='w-full bg-white gap-3.5 justify-between items-center rounded-2xl p-4 flex flex-col h-72 gap-2'
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
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
                    {/* mobile mode */}
                    <div className='sm:hidden'>
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
                    </div>
                    <div className='sm:hidden'>
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
                    </div>
                    {/* desktop mode */}
                    <motion.div
                        animate={isHover ? { x: 0 } : { x: '30px' }}
                        transition={{ duration: 0.3 }}
                        className='hidden sm:block'
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
                        className='hidden sm:block'
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

export default ProductCardInSlider