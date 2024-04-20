'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import SelectStyled from './SelectStyled'
import InputStyled from './InputStyled'
import TextArea from './TextArea'
import Icon from '@/components/Icon'
import UploadStyled from './UploadStyled'

type ParentInputProps = {
    col: number
}

const ConteinerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    padding: 16px;
    gap: 24px;
    color:#1B1B1B;
    h1{
        color: #3D8361;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
`

const Form = styled.form`
    width: 100%;
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

const ParentInput = styled.div<ParentInputProps>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ col }) => col}, minmax(0, 1fr));
    gap: 16px;
`

const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:8px;
    width:100px;
    background-color:#3D8361;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    color:#F4F6FF;
    border-radius:8px;
    font-size:16px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    &:hover{
        background-color:#336D51;
    };
`

export default function ContactUsFormStyled() {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [orderNumber, setOrderNumber] = useState('')
    const [activeOption, setActiveOption] = useState<string>()

    const subjectOptions = [
        'پیشنهاد',
        'انتقاد یا شکایت',
        'پیگیری سفارش',
        'خدمات پس از فروش',
        'امور مالی',
        'مدیریت',
        'سایر',
    ]
    return (
        <ConteinerForm>
            <h1>
                ارسال پیام به پدربزرگ
            </h1>
            <Form>
                <ParentInput col={2}>
                    <SelectStyled
                        options={subjectOptions}
                        activeOption={activeOption}
                        setActiveOption={setActiveOption}
                        defaultValue="انتخاب موضوع"
                        label='موضوع*:'
                    />
                    <InputStyled
                        type='number'
                        name='name'
                        placeholder='نام و نام خانوادگی*'
                        setValue={setName}
                        value={name}
                    />
                </ParentInput>
                <ParentInput col={3}>
                    <InputStyled
                        type='email'
                        name='E_mail'
                        placeholder='ایمیل*'
                        className='w-full'
                        setValue={setMail}
                        value={mail}
                    />
                    <InputStyled
                        type='tel'
                        pattern="[0-9]{11}"
                        maxLength={11}
                        name='phone_number'
                        placeholder='تلفن تماس*'
                        className='w-full'
                        setValue={setPhoneNumber}
                        value={phoneNumber}
                    />
                    <InputStyled
                        type='number'
                        name='order_number'
                        placeholder='شماره سفارش'
                        className='w-full'
                        setValue={setOrderNumber}
                        value={orderNumber}
                    />
                </ParentInput>
                <TextArea label='متن پیام*' />
                <UploadStyled />
                <Button type='submit'>
                    ارسال
                    <Icon nameIcon='send-2' size={24} />
                </Button>
            </Form>
        </ConteinerForm>
    )
}
