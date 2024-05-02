import { GET_ADDRESS, createAddress } from '@/public/types/adress'
import React, { useEffect, useState } from 'react'
import Icon from './Icon'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useAppSelector } from '@/public/redux/hooks'
import { authState } from '@/public/redux/store/auth'
import Alert from './Alert'
import AddressForm from './AddressForm'

type props = {
    setAddAddressIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    addresses: GET_ADDRESS[]
    setAddresses: React.Dispatch<React.SetStateAction<GET_ADDRESS[]>>
}

type itemProps = {
    selectAddress: GET_ADDRESS
    setAddresses: React.Dispatch<React.SetStateAction<GET_ADDRESS[]>>
}

type InfoItemProps = {
    icon: string
    value: string
}

const SelectAddress = ({ addresses, setAddresses, setAddAddressIsOpen }: props) => {
    return (
        <div className='w-full md:w-[614px] flex flex-col gap-2 sm:gap-4 md:gap-6 justify-center items-center'>
            <button
                onClick={() => {
                    setAddAddressIsOpen(true)
                }}
                className="solid-btn rectangle-btn"
            >
                افزودن آدرس جدید
            </button>
            <div className='w-full h-[1px] bg-neutral-E3E3E3' />
            <div className='ltr flex flex-col overflow-y-auto p-2 w-full max-h-[354px] gap-2 sm:gap-4 md:gap-6 -m-2' id='scroll'>
                {addresses.map((address, i, array) => (
                    <React.Fragment key={address.id}>
                        <AddressItem selectAddress={address} setAddresses={setAddresses} />
                        {i + 1 < array.length &&
                            <div className='w-full py-[0.5px] bg-neutral-E3E3E3' />
                        }
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SelectAddress

const AddressItem = ({ selectAddress, setAddresses }: itemProps) => {
    const { userToken } = useAppSelector((state: { auth: authState }) => state.auth)
    const [province, setProvince] = useState<string>()
    const [city, setCity] = useState<string>()

    useEffect(() => {
        if (selectAddress) {
            axios(`/api/transaction-api/provinces/${selectAddress.province}/`)
                .then(res => {
                    setProvince(res.data.name);
                })
            axios(`/api/transaction-api/cities/${selectAddress.city}/`)
                .then(res => {
                    setCity(res.data.name);
                })
        }
    }, [])

    const changeIsActive = () => {
        if (!selectAddress.is_active) {
            axios.patch(`/api/transaction-api/address/${selectAddress.id}`,
                { is_active: true },
                {
                    headers: {
                        Authorization: `JWT ${userToken.access}`
                    }
                })
                .then(({ data }) => {
                    console.log(data)
                })
            setAddresses(prev => {
                let activeIndex = prev.findIndex(address => address.is_active)
                prev[activeIndex].is_active = false
                let selectIndex = prev.findIndex(address => address.id === selectAddress.id)
                prev[selectIndex].is_active = true
                return [...prev]
            })
        }
    }
    const { address, flat_no, first_name, last_name, phone_number, zip_code } = selectAddress
    return (
        <>
            {city ?
                <div className='flex w-full justify-between items-center'>
                    <div className='flex justify-start items-start gap-4 md:gap-6'>
                        <div
                            onClick={changeIsActive}
                            className={`size-5 border rounded-full cursor-pointer hover:bg-secondry-tint-7 hover:shadow-[0_0_0_5px_rgba(224,241,233,1)] transition-all duration-300 p-1 ${selectAddress.is_active ? "border-secondry-base" : "border-neutral-500"}`}
                        >
                            {selectAddress.is_active &&
                                <motion.div animate={{ opacity: 1 }} className='w-full h-full bg-secondry-base rounded-full' />
                            }
                        </div>
                        <div className='flex flex-col justify-start items-start gap-3 md:gap-4 font-light'>
                            <p className='text-neutral-800 text-sm flex gap-1 items-center leading-[180%]'>
                                <>
                                    {city !== province && `${province}/`}{city}{selectAddress?.strict ? `/منطقه ${selectAddress.strict}` : ""}/{address}
                                </>
                            </p>
                            <div className='flex flex-col justify-start items-start gap-1.5 md:gap-2'>
                                <InfoItem icon='user' value={`${first_name} ${last_name}`} />
                                <InfoItem icon='call-outline' value={phone_number} />
                                <InfoItem icon='signpost' value={`${flat_no}`} />
                                <InfoItem icon='Mailbox' value={zip_code} />
                            </div>
                        </div>
                    </div>
                    <button className='bg-secondry-tint-7 hover:bg-secondry-tint-6 transition-all duration-300 rounded-lg square-btn'>
                        <Icon nameIcon='edit-outline' size={20} />
                    </button>
                </div >
                :
                <SelectAddressSkeleton />
            }
        </>
    )
}

const InfoItem = ({ icon, value }: InfoItemProps) => {
    return (
        <div className='flex justify-center items-center gap-3 md:gap-4'>
            <Icon nameIcon={icon} size={16} />
            <p className='text-xs text-neutral-800 leading-[180%]'>
                {value}
            </p>
        </div>
    )
}

const SelectAddressSkeleton = () => {
    return (
        <div className='min-h-[153px] flex w-full justify-between items-center animate-pulse'>
            <div className='flex justify-start items-start gap-4 md:gap-6 h-full'>
                <div className='size-5 bg-gray-200 rounded-full' />
                <div className='flex flex-col justify-start items-start gap-3 md:gap-4'>
                    <div className='h-6 flex gap-1 items-center bg-gray-200 w-[200px] rounded-lg' />
                    <div className='flex flex-col gap-2 justify-start items-start'>
                        {Array(4).fill(1).map((_, i) => (
                            <div key={i} className='w-[140px] h-5 rounded-lg bg-gray-200' />
                        ))}
                    </div>
                </div>
            </div>
            <div className='size-8 bg-gray-200 rounded-lg' />
        </div>
    )
}