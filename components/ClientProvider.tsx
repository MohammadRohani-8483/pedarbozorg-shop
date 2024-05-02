'use client'
import { getMeThunk } from '@/public/redux/actions/authActions'
import { getCartFromServer } from '@/public/redux/actions/cartActions'
import { AppDispatch } from '@/public/redux/store'
import { getTokenFromCookie, successRedux } from '@/public/redux/store/auth'
import { getCartFromLocalStorage } from '@/public/redux/store/cart'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ClientProvider = ({ children, token }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        const fillRedux = async () => {
            if (token.accessToken) {
                dispatch(getTokenFromCookie(token))
                await dispatch(getMeThunk(token.accessToken.value))
                await dispatch(getCartFromServer(token.accessToken.value))
            } else if (!token.accessToken && token.refreshToken) {
                console.log("not access")
                console.log(token.accessToken)
            }
            else {
                dispatch(getCartFromLocalStorage())
            }
            dispatch(successRedux())
        }
        fillRedux()
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