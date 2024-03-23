'use client'
import formatNumber from '@/public/Functions/formatNumber'
import { decrementQuantity, incrementQuantity, removeFromCart } from '@/public/redux/store/cart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

type props = {
    image: string
    link: string
    name: string
    price: number
    priceWithOffer: number
    count: number
    product: any
}

const noImage = '/Image/offer-products/ard-nokhodchi.png'

const CheckoutCartItem = ({ image, link, price, priceWithOffer, name, count, product }: props) => {
    const offerPresent = (price - priceWithOffer) / price * 100
    const present = price * offerPresent / 100

    const cart = useSelector((state: any) => state.cart.cart)
    const dispatch = useDispatch()

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(product))
    }

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(product))
    }

    const handleDeleteFromCart = () => {
        if (cart?.length > 1) {
            dispatch(removeFromCart(product))
        } else {
            dispatch(removeFromCart(product))
            localStorage.removeItem('shoping_cart')
        }
    }


    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center h-[92px] md:h-[131px] gap-2 md:gap-12">
            <Link href={link || "/"} className='flex justify-between items-center w-full h-full'>
                <div className='flex gap-2 md:gap-12 justify-center items-center w-auto h-full'>
                    <div className='relative w-12 md:w-[131px] h-full aspect-square'>
                        <Image
                            src={image || noImage}
                            alt={name || "محصول"}
                            fill
                            className='object-cover'
                        />
                    </div>
                    <h2 className='text-base md:text-xl font-bold'>
                        {name || 'محصول'}
                    </h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    {offerPresent !== 0 &&
                        <div className='text-[#C62020] text-xs md:text-sm font-bold flex justify-center items-center gap-1'>
                            <p>{formatNumber(present * count || 0)}</p>
                            <Image
                                src='/Image/red-Tooman.svg'
                                alt='تومان'
                                width={22}
                                height={15}
                            />
                            <p>تخفیف</p>
                        </div>
                    }
                    <div className='text-[#353535] text-base text-xl font-bold flex gap-2 justify-center items-center'>
                        <h2>{formatNumber((price - present) * count || 0)}</h2>
                        <Image
                            src='/Image/Tooman.svg'
                            alt='تومان'
                            width={24}
                            height={16}
                        />
                    </div>
                </div>
            </Link>
            <div className='flex md:grid md:grid-cols-2 md:grid-row-1 gap-4 md:gap-2 justify-center items-center text-xl font-bold pl-2'>
                <div
                    onClick={handleIncrementQuantity}
                    className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer col-start-2'
                >
                    <Image
                        src='/iconSax/add.svg'
                        alt='add product count'
                        width={20}
                        height={20}
                    />
                </div>
                <h3 className='row-start-1 row-end-3'>
                    {count || 1}
                </h3>
                <>
                    {(count || 1) > 1 ?
                        <div
                            onClick={handleDecrementQuantity}
                            className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
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
                            className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
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
    )
}

export default CheckoutCartItem