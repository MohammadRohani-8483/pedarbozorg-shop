import { makeCartItem, getCartFromServer } from './../actions/cartActions';
import { cart, cartItem } from '@/public/types/productType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: cart = { cartItems: [] }

const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload,
                quantity: 1,
            });
            console.log(state.cartItems)
            localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const cartWithoutItem = state.cartItems?.filter((item) => item.id !== action.payload.id);
            state.cartItems = cartWithoutItem;
            localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems?.find((item) => item.id === action.payload.id);
            item!.quantity!++;
            localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems?.find((item) => item.id === action.payload.id);
            if (item!.quantity === 1) {
                item!.quantity = 1
            } else {
                item!.quantity!--;
            }
            localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
        },
        deleteAllItems: (state) => {
            state.cartItems = []
            localStorage.removeItem('shoping_cart')
        },
        getCartFromLocalStorage: (state) => {
            const localItems: cartItem[] = typeof window !== 'undefined' && (localStorage?.getItem("shoping_cart") ? JSON.parse(localStorage?.getItem("shoping_cart")!) : [])
            state.cartItems = localItems
        },
        setCartToLocalStorage: (state) => localStorage.setItem('shoping_cart', JSON.stringify(state.cartItems))
    },
    extraReducers: builder => {
        builder.addCase(makeCartItem.fulfilled, (state, action) => {
            // console.log(action)
            // if (action.payload.id) {
            //     // state.id=action.payload.id
            //     // state.cartItems.id
            //     const itemIndex = state.cartItems.findIndex(item => item.variant.id === action.payload.variant)
            //     console.log(itemIndex)
            // }
            // console.log(action.payload.id)
        })
        builder.addCase(makeCartItem.rejected, (state, action) => {
            console.log(action)
        })
        builder.addCase(getCartFromServer.fulfilled, (state, action) => {
            state.cartItems = action.payload.results[0].cart_items
            state.id = action.payload.results[0].id
            state.totalFinallPrice = action.payload.results[0].total_final_price
            state.totalSellPrice = action.payload.results[0].total_sell_price
            state.yourProfitPercent = action.payload.results[0].your_profit_percent
            state.yourProfitAmount = action.payload.results[0].your_profit_amount
        })
    }
})
export default slice.reducer
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, deleteAllItems, getCartFromLocalStorage, setCartToLocalStorage } =
    slice.actions;
