export type cart = {
    id: string
    cart_items: cartItem[]
    total_final_price: number
    total_sell_price: number
    your_profit_percent: number
    your_profit_amount: number
}

export type cartItem = {
    id: number
    cart: string
    variant: {
        id: number
        shatoot_info: {
            sell_price: number
            final_price: number
            discount: number
        },
        product: {
            id: number
            featured_image: string
            name: string
            slug: string
        },
        image: string
        name: string
    },
    quantity: number
    total_final_price: number
    total_sale_price: number
}