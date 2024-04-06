import { address } from "./adress";

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

export const initialForm: address = {
    address: '',
    province: null,
    city: null,
    strict: null,
    flatNum: null,
    unitNum: null,
    zipCode: '',
    recipentMyself: false,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    isActive: false,
}

export const addressReducer = (state: address, action: addressAction) => {
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
                flatNum: payload?.num!
            };
        case addressActionKind.UNIT:
            return {
                ...state,
                unitNum: payload?.num!
            };
        case addressActionKind.ZIP_CODE:
            return {
                ...state,
                zipCode: payload?.str!
            };
        case addressActionKind.MY_SELF:
            return {
                ...state,
                recipentMyself: !state.recipentMyself
            };
        case addressActionKind.FIRST_NAME:
            return {
                ...state,
                firstName: payload?.str!
            };
        case addressActionKind.LAST_NAME:
            return {
                ...state,
                lastName: payload?.str!
            };
        case addressActionKind.PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: payload?.str!
            };
        case addressActionKind.IS_ACTIVE:
            return {
                ...state,
                address: payload?.str!
            };
        default: return state
    }
}

