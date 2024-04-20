import React from 'react'
import styled from 'styled-components'

type Props = {
    label: string
}

const Label = styled.label`
    position:absolute;
    font-size: 10px;
    line-height: 1rem;
    color:#9ca3af;
    background-color: white;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    right: 16px;
    top: -10px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    pointer-events: none;
`

const TextAreaParent = styled.div`
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    position:relative;
    width:100%;
    border:1px solid #9ca3af;
    border-radius:8px;
    padding:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    height:160px;
    &:hover{
        border-color:#374151;
    }
    &:focus-within{
        border-color:#336D51;
    };
    textarea{
        width:100%;
        height:100%;
        padding:8px;
        outline: 2px solid transparent; 
        outline-offset: 2px;
        color:#1B1B1B;
        resize: none;
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
            top: -10px;
            right: 16px;
        };
    };
`

const TextArea = ({ label }: Props) => {
    return (
        <TextAreaParent>
            <textarea name="" id="scroll" placeholder='' />
            <Label>{label}</Label>
        </TextAreaParent>
    )
}

export default TextArea