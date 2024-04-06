export type address = {
    id?: number
    firstName?: string
    lastName?: string
    province?: number | null
    city?: number | null
    strict?: number | null
    unitNum?: number | null
    flatNum?: number | null
    zipCode?: string
    address?: string
    phoneNumber?: string
    isActive?: boolean
    recipentMyself?: boolean
}

export const allStrict: { name: string, id: number }[] = Array(22).fill(1).map((_, i) => (
    {
        id: i + 1,
        name: `منطقه ${i + 1}`
    }
))