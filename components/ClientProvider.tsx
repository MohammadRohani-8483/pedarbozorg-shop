'use client'
import { getMeThunk } from '@/public/redux/actions/authActions'
import { getCartFromServer } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { getTokenFromCookie } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ClientProvider = ({ children, token }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        if (token.accessToken) {
            dispatch(getTokenFromCookie(token))
            dispatch(getMeThunk(token.accessToken.value))
            dispatch(getCartFromServer(token.accessToken.value))
        } else {
            dispatch(getCartFromLocalStorage())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <ProgressBar
                height="3px"
                color="#3D8361"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </React.Fragment>
    )
}

export default ClientProvider