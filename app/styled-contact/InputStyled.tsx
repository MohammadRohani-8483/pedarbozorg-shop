import React from 'react'
import styled from 'styled-components'

type props = {
    name: string
    type: "text" | "password" | "email" | "number" | "tel"
    placeholder: string
    register?: any
    className?: string
    maxLength?: number
    pattern?: string
    value?: string | number | null
    setValue: (param: string) => void
    disabled?: boolean
}

type InputProps = {
    typeNum: boolean
    // disabled: boolean
}

const InputParent = styled.div`
    position:relative;
    width:100%;
`

const Label = styled.label`
    position:absolute;
    font-size: 10px;
    line-height: 1rem;
    color:#9ca3af;
    background-color: white;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    right: 1rem;
    top: -10px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    pointer-events: none;
`

const Input = styled.input<InputProps>`
    width:100%;
    height:40px;
    padding:8px;
    outline: 2px solid transparent; 
    outline-offset: 2px;
    border: 1px solid #9ca3af;
    border-radius:8px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    color:${p => p.disabled ? "#6b7280" : "#1B1B1B"};
    cursor:${p => p.disabled ? "cursor: not-allowed;" : "cursor: auto;"};
    &:focus{
        border-color: #3D8361;
    };
    &:hover{
        border-color: ${p => p.disabled ? "#9ca3af" : "#374151"};
    };
    &:placeholder-shown+Label{
        font-size:16px;
        right:8px;
        top:12px;
        font-weight:300;
    };
    &:focus+Label{
        font-size: 10px;
        line-height: 1rem;
        color:#3D8361;
        top: -0.625rem;
        right: 1rem;
    };
    ${p => p.typeNum &&
        `
            appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                appearance: none;
            }
        `
    }
`

const InputStyled = ({ name, type, placeholder, maxLength, pattern, value, setValue, disabled }: props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        type === 'tel' ?
            setValue(e.target.value.replace(/[^0-9]/g, ''))
            :
            setValue(e.target.value)
    }
    return (
        <InputParent>
            <Input
                pattern={pattern}
                maxLength={maxLength}
                disabled={disabled}
                typeNum={type === 'number'}
                id={name}
                placeholder=''
                value={value || ""}
                onChange={handleChange}
            />
            <Label htmlFor={name}>
                {placeholder}
            </Label>
        </InputParent>
    )
}

export default InputStyled