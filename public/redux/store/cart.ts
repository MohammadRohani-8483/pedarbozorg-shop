import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getCartFRomServer = createAsyncThunk()

type cartItem = {
    id: number,
    shatootInfo: {
        sellPrice: number,
        finalPrice: number,
        discount: number,
    },
    product: {
        id: number,
        featuredImage: string,
        name: string,
        slug: string,
    },
    quantity: number,
    totalFinalPrice: Function,
    totalSellPrice: Function,
}
export interface CartState {
    cart: cartItem[];
}

const slice = createSlice({
    name: 'cart',
    initialState: { cart: [] } as CartState,
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
        },
        removeFromCart: (state, action) => {
            const cartWithoutItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = cartWithoutItem;
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item!.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item!.quantity === 1) {
                item!.quantity = 1
            } else {
                item!.quantity--;
            }
        },
        getTotalFinalPrice: (state) => {
            state.cart.reduce((prev, next): any => prev.totalFinalPrice() + next.totalFinalPrice())
        },
        getTotalSellPrice: (state) => {
            state.cart.reduce((prev, next): any => prev.totalSellPrice() + next.totalSellPrice())
        },
    }
})
export default slice.reducer
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, getTotalFinalPrice,getTotalSellPrice } =
    slice.actions;
