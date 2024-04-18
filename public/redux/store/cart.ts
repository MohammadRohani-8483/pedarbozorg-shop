import { makeCartItem, getCartFromServer, deleteCart, makeCartFromLocalStorage } from './../actions/cartActions';
import { cart, cartItem } from '@/public/types/productType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: cart = { cartItems: [], successRedux: false }

const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload,
                quantity: 1,
            });
        },
        removeFromCart: (state, action) => {
            const cartWithoutItem = state.cartItems.filter(item => item.variant.id !== action.payload.variant.id);
            state.cartItems = cartWithoutItem;
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems?.find((item) => item.variant.id === action.payload.variant.id);
            item!.quantity!++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems?.find((item) => item.variant.id === action.payload.variant.id);
            if (item!.quantity === 1) {
                item!.quantity = 1
            } else {
                item!.quantity!--;
            }
        },
        deleteAllItems: (state) => {
            state.cartItems = []
            localStorage.removeItem('shoping_cart')
        },
        getCartFromLocalStorage: (state) => {
            const localItems: cartItem[] = typeof window !== 'undefined' && (localStorage?.getItem("shoping_cart") ? JSON.parse(localStorage?.getItem("shoping_cart")!) : [])
            state.cartItems = localItems
            state.successRedux = true
        },
        setCartToLocalStorage: (state) => localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
    },
    extraReducers: builder => {
        builder.addCase(makeCartItem.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getCartFromServer.fulfilled, (state, action) => {
            if (action.payload.results[0]) {
                state.cartItems = action.payload.results[0].cart_items
                state.id = action.payload.results[0].id
                state.totalFinallPrice = action.payload.results[0].total_final_price
                state.totalSellPrice = action.payload.results[0].total_sell_price
                state.yourProfitPercent = action.payload.results[0].your_profit_percent
                state.yourProfitAmount = action.payload.results[0].your_profit_amount
                state.successRedux = true
            }
        })
        builder.addCase(deleteCart.fulfilled, () => {
            return initialState
        })
        builder.addCase(deleteCart.rejected, () => {
            return initialState
        })
        builder.addCase(makeCartFromLocalStorage.fulfilled, () => {
            console.log("multi cart item fulfilled")
        })
        builder.addCase(makeCartFromLocalStorage.rejected, () => {
            console.log("multi cart item rejected")
        })
    }
})
export default slice.reducer
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, deleteAllItems, getCartFromLocalStorage, setCartToLocalStorage } =
    slice.actions;