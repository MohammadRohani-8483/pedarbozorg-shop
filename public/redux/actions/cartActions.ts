import axios from 'axios';
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
type deleteCartParam = {
    token: string
    cartID: string
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
export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async ({ token, cartID }: deleteCartParam) => {
        const config = {
            method: "DELETE",
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        const data = await fetch(`/api/transaction-api/cart/${cartID}/`, config)
        return data.json()
    }
)
export const makeCartFromLocalStorage = createAsyncThunk(
    'cart/makeCartFromLocalStorage',
    async (token: string) => {
        const localItem: cartItem[] = typeof window !== 'undefined' && (localStorage?.getItem("shoping_cart") ? JSON.parse(localStorage?.getItem("shoping_cart")!) : [])
        const body = localItem.map(item => ({ variant: item.variant.id, quantity: item.quantity! }))
        console.log(JSON.stringify({ cart_items: body }))
        const config = {
            method: "POST",
            headers: {
                Authorization: `JWT ${token}`
            },
            body: JSON.stringify({ cart_items: body })
        }
        // const data = await fetch(`/api/transaction-api/cart-item/multi_cart_item/`, config)
        const data = await axios.post(`/api/transaction-api/cart-item/multi_cart_item/`, { cart_items: body }, {
            headers: {
                Authorization: `JWT ${token}`
            },
        })
        return data
    }
)
export const makeMultiCartItems = createAsyncThunk(
    'cart/makeMultiCartItems',
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