'use client'
import { getCartFromServer } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { getMe, getTokenFromCookie } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import { cart } from '@/public/types/productType'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ClientProvider = ({ children, token, me }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (token.accessToken) {
            dispatch(getTokenFromCookie(token))
            dispatch(getMe(me))
            dispatch(getCartFromServer(token.accessToken.value))
        } else {
            dispatch(getCartFromLocalStorage())
        }
    }, [])

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientProvider