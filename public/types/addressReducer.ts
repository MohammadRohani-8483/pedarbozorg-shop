import { createAddress } from '@/public/types/adress';

export enum addressActionKind {
    ADDRESS = 'ADDRESS',
    PROVINCE = 'PROVINCE',
    CITY = 'CITY',
    STRICT = 'STRICT',
    FLAT = 'FLAT',
    UNIT = 'UNIT',
    ZIP_CODE = 'ZIP_CODE',
    MY_SELF = 'MY_SELF',
    FIRST_NAME = 'FIRST_NAME',
    LAST_NAME = 'LAST_NAME',
    PHONE_NUMBER = 'PHONE_NUMBER',
    IS_ACTIVE = 'IS_ACTIVE'
}

export type addressAction = {
    type: addressActionKind;
    payload?: { str?: string, num?: number | null };
}

export type initAddress = createAddress & {
    recipentMyself: boolean
    isActive: boolean
}

export const initialForm: initAddress = {
    address: '',
    province: null,
    city: null,
    strict: null,
    flat_no: null,
    unit_no: null,
    zip_code: '',
    recipentMyself: false,
    first_name: '',
    last_name: '',
    phone_number: '',
    isActive: false,
}

export const addressReducer = (state: initAddress, action: addressAction) => {
    const { type, payload } = action
    switch (type) {
        case addressActionKind.ADDRESS:
            return {
                ...state,
                address: payload?.str!
            };
        case addressActionKind.PROVINCE:
            return {
                ...state,
                province: payload?.num!
            };
        case addressActionKind.CITY:
            return {
                ...state,
                city: payload?.num!
            };
        case addressActionKind.STRICT:
            return {
                ...state,
                strict: payload?.num!
            };
        case addressActionKind.FLAT:
            return {
                ...state,
                flat_no: payload?.num!
            };
        case addressActionKind.UNIT:
            return {
                ...state,
                unit_no: payload?.num!
            };
        case addressActionKind.ZIP_CODE:
            return {
                ...state,
                zip_code: payload?.str!
            };
        case addressActionKind.MY_SELF:
            return {
                ...state,
                recipentMyself: !state.recipentMyself
            };
        case addressActionKind.FIRST_NAME:
            return {
                ...state,
                first_name: payload?.str!
            };
        case addressActionKind.LAST_NAME:
            return {
                ...state,
                last_name: payload?.str!
            };
        case addressActionKind.PHONE_NUMBER:
            return {
                ...state,
                phone_number: payload?.str!
            };
        case addressActionKind.IS_ACTIVE:
            return {
                ...state,
                address: payload?.str!
            };
        default: return state
    }
}

