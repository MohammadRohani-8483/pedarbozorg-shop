export type productInList = {
    id: number
    name: string
    slug: string
    min_price: number | null
    max_price: number | null
    categories: {
        id: number
        title: string
    }[]
    featured_image: string
    is_in_cart: boolean,
    min_sell_price: number | null
    avg_rate: number | null
    cheapest_variant_id: number
    advantages: {
        id: number
        title: string
    }[]
    is_available: boolean
}

export type productDetail = {
    detail?: string
    id: 12604,
    name: string
    slug: string
    variants: {
        id: 37454,
        shatoot_info: {
            shatoot_pk: null,
            good_name: string
            third_name: string | null
            good_code: null,
            sell_price: number
            inventory: string
            discount: string
            percent_discount: string
            final_price: number
        },
        is_available: boolean,
        image: string
        related_variant: {
            id: number
            created_at: string
            updated_at: string
            is_in_landing: boolean,
            name: string
            amount: number
            type: string
            base_variant: number
        }
    }[]
    categories: [
        {
            id: 7,
            title: string
        }
    ],
    featured_image: string
    galleries: [],
    specifications: {
        id: number
        key: string
        value: string
    }[]
    short_description: string
    is_in_cart: boolean | null,
    rate_count: number | null
    avg_rate: number | null
    comment_count: number | null
    introduction: string
    advantages: {
        id: number
        title: string
    }[]
    related_products: {
        id: number
        name: string
        slug: string
        categories: {
            id: number
            title: string
        }[]
        featured_image: string
        is_in_cart: boolean,
        advantages: {
            id: number
            title: string
        }[]
    }[]
    min_price: number | null
    min_sell_price: number | null
    max_price: number | null
    is_available: boolean
}