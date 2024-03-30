export type product = {
    id?: string,
    name: string,
    image?: string | undefined,
    price: number,
    link: string,
    score?: number,
    priceWithOffer: number,
}

export type shopCartItem = {
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
    quantity: number
}

export type cartItem = {
    id?: number
    cart?: string
    variant: {
        id: number
        shatoot_info: {
            sell_price: number
            final_price: number
            discount: number
        }
        product: {
            id: number,
            featured_image: string
            name: string
            slug: string
        }
        image: string
        name: string
    }
    quantity?: number
    total_final_price?: number
    total_sale_price?: number
}

export type cart = {
    id?: string
    cartItems: cartItem[]
    yourProfitAmount?: number
    yourProfitPercent?: number
    totalFinallPrice?: number
    totalSellPrice?: number
}