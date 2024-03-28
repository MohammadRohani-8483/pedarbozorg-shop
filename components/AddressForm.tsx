import React, { useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/Input"
import Select from 'components/contact-us/Select'
import { address } from '@/public/types/adress'

type Input = Omit<address, 'id'>

const schema = yup.object().shape({
  address: yup.string().required(),
  unit_no: yup.number(),
  zip_code: yup.number().required(),
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup.string().required("تلفن تماس اجباری است.")
    .matches(/^09\d{9}$/, "لطفا شماره صحیح وارد کنید.")
    .min(11, "لطفا شماره صحیح وارد کنید.").max(11, "لطفا شماره صحیح وارد کنید."),
})

type props = {
  addAddressFunc?: (par: any) => void
  editAddressFunc?: (par: any) => void
}

const AddressForm = ({ addAddressFunc, editAddressFunc }: props) => {
  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [strict, setStrict] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema, "", "", "", "", "") })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    console.log(errors);
  }

  if (addAddressFunc)
    addAddressFunc(handleSubmit(onSubmit))
  else if (editAddressFunc)
    editAddressFunc(handleSubmit(onSubmit))

  return (
    <div className='w-full max-h-[330px] md:max-h-[400px] p-2 md:p-0 ltr overflow-auto -mx-2 md:m-0' id='scroll'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[614px] flex flex-col gap-2 sm:gap-4 md:gap-6 justify-center items-center"
      >
        <div className='w-full flex flex-col gap-2 md:gap-4 justify-center items-start'>
          <h2 className='text-base text-base-300 font-bold'>
            نشانی تحویل
          </h2>
          <div className='relative w-full focus:border-base-300 border border-gray-400 hover:border-gray-700 rounded-lg p-1 flex justify-center items-center h-[90px]'>
            <textarea
              className='peer/message w-full p-2 outline-none  text-black resize-none h-full '
              id='scroll'
              placeholder=''
              {...register("address")}
            />
            <label htmlFor="scroll" className='peer-focus/message:text-[10px] text-[10px] peer-focus/message:text-base-300 text-gray-400 absolute peer-focus/message:-top-2.5 peer-focus/message:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/message:text-base peer-placeholder-shown/message:right-2 peer-placeholder-shown/message:top-2'>
              نشانی پستی*
            </label>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
            <div className='flex justify-center items-center w-full gap-3'>
              <label htmlFor="province">استان*:</label>
              <Select
                options={[]}
                activeOption={province}
                setActiveOption={setProvince}
                defaultValue={'استان'}
              />
            </div>
            <div className='flex justify-center items-center w-full gap-3'>
              <label htmlFor="city">شهر*:</label>
              <Select
                options={[]}
                activeOption={city}
                setActiveOption={setCity}
                defaultValue={'شهر'}
              />
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center'>
            <div className='flex justify-center items-center w-full gap-3'>
              <div className='w-2/3'>
                <Input
                  type='number'
                  name='unit_no'
                  placeholder='واحد'
                  register={'unit_no'}
                />
              </div>
              <Input
                type='number'
                name='zip_code'
                placeholder='کدپستی*'
                register={'zip_code'}
              />
            </div>
            <div className='flex justify-center items-center w-full gap-3'></div>
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
            />
            <label htmlFor="recipentMyself" className='cursor-pointer text-[#626262] text-sm'>
              تحویل گیرنده خودم هستم
            </label>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center w-full gap-2 sm:gap-4'>
            <Input
              className='w-full'
              type='text'
              name='first_name'
              placeholder='نام*'
              register={'first_name'}
            />
            <Input
              className='w-full'
              type='text'
              name='last_name'
              placeholder='نام خانوادگی*'
              register={'last_name'}
            />
            <Input
              maxLength={11}
              className='w-full'
              type='tel'
              name='phone_number'
              placeholder='شماره همراه*'
              register={'phone_number'}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddressForm