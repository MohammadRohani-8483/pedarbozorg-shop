'use client'
import React from 'react'
import Image from 'next/image'
import formatNumber from 'public/Functions/formatNumber'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, removeFromCart, decrementQuantity, setCartToLocalStorage } from '@/public/redux/store/cart';
import { cart, cartItem } from '@/public/types/productType'
import { deleteCartItem, getCartFromServer, makeCartItem } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { authState } from '@/public/redux/store/auth'

type props = {
    image: string
    link: string
    name: string
    price: number
    priceWithOffer: number
    count: number
    product: cartItem
}

const ShopingCardItem = ({ image, link, price, priceWithOffer, name, count, product }: props) => {
    const offerPresent = (price - priceWithOffer) / price * 100
    const present = price * offerPresent / 100

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const auth = useSelector((state: { auth: authState }) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    const productInCart = cart.find((item) => item.variant.id === product.variant.id)
    const productIdForDelete: number | null = productInCart?.id || null

    const handleIncrementQuantity = () => {
        if (auth.isLogedIn) {
            dispatch(makeCartItem({ quantity: 1, token: auth.userToken.access!, variant: product.variant.id }))
            dispatch(incrementQuantity(product))
        } else {
            dispatch(incrementQuantity(product))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleDecrementQuantity = () => {
        if (auth.isLogedIn) {
            dispatch(makeCartItem({ quantity: -1, token: auth.userToken.access!, variant: product.variant.id }))
            dispatch(decrementQuantity(product))
        } else {
            dispatch(decrementQuantity(product))
            dispatch(setCartToLocalStorage())
        }
    }

    const handleDeleteFromCart = () => {
        if (auth.isLogedIn) {
            dispatch(deleteCartItem({ cartItemID: productIdForDelete!, token: auth.userToken.access! }))
            dispatch(removeFromCart(product))
        } else {
            dispatch(removeFromCart(product))
            if (cart?.length === 0) {
                localStorage.removeItem('shoping_cart')
            } else {
                dispatch(setCartToLocalStorage())
            }
        }
    }

    return (
        <div className='flex justify-between h-[131px] w-full items-center'>
            <Link href={link} className='flex gap-2 justify-center items-center'>
                <Image
                    src={image}
                    alt={name}
                    width={133}
                    height={131}
                />
                <div className='flex flex-col gap-2 items-start justify-center'>
                    <h2 className='text-neutral-800 text-xl font-bold'>
                        {name}
                    </h2>
                    <div className='flex items-center justify-start gap-2'>
                    </div>
                </div>
            </Link>
            <div className='flex justify-center items-center gap-2'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    {offerPresent !== 0 && <div className='text-error-base text-sm font-bold flex justify-center items-center gap-1'>
                        <p>{formatNumber(present * count)}</p>
                        <Image
                            src='/Image/red-Tooman.svg'
                            alt='تومان'
                            width={22}
                            height={15}
                        />
                        <p>تخفیف</p>
                    </div>}
                    <div className='text-neutral-800 w-full ml-4 text-xl font-bold flex gap-2 justify-center items-center'>
                        <h2>{formatNumber((price - present) * count)}</h2>
                        <Image
                            src='/Image/Tooman.svg'
                            alt='تومان'
                            width={24}
                            height={16}
                        />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <h2 className='text-neutral-800 text-xl font-bold'>
                        {count}
                    </h2>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div
                            onClick={handleIncrementQuantity}
                            className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                        >
                            <Image
                                src='/iconSax/add.svg'
                                alt='add product count'
                                width={20}
                                height={20}
                            />
                        </div>
                        <>
                            {count > 1 ?
                                <div
                                    onClick={handleDecrementQuantity}
                                    className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
                                    <Image
                                        src='/iconSax/minus.svg'
                                        alt='minus product count'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                :
                                <div
                                    onClick={handleDeleteFromCart}
                                    className='bg-secondry-tint-7 size-8 hover:bg-secondry-tint-6 rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                                >
                                    <Image
                                        src='/iconSax/trash.svg'
                                        alt='delete product'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopingCardItem