import { createAsyncThunk } from '@reduxjs/toolkit'

type parLogin = {
    phone_number: string
    code: string
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ phone_number, code }: parLogin, { rejectWithValue }) => {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone_number, code })
        }
        const data = await fetch(`/api/core-api/auth/login/`, config)
        return data.json()
    }
)
export const getMeThunk = createAsyncThunk(
    'auth/getMeThunk',
    async (token: string) => {
        const config = {
            method: "GET",
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        const data = await fetch(`/api/core-api/user/customers/me/`, config)
        return data.json()
    }
)