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