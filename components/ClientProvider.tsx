'use client'
import { loginUser } from '@/public/redux/actions/authActions'
import { AppDispatch } from '@/public/redux/store'
import { getTokenFromLocalStorage } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ClientProvider = ({ children }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getCartFromLocalStorage())
    }, [])

    useEffect(() => {
        // dispatch(loginUser({ phone_number: "09330146331", code: "12345" }))
        dispatch(getTokenFromLocalStorage())
    }, [])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientProvider