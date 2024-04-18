import { logoutUser, patchMe } from './../actions/authActions';
import { createSlice } from "@reduxjs/toolkit";
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
    success: boolean
}

const initialState: authState = {
    isLoad: false,
    userInfo: {},
    userToken: {
        access: null,
        refresh: null
    },
    isLogedIn: false,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getTokenFromCookie: (state, action) => {
            if (action.payload.accessToken) {
                state.userToken.access = action.payload.accessToken.value
                state.userToken.refresh = action.payload.refreshToken.value
                // state.isLogedIn = true
                state.error = null
            }
        },
        successRedux: (state) => {
            state.success = true
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
                state.isLogedIn = true
                state.userInfo = action.payload[0]
            }
            console.log('me fulfilled')
        })
        builder.addCase(logoutUser.fulfilled, () => {
            console.log('logout fulfilled')
            return initialState
        })
        builder.addCase(logoutUser.rejected, (action) => {
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
export const { getTokenFromCookie, successRedux } =
    authSlice.actions;
