'use client'
import React, { useEffect, useReducer, useState } from 'react'
import Input from "components/Input"
import Select from 'components/contact-us/Select'
import { address, allStrict } from '@/public/types/adress'
import { addressAction, addressActionKind, addressReducer, initialForm } from '@/public/types/addressReducer';
import axios from 'axios';

const AddressForm = ({ setAddress }: { setAddress: (address: address) => void }) => {
  const [allProvince, setAllProvince] = useState<{ id: number, name: string }[]>([])
  const [province, setProvince] = useState('')
  const [provinceID, setProvinceID] = useState<number>()

  const [allCity, setAllCity] = useState<{ id: number, name: string }[]>([])
  const [cityID, setCityID] = useState<number>()
  const [city, setCity] = useState('')

  const [strict, setStrict] = useState<string | null>()
  const [strictID, setStrictID] = useState<number>()

  const [state, dispatch] = useReducer<(state: address, dispatch: addressAction) => address>(addressReducer, initialForm)

  useEffect(() => {
    axios("/api/transaction-api/provinces/?page_size=50")
      .then((res) => {
        setAllProvince(res.data.results)
      })
  }, [])

  useEffect(() => {
    setProvinceID(allProvince.find(item => item.name === province)?.id)
    provinceID && axios(`/api/transaction-api/cities/?province=${provinceID}&page_size=50`)
      .then((res) => {
        setAllCity(res.data.results)
      })
  }, [allProvince, province, provinceID])

  useEffect(() => {
    setCityID(allCity.find(item => item.name === city)?.id)
  }, [allCity, city])
  useEffect(() => {
    setStrictID(allStrict.find(item => item.name === strict)?.id)
  }, [strict])

  useEffect(() => {
    provinceID ? dispatch({ type: addressActionKind.PROVINCE, payload: { num: provinceID } }) : dispatch({ type: addressActionKind.PROVINCE, payload: { num: null } })
  }, [provinceID])
  useEffect(() => {
    cityID ? dispatch({ type: addressActionKind.CITY, payload: { num: cityID } }) : dispatch({ type: addressActionKind.CITY, payload: { num: null } })
    cityID !== 1508 && setStrict(null)
  }, [cityID])
  useEffect(() => {
    strictID ? dispatch({ type: addressActionKind.STRICT, payload: { num: strictID } }) : dispatch({ type: addressActionKind.STRICT, payload: { num: null } })
  }, [strictID])

  useEffect(() => {
    !cityID && setCity('')
  }, [cityID, province])

  useEffect(() => {
    if (state.recipentMyself) {
      dispatch({ type: addressActionKind.FIRST_NAME, payload: { str: 'محمد' } })
      dispatch({ type: addressActionKind.LAST_NAME, payload: { str: 'روحانی' } })
      dispatch({ type: addressActionKind.PHONE_NUMBER, payload: { str: '09330146331' } })
    } else {
      dispatch({ type: addressActionKind.FIRST_NAME, payload: { str: '' } })
      dispatch({ type: addressActionKind.LAST_NAME, payload: { str: '' } })
      dispatch({ type: addressActionKind.PHONE_NUMBER, payload: { str: '' } })
    }
  }, [state.recipentMyself])

  const handleChangeInputs = (type: addressActionKind, val: { str?: string, num?: number }) => {
    dispatch({ type, payload: val })
  }

  useEffect(() => {
    setAddress(state)
  }, [state])

  return (
    <div className='w-full max-h-[330px] md:max-h-[400px] p-2 md:p-0 ltr overflow-auto -mx-2 md:m-0' id='scroll'>
      <form className="w-full md:w-[614px] flex flex-col gap-2 sm:gap-4 md:gap-6 justify-center items-center">
        <div className='w-full flex flex-col gap-2 md:gap-4 justify-center items-start'>
          <h2 className='text-base text-base-300 font-bold'>
            نشانی تحویل
          </h2>
          <div className='relative w-full focus:border-base-300 border border-gray-400 hover:border-gray-700 rounded-lg p-1 flex justify-center items-center h-[90px]'>
            <textarea
              className='peer/message w-full p-2 outline-none  text-black resize-none h-full '
              id='scroll'
              placeholder=''
              value={state.address}
              onChange={(e) => handleChangeInputs(addressActionKind.ADDRESS, { str: e.target.value })}
            />
            <label htmlFor="scroll" className='peer-focus/message:text-[10px] text-[10px] peer-focus/message:text-base-300 text-gray-400 absolute peer-focus/message:-top-2.5 peer-focus/message:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/message:text-base peer-placeholder-shown/message:right-2 peer-placeholder-shown/message:top-2'>
              نشانی پستی*
            </label>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
            <div className='flex justify-center items-center w-full gap-3'>
              <label htmlFor="province">استان*:</label>
              <Select
                options={allProvince?.map(province => province.name)}
                activeOption={province}
                setActiveOption={setProvince}
                defaultValue={'استان'}
              />
            </div>
            <div className='flex justify-center items-center w-full gap-3'>
              <label htmlFor="city">شهر*:</label>
              <Select
                options={allCity?.map(province => province.name)}
                activeOption={city}
                setActiveOption={setCity}
                defaultValue={'شهر'}
                disabled={!province}
              />
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
            <div className='flex justify-center items-center w-full gap-3'>
              <div className='flex justify-center items-center w-full gap-3'>
                <label htmlFor="province">{cityID === 1508 ? "منطقه*:" : "منطقه:"}</label>
                <Select
                  options={allStrict.map(province => province.name)}
                  activeOption={strict!}
                  setActiveOption={setStrict}
                  defaultValue={'منطقه'}
                  disabled={cityID !== 1508}
                />
              </div>
              <Input
                type='number'
                name='flatNum'
                placeholder='پلاک*'
                value={state.flatNum}
                setValue={(e) => handleChangeInputs(addressActionKind.FLAT, { num: +e })}
              />
            </div>
            <div className='flex justify-center items-center w-full gap-3'>
              <div className='w-1/3'>
                <Input
                  type='number'
                  name='unitNum'
                  placeholder='واحد'
                  value={state.unitNum}
                  setValue={(e) => handleChangeInputs(addressActionKind.UNIT, { num: +e })}
                />
              </div>
              <Input
                type='number'
                name='zipCode'
                placeholder='کدپستی*'
                value={state.zipCode}
                setValue={(e) => handleChangeInputs(addressActionKind.ZIP_CODE, { str: String(e) })}
                maxLength={10}
              />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 md:gap-4 justify-center items-start'>
          <h2 className='text-base text-base-300 font-bold'>
            مشخصات تحویل گیرنده
          </h2>
          <div className='flex gap-2 items-center'>
            <input
              type="checkbox"
              id="recipentMyself"
              style={{ accentColor: "#3D8361" }}
              className='cursor-pointer'
              onChange={() => dispatch({ type: addressActionKind.MY_SELF })}
              checked={state.recipentMyself}
            />
            <label htmlFor="recipentMyself" className='cursor-pointer text-[#626262] text-sm'>
              تحویل گیرنده خودم هستم
            </label>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center w-full gap-2 sm:gap-4'>
            <Input
              className='w-full'
              type='text'
              name='firstName'
              placeholder='نام*'
              value={state.firstName}
              setValue={(e) => handleChangeInputs(addressActionKind.FIRST_NAME, { str: String(e) })}
              disabled={state.recipentMyself}
            />
            <Input
              className='w-full'
              type='text'
              name='lastName'
              placeholder='نام خانوادگی*'
              value={state.lastName}
              setValue={(e) => handleChangeInputs(addressActionKind.LAST_NAME, { str: String(e) })}
              disabled={state.recipentMyself}
            />
            <Input
              maxLength={11}
              className='w-full'
              type='tel'
              name='phoneNumber'
              placeholder='شماره همراه*'
              pattern='[0,9]'
              value={state.phoneNumber}
              setValue={(e) => handleChangeInputs(addressActionKind.PHONE_NUMBER, { str: String(e) })}
              disabled={state.recipentMyself}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddressForm