import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './store/cart'
import authSlice from './store/auth'

export const store = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            auth: authSlice
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']