import { cartItem } from 'public/types/productType';
import { createAsyncThunk } from '@reduxjs/toolkit'

type mekeParam = {
    token: string
    variant: number
    quantity: number
}

type deleteCartItemParam = {
    token: string
    cartItemID: number
}

export const makeCartItem = createAsyncThunk(
    'cart/makeCartItem',
    async ({ token, variant, quantity }: mekeParam) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${token}`
            },
            body: JSON.stringify({ variant, quantity })
        }
        const data = await fetch(`/api/transaction-api/cart-item`, config)
        return data.json()
    }
)
export const getCartFromServer = createAsyncThunk(
    'cart/getCartFromServer',
    async (token: string) => {
        const config = {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        const data = await fetch(`/api/transaction-api/cart/`, config)
        return data.json()
    }
)
export const deleteCartItem = createAsyncThunk(
    'cart/deleteCartItem',
    async ({ token, cartItemID }: deleteCartItemParam) => {
        const config = {
            method: "DELETE",
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        const data = await fetch(`/api/transaction-api/cart-item/${cartItemID}`, config)
        return data.json()
    }
)