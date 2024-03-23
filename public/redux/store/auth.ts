import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type state = {
    loading: boolean
    userInfo: any
    userToken: string | null,
    success: boolean
}

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    // extraReducers: {},
})
export default authSlice.reducer
export const { } =
    authSlice.actions;
