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
    quantity:number
}