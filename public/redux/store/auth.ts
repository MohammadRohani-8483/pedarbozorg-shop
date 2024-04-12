import { logoutUser, patchMe } from './../actions/authActions';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMeThunk, loginUser } from "../actions/authActions";
import { userInfo } from '@/public/types/auth';

export type authState = {
    isLoad: boolean
    userInfo: userInfo
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
        },
        getMe: (state, action) => {
            if (action.payload.code !== "token_not_valid") {
                state.userInfo = action.payload[0]
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (!action.payload.error) {
                state.userToken.access = action.payload.access
                state.userToken.refresh = action.payload.refresh
            } else {
                state.error = action.payload.error
                state.isLoad = false
            }
            console.log('login fulfilled')
        })
        builder.addCase(loginUser.pending, (state) => {
            state.error = null
            state.isLoad = true
            console.log('login pending')
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isLoad = false
            console.log('login rejected')
        })
        builder.addCase(getMeThunk.fulfilled, (state, action) => {
            if (action.payload.code !== "token_not_valid") {
                state.userInfo = action.payload[0]
                state.isLogedIn = true
            } else {
                state.isLogedIn = false
                state.userInfo = {}
            }
            console.log('me fulfilled')
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            console.log('logout fulfilled')
            console.log(action)
            return initialState
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            console.log('logout rejected')
            console.log(action)
        })
        builder.addCase(patchMe.fulfilled, (state, action) => {
            console.log('patchMe fulfilled')
            state.userInfo = action.payload.data
        })
    }
})
export default authSlice.reducer
export const { getTokenFromCookie, getMe } =
    authSlice.actions;
