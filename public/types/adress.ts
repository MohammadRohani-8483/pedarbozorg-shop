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

export type GET_ADDRESS = {
    id: number
    first_name: string
    last_name: string
    province: number
    city: number
    strict: number | null
    unit_no: number | null
    flat_no: number
    zip_code: string
    address: string
    phone_number: string
    is_active: boolean
}

export type createAddress = {
    phone_number: string
    first_name: string
    last_name: string
    province: number | null
    city: number | null
    address: string
    zip_code: string
    flat_no: number | null
    unit_no: number | null
    strict: number | null
}