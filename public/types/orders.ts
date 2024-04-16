import { GET_ADDRESS } from "./adress"

export type orderType = {
    id: string
    total_price: string
    description: string | null
    created_at: string
    order_items: orderItem[]
    status: {
        level: 0 | 1 | 2 | 3
        label: string
    },
    order_id: number,
    products_discount_amount: number
    products_total_price: number
    payment_method: {
        fa_name: string
        en_name: "ON" | "WA" | "IP"
    },
    shipment: {
        id: number
        address: GET_ADDRESS
        shipment_method: "CO"
        shipment_cost: number
    },
    wallet_payment: number
}

export type orderItem = {
    id: number
    order: string
    variant: {
        id: number
        shatoot_info: {
            sell_price: number
            final_price: number
            discount: number
        },
        product: {
            id: number,
            featured_image: string
            name: string
            slug: string
        },
        image: string | null
        name: string
    },
    quantity: number
    total_price: number
    is_gift: boolean
}

type level = 1 | 2 | "completed" | "cancelled"
export type order = {
    level: level
    id: number
    createdAt: {
        year: number
        month: string
        day: string
    }
    slug: string
    price: number
}

export const createFakeOrder = () => {
    const id = Math.floor(Math.random() * 899999999 + 100000000)
    const options: level[] = [1, 2, "completed", "cancelled"]
    const level = options[Math.floor(Math.random() * options.length)]
    const fakeOrder: order = {
        id,
        createdAt: {
            day: '08',
            month: "15",
            year: 1402
        },
        level,
        price: 250000,
        slug: `${id}`
    }
    return fakeOrder
}

export type submitCouponResponse = {
    total_final_price: number
    shipment_cost: number
    your_profit_amount: number
    your_profit_percent: number
    discount_code_amount?: number
    discount_code_percent?: number
    discount_code_description?: string
    product_discount_amount: number
    product_discount_percent: number
    total_sell_price: number
}