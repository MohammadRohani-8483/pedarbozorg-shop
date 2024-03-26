export type address = {
    id: number
    first_name: string
    last_name: string
    province: number | string
    city: number | string
    strict?: string
    unit_no: number
    flat_no: number
    zip_code: string
    address: string
    phone_number: string
    is_active: boolean
}

export const fakeAddress: address = {
    id: 2325,
    province: "قم",
    city: "قم",
    address: 'بلوار امین کوچه 15',
    flat_no: 2,
    unit_no: 5,
    zip_code: "3713526895",
    phone_number: "09330146331",
    first_name: "محمد",
    last_name: "روحانی",
    is_active: true,
}