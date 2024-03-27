import { shopCartItem } from '@/public/types/productType';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: shopCartItem[] = []

const slice = createSlice({
    name: 'cart',
    initialState: { cart: initialState },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity++;
                }
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            localStorage.setItem('shoping_cart', JSON.stringify(state.cart.map(item => item)))
        },
        removeFromCart: (state, action) => {
            const cartWithoutItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = cartWithoutItem;
            localStorage.setItem('shoping_cart', JSON.stringify(state.cart.map(item => item)))
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item!.quantity++;
            localStorage.setItem('shoping_cart', JSON.stringify(state.cart.map(item => item)))
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item!.quantity === 1) {
                item!.quantity = 1
            } else {
                item!.quantity--;
            }
            localStorage.setItem('shoping_cart', JSON.stringify(state.cart.map(item => item)))
        },
        deleteAllItems: (state) => {
            state.cart = []
            localStorage.removeItem('shoping_cart')
        },
        getCartFromLocalStorage: (state) => {
            const localItems: shopCartItem[] = typeof window !== 'undefined' && (localStorage?.getItem("shoping_cart") ? JSON.parse(localStorage?.getItem("shoping_cart")!) : [])
            state.cart = localItems
        }
    }
})
export default slice.reducer
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, deleteAllItems, getCartFromLocalStorage } =
    slice.actions;
