'use client'
import Icon from '@/components/Icon'
import formatNumber from '@/public/Functions/formatNumber'
import { deleteCartItem, getCartFromServer, makeCartItem } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { authState } from '@/public/redux/store/auth'
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart, setCartToLocalStorage } from '@/public/redux/store/cart'
import { cart, cartItem } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonAddToCart from './SkeletonAddToCart'

const AddToCartItem = ({ product, price, priceWithOffer, name, image, variant }: any) => {
    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])


    const offerPresent = (price - priceWithOffer) / price * 100

    const cartItem: cartItem = {
        variant: {
            id: variant.id,
            image: variant.image,
            name: variant.shatoot_info.good_name,
            product: {
                id: product.id,
                featured_image: product.featured_image,
                name: product.name,
                slug: product.slug,
            },
            shatoot_info: {
                sell_price: variant.shatoot_info.sell_price,
                final_price: variant.shatoot_info.final_price,
                discount: variant.shatoot_info.discount,
            }
        }
    }

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const { isLogedIn, userToken } = useSelector((state: { auth: authState }) => state.auth)

    const productInCart = cart.find((item) => item.variant.id === cartItem.variant.id);
    const productIdForDelete: number | null = productInCart?.id || null

    const isProductToCart = Boolean(productInCart)

    const dispatch = useDispatch<AppDispatch>()

    const handleAddToCart = async () => {
        if (isLogedIn) {
            await dispatch(makeCartItem({ quantity: 1, token: userToken.access!, variant: cartItem.variant.id }))
            dispatch(getCartFromServer(userToken.access!))
        } else {
            dispatch(addToCart(cartItem))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleIncrementQuantity = async () => {
        if (isLogedIn) {
            await dispatch(makeCartItem({ quantity: 1, token: userToken.access!, variant: cartItem.variant.id }))
            dispatch(getCartFromServer(userToken.access!))
        } else {
            dispatch(incrementQuantity(cartItem))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleDecrementQuantity = () => {
        if (isLogedIn) {
            dispatch(makeCartItem({ quantity: -1, token: userToken.access!, variant: product.variant.id }))
            dispatch(decrementQuantity(product))
        } else {
            dispatch(decrementQuantity(product))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleDeleteFromCart = async () => {
        if (isLogedIn) {
            await dispatch(deleteCartItem({ cartItemID: productIdForDelete!, token: userToken.access! }))
            dispatch(getCartFromServer(userToken.access!))
        } else {
            dispatch(removeFromCart(cartItem))
            dispatch(setCartToLocalStorage())
        }
    }

    return (
        <>
            {start ?
                <div className='h-[65px] w-full flex justify-between items-center gap-2'>
                    <div className='h-full flex justify-center items-center gap-2'>
                        <Image
                            src={image}
                            alt={name}
                            width={65}
                            height={65}
                            className='rounded-md'
                        />
                        <h3 className='text-secondry-base font-bold'>
                            {name}
                        </h3>
                    </div>
                    <div className='gap-2 flex justify-center items-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className='text-xl text-secondry-base font-bold'>
                                {formatNumber(priceWithOffer)}
                            </h2>
                            {price !== priceWithOffer &&
                                <div className='h-5 gap-2 flex justify-center items-center'>
                                    <div className='h-full flex justify-center items-center px-2 rounded-full bg-error-base text-xs text-white'>
                                        {offerPresent}%
                                    </div>
                                    <h3 className='text-neutral-500 text-sm line-through'>
                                        {formatNumber(price)}
                                    </h3>
                                </div>
                            }
                        </div>
                        {!isProductToCart ?
                            <button
                                onClick={handleAddToCart}
                                className='solid-btn square-btn p-4 w-10 h-10 flex justify-center items-center'
                            >
                                <Icon size={24} nameIcon="add-to-cart" />
                            </button>
                            :
                            <div className='flex flex-col gap-1'>
                                <button
                                    onClick={handleIncrementQuantity}
                                    className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                                >
                                    <Icon size={20} nameIcon="add" />
                                </button>
                                <>
                                    {productInCart?.quantity! > 1 ?
                                        <button
                                            onClick={handleDecrementQuantity}
                                            className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                                        >
                                            <Icon size={20} nameIcon="minus" />
                                        </button>
                                        :
                                        <button
                                            onClick={handleDeleteFromCart}
                                            className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                                        >
                                            <Icon size={20} nameIcon="trash" />
                                        </button>
                                    }
                                </>
                            </div>
                        }
                    </div>
                </div>
                :
                <SkeletonAddToCart />
            }
        </>
    )
}

export default AddToCartItem