export type product = {
    id?: string,
    name: string,
    image?: string | undefined,
    price: number,
    link: string,
    score?: number,
    priceWithOffer: number,
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
    successRedux: boolean
}

export type vipProducts = {
    id: number,
    advantages: [
        {
            id: number,
            title: string
        },
        {
            id: number,
            title: string
        },
        {
            id: number,
            title: string
        },
        {
            id: number,
            title: string
        }
    ],
    name: string,
    slug: string,
    min_price: number,
    min_sell_price: number,
    cheapest_variant_id: number
    cheapest_variant: {
        id: number,
        shatoot_info: cheapestVariantItem
        is_available: boolean,
        image: string
    }
}[]

export type cheapestVariantItem = {
    shatoot_pk: number,
    good_name: string,
    third_name: string,
    good_code: string,
    sell_price: number,
    inventory: string,
    discount: string,
    percent_discount: string,
    final_price: number
}