import { cart } from "./cart"

export type lastSeenProduct = {
    id: number,
    name: string
    slug: string
    min_price: number,
    featured_image: string
    is_in_cart: boolean,
    min_sell_price: number
}

export type notification = {
    id: number
    title: string
    text: string
    created_at: string
    related_order: string
}

export type userInfo = {
    id?: number
    user?: {
        id: string
        username: string
    }
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    national_code?: any
    gender?: string
    birth_date?: string | null
    completed_orders?: number
    preparing_orders?: number
    cancelled_orders?: number
    last_seen_products?: lastSeenProduct[]
    latest_notifications?: notification[]
    wallet_balance?: number
    cart?: [
        cart
    ],
    gift_products?: any[]
}

