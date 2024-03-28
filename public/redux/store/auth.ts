import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { boolean } from "yup";
import { loginUser } from "../actions/authActions";

export type authState = {
    isLoad: boolean
    userInfo: any
    userToken: {
        access: string | null
        refresh: string | null
    },
    isLogedIn: boolean,
    error: string | null
}

const initialState: authState = {
    isLoad: false,
    userInfo: {},
    userToken: {
        access: null,
        refresh: null
    },
    isLogedIn: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getTokenFromCookie: (state, action) => {
            if (action.payload.accessToken) {
                state.userToken.access = action.payload.accessToken.value
                state.userToken.refresh = action.payload.refreshToken.value
                state.isLogedIn = true
                state.error = null
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (!action.payload.error) {
                state.error = null
                state.userToken.access = action.payload.access
                state.userToken.refresh = action.payload.refresh
                state.isLogedIn = true
                console.log(state.error)
            } else {
                state.isLogedIn = false
                state.error = action.payload.error
                console.log(state.error)
            }
            state.isLoad = false
            console.log('fulfilled')
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isLogedIn = false
            state.isLoad = false
            console.log('rejected')
        })
        builder.addCase(loginUser.pending, (state) => {
            state.isLogedIn = false
            state.error = null
            state.isLoad = true
            console.log('pending')
        })
    }
})
export default authSlice.reducer
export const { getTokenFromCookie } =
    authSlice.actions;
