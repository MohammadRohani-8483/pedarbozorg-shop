export type OrderInterface = {
    total_price: string;
    created_at: string;
    status: {
        level: number;
        label: string;
    };
    address: {
        city: string;
        email: string;
        phone_number: string;
    };
    order_id: number;
    id: string;
    order_items: ProductInOrderInterface[]
}

export interface ProductInOrderInterface {
    id: number;
    order: string;
    is_gift: number,
    quantity: number;
    total_price: number;
    variant: {
        id: number;
        attribute: any;
        image: string,
        name: string,
        product: {
            description: string | null;
            featured_image: string;
            name: string;
            id: number;
            slug: string,
        };
        featured_image: string,
        shatoot_info: {
            final_price: number;
            discount: number;
            sell_price: string;
        };
    };

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