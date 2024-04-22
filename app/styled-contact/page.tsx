'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ContactUsFormStyled from './ContactUsFormStyled'
import Map from '@/components/contact-us/Map'
import CommunicationsStyled from './CommunicationsStyled'

const Container = styled.main`
width: 90%;
margin-left: auto;
margin-right: auto;
max-width: 1136px;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
gap: 4rem;
padding-top: 117px;
padding-bottom: 117px;
`

const Title = styled.div`
display: flex;
justify-items: center;
align-items: center;
gap: 1rem;
font-weight: 700;
font-size: 1.5rem;
line-height: 2rem;
color: #3D8361;
text-align: center;
`

const PageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-items: center;
align-items: center;
gap: 1.5rem;
`

const page = () => {
    return (
        <>
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={219}
                height={218}
                className='top-2 left-0 absolute hidden md:block z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-1.svg"
                alt="tree 1"
                width={152}
                height={192}
                className='top-12 right-0 absolute hidden md:block z-[-1]'
            />
            <Container>
                <Title>
                    <Image
                        src="/Image/title-vecors/right.svg"
                        alt="right"
                        width={69}
                        height={69}
                    />
                    تماس با ما
                    <Image
                        src="/Image/title-vecors/left.svg"
                        alt="left"
                        width={69}
                        height={69}
                    />
                </Title>
                <PageContainer>
                    <ContactUsFormStyled />
                    <CommunicationsStyled />
                </PageContainer>
                {/* {window &&
                    <Map />
                } */}
            </Container>
        </>
    )
}

export default page