import { deleteAllItems, removeFromCart } from '@/public/redux/store/cart'
import { cart } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from 'components/Alert'
import CheckoutCartItem from './CheckoutCartItem'
import { authState } from '@/public/redux/store/auth'
import { deleteCart, getCartFromServer } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'

const CheckoutItems = () => {
    const [isDeleting, setIsDeleting] = useState(false)
    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const cartID = useSelector((state: { cart: cart }) => state.cart.id)
    const auth = useSelector((state: { auth: authState }) => state.auth)

    const dispatch = useDispatch<AppDispatch>()

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    const handleDeleteAllCart = async () => {
        if (auth.isLogedIn) {
            await dispatch(deleteCart({ token: auth.userToken.access!, cartID: cartID! }))
            dispatch(getCartFromServer(auth.userToken.access!))
        } else {
            dispatch(deleteAllItems())
            localStorage.removeItem('shoping_cart')
        }
        window.scrollTo(0, 0)
    }

    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full gap-4'>
            <h3 className='font-medium text-secondry-base text-sm'>{cart?.length} کالا</h3>
            <div className='w-full h-[1px] bg-gray-200' />
            {cart.map((cartItem, i, array) => {
                return (
                    <React.Fragment
                        key={cartItem?.id}
                    >
                        <CheckoutCartItem
                            price={cartItem?.variant?.shatoot_info.final_price}
                            priceWithOffer={cartItem?.variant?.shatoot_info.sell_price}
                            image={cartItem?.variant?.image || cartItem.variant.product.featured_image}
                            link={cartItem?.variant?.product.slug}
                            name={cartItem?.variant.name}
                            count={cartItem?.quantity!}
                            product={cartItem}
                        />
                        {i < array.length - 1 && <div className='w-full h-[1px] bg-gray-200' />}
                    </React.Fragment>
                )
            })}
            <div className='w-full h-[1px] bg-gray-200' />
            <div className='flex w-full justify-end items-center'>
                <button
                    onClick={() => setIsDeleting(true)}
                    className='flex justify-center items-center text-error-base text-sm gap-2 py-1.5 px-3 font-medium'
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
            {isDeleting &&
                <Alert
                    title='حذف همه محصولات از سبد خرید'
                    setIsAlertOpen={setIsDeleting} redBtn
                    textBtn='حذف همه'
                    confirmFunc={handleDeleteAllCart}
                    messageToast='سبد خرید با موفقیت پاک شد'
                >
                    <p className='text-neutral-800 w-full text-right'>
                        آیا از حذف همه محصولات از سبد خرید خود اطمینان دارید؟
                    </p>
                </Alert>
            }
        </div >
    )
}

export default CheckoutItems