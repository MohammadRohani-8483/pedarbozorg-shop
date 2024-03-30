'use client'
import { loginUser } from '@/public/redux/actions/authActions'
import { getCartFromServer, makeCartItem } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { getMe, getTokenFromCookie } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import { cart } from '@/public/types/productType'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ClientProvider = ({ children, token, me }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (token) {
            dispatch(getTokenFromCookie(token))
            dispatch(getMe(me))
            dispatch(getCartFromServer(token.accessToken.value))
        } else {
            dispatch(getCartFromLocalStorage())
        }
        // dispatch(makeCartItem({ token: token.accessToken?.value, quantity: 1, variant: 37192 }))
    }, [])

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientProvider