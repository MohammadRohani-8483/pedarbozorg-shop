'use client'
import { AppDispatch } from '@/public/redux/store'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const ClientProvider = ({ children }: any) => {

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getCartFromLocalStorage())
        console.log('first')
    }, [])

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ClientProvider