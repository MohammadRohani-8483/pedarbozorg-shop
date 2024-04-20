import Icon from '@/components/Icon';
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #9ca3af;
    border-radius: 0.375rem;
    color: #1B1B1B;
    padding: 1rem;
    gap: 1rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-top: 3rem;
        padding-bottom: 3rem;
        justify-content: space-around;
        gap: 0;
    }
`;

const Text = styled.p`
    font-size: 1rem;
    color: #757575;
    text-align: center;
`;

const UploadButton = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3D8361;
    border-radius: 0.375rem;
    color: #3D8361;
    font-size: 1rem;
    cursor: pointer;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    gap:8px;
    &:hover {
        background-color: #E0F1E9;
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

export default function UploadStyled() {
    const str = "rectangle-btn    "
    return (
        <Container>
            <Icon nameIcon='document-upload' size={64} />
            <Text>
                حداکثر ۵ تصویر jpeg یا png حداکثر یک مگابایت، یک ویدیو mp4 حداکثر ۵۰ مگابایت
            </Text>
            <UploadButton htmlFor="upload">
                <Icon nameIcon='upload-green' size={24} />
                بارگذاری عکس یا ویدئو
            </UploadButton>
            <HiddenInput id="upload" type="file" accept="image/png, image/jpeg, video/mp4" multiple />
        </Container>
    )
}
