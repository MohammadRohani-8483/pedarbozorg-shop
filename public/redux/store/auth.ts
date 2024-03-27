import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authActions";

type state = {
    userInfo: any
    userToken: {
        access: string | null
        refresh: string | null
    },
    isLogedIn: boolean
}

const initialState: state = {
    userInfo: {},
    userToken: {
        access: null,
        refresh: null
    },
    isLogedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getTokenFromLocalStorage: (state) => {
            const localToken = typeof window !== 'undefined' && (localStorage?.getItem("user_token") ? JSON.parse(localStorage?.getItem("user_token")!) : {
                access: null,
                refresh: null
            })
            state.userToken = localToken
            state.userToken.access ? state.isLogedIn = true : state.isLogedIn = false
            console.log(state.userToken)
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (!action.payload.error) {
                state.userToken.access = action.payload.access
                state.userToken.refresh = action.payload.refresh
                state.isLogedIn = true
                localStorage.setItem('user_token', JSON.stringify(state.userToken))
            }
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.isLogedIn = false
        })
    }
})
export default authSlice.reducer
export const { getTokenFromLocalStorage } =
    authSlice.actions;
