'use client'
import formatNumber from '@/public/Functions/formatNumber'
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '@/public/redux/store/cart'
import { cart, cartItem, shopCartItem } from '@/public/types/productType'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddToCartItem = ({ product, price, priceWithOffer, name, image, slug, variant }: any) => {
    const offerPresent = (price - priceWithOffer) / price * 100

    const cartItem: cartItem = {
        variant: {
            id: variant.id,
            image: variant.image,
            name: variant.shatoot_info.good_name,
            product: {
                id: product.id,
                image: product.featured_image,
                name: product.name,
                slug: product.slug,
            },
            shatootInfo: {
                sellPrice: variant.shatoot_info.sell_price,
                finalPrice: variant.shatoot_info.final_price,
                discount: variant.shatoot_info.discount,
            }
        }
    }

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const productInCart = cart.find((item) => item.id === cartItem.id);

    const isProductToCart = Boolean(productInCart)

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(cartItem))
    }

    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity(cartItem))
    }

    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity(cartItem))
    }

    const handleDeleteFromCart = () => {
        if (cart?.length > 1) {
            dispatch(removeFromCart(cartItem))
        } else {
            dispatch(removeFromCart(cartItem))
            localStorage.removeItem('shoping_cart')
        }
    }

    return (
        <div className='h-[65px] w-full flex justify-between items-center gap-2'>
            <div className='h-full flex justify-center items-center gap-2'>
                <Image
                    src={image}
                    alt={name}
                    width={65}
                    height={65}
                    className='rounded-md'
                />
                <h3 className='text-base-300 font-bold'>
                    {name}
                </h3>
            </div>
            <div className='gap-2 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-xl text-base-300 font-bold'>
                        {formatNumber(priceWithOffer)}
                    </h2>
                    {price !== priceWithOffer &&
                        <div className='h-5 gap-2 flex justify-center items-center'>
                            <div className='h-full flex justify-center items-center px-2 rounded-full bg-[#C62020] text-xs text-white'>
                                {offerPresent}%
                            </div>
                            <h3 className='text-[#ADADAD] text-sm line-through'>
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
                        <Image
                            src="/iconSax/add-to-cart.svg"
                            alt='Add To Cart'
                            width={24}
                            height={24}
                            className='rounded-md'
                        />
                    </button>
                    :
                    <div className='flex flex-col gap-1'>
                        <button
                            onClick={handleIncrementQuantity}
                            className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                        >
                            <Image
                                src='/iconSax/add.svg'
                                alt='add product count'
                                width={20}
                                height={20}
                            />
                        </button>
                        <>
                            {productInCart?.quantity! > 1 ?
                                <button
                                    onClick={handleDecrementQuantity}
                                    className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
                                    <Image
                                        src='/iconSax/minus.svg'
                                        alt='minus product count'
                                        width={20}
                                        height={20}
                                    />
                                </button>
                                :
                                <button
                                    onClick={handleDeleteFromCart}
                                    className='bg-[#E0F1E9] size-8 hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'
                                >
                                    <Image
                                        src='/iconSax/trash.svg'
                                        alt='delete product'
                                        width={20}
                                        height={20}
                                    />
                                </button>
                            }
                        </>
                    </div>
                }
            </div>
        </div>
    )
}

export default AddToCartItem