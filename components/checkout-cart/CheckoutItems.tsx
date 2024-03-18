import { deleteAllItems, removeFromCart } from '@/public/redux/store/cart'
import { shopCartItem } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutCartItem from './CheckoutCartItem'

const CheckoutItems = () => {
    // const [cart, setCart] = useState<shopCartItem[]>(useSelector((state: any) => state.cart.cart))
    const cart: shopCartItem[] = useSelector((state: any) => state.cart.cart)

    const dispatch = useDispatch()

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    const handleDeleteFromCart = () => {
        dispatch(deleteAllItems())
        localStorage.removeItem('shoping_cart')
        window.scrollTo(0, 0)
    }

    return (
        <div className='flex flex-col bg-white rounded-3xl p-4 items-center justify-center w-full gap-4'>
            <h3 className='font-medium text-base-300 text-sm'>{cart?.length} کالا</h3>
            <div className='w-full h-[1px] bg-gray-200' />
            {cart.map((cartItem, i, array) => {
                return (
                    <React.Fragment
                        key={cartItem?.id}
                    >
                        <CheckoutCartItem
                            price={cartItem?.shatootInfo.finalPrice}
                            priceWithOffer={cartItem?.shatootInfo.finalPrice}
                            image={cartItem?.product.featuredImage}
                            link={cartItem?.product.slug}
                            name={cartItem?.product.name}
                            count={cartItem?.quantity}
                            product={cartItem}
                        />
                        {i < array.length - 1 && <div className='w-full h-[1px] bg-gray-200' />}
                    </React.Fragment>
                )
            })}
            <div className='w-full h-[1px] bg-gray-200' />
            <div className='flex w-full justify-end items-center'>
                <button
                    onClick={handleDeleteFromCart}
                    className='flex justify-center items-center text-[#C62020] text-sm gap-2 py-1.5 px-3 font-medium'
                >
                    <Image
                        src='/iconSax/red-trash.svg'
                        alt='trash'
                        width={20}
                        height={20}
                    />
                    حذف همه کالا ها از سبد
                </button>
            </div>
        </div>
    )
}

export default CheckoutItems