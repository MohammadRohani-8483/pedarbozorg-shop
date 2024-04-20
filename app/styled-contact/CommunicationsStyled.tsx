import Icon from '@/components/Icon'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type ItemsProps = {
    icon: string
    title: string
    desc?: string
    descs?: {
        key: string
        value: string
        link: string
    }[]
    link?: string
}

const ComunicateContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:16px;
    width:100%;
`

const CommunicationsStyled = () => {
    return (
        <ComunicateContainer>
            <CommunicationItems
                icon='call'
                title='تلفن های تماس'
                descs={[
                    {
                        key: 'تلفن فروشگاه',
                        value: '۰۲۱-۴۴۶۱۲۷۵۲',
                        link: 'tel:+982144612752'
                    },
                    {
                        key: 'تلفن سفارشات',
                        value: '۰۲۱-۴۴۸۹۹۲۱۰',
                        link: 'tel:+982144899210'
                    },
                    {
                        key: 'تلفن همراه مدیر عامل',
                        value: '۰۹۱۹۴۰۶۰۸۰۵',
                        link: 'tel:+989194060805'
                    },
                ]}
            />
            <CommunicationItems
                title='ایمیل'
                desc='Pedarbozorg.busiuness@gmail.com'
                icon='mail'
                link="mailto:Pedarbozorg.busiuness@gmail.com"
            />
            <CommunicationItems
                icon='bg-location'
                title='آدرس فروشگاه مرکزی'
                desc='تهران،جنت آباد مرکزی، خیابان کبیری طامه(شاهین شمالی) ۲۰ متری گلستان غربی،پلاک ۱۵'
            />
        </ComunicateContainer>
    )
}

export default CommunicationsStyled

const Box = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:16px;
    background-color:white;
    border-radius:16px;
    gap:24px;
    height:318px;
`

const IconParent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:24px;
`

const IconTitle = styled.h2`
    font-weight:700;
    text-align:center;
    font-size:20px;
    color:#3D8361;
`

const DescParent = styled.div`
    display:flex;
    flex-direction:column;
    gap:16px;
    width:100%;
    color:#6b7280;
    font-size:16px;
    font-weight:700;
    text-align:center;
`

const CommunicationItems = ({ icon, title, desc, descs, link }: ItemsProps) => {
    return (
        <Box>
            <IconParent>
                <Icon nameIcon={icon} size={64} />
                <IconTitle>{title}</IconTitle>
            </IconParent>
            <DescParent>
                {
                    descs ?
                        descs.map((desc, i) => (
                            <div
                                key={i}
                                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                                <div>{desc.key}:</div>
                                <Link href={desc.link}>{desc.value}</Link>
                            </div>
                        ))
                        : link ?
                            <Link href={link}>{desc}</Link>
                            :
                            desc
                }
            </DescParent>
        </Box>
    )
}