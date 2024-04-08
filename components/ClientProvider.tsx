'use client'
import { getMeThunk } from '@/public/redux/actions/authActions'
import { getCartFromServer, makeCartFromLocalStorage, makeCartItem } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { authState, getMe, getTokenFromCookie } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import { cart, cartItem } from '@/public/types/productType'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ClientProvider = ({ children, token }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const authState: authState = useSelector((state: any) => state.auth)
    useEffect(() => {
        if (token.accessToken) {
            dispatch(getTokenFromCookie(token))
            dispatch(getMeThunk(token.accessToken.value))
            dispatch(getCartFromServer(token.accessToken.value))
        } else {
            dispatch(getCartFromLocalStorage())
        }
        // dispatch(makeCartFromLocalStorage(token.accessToken.value))
        // localItem.forEach(item => {
        //     dispatch(makeCartItem({ token: token.accessToken.value, variant: item.variant.id, quantity: item.quantity! }))
        // })
    }, [])

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientProvider