import React from 'react'

type props = {
    name: string
    type: "text" | "password" | "email" | "number" | "tel"
    placeholder: string
    register: any
    className?: string
    maxLength?: number
}

const Input = ({ name, type, placeholder, register, className, maxLength }: props) => {
    return (
        <div className={`relative ${className || ""}`}>
            <input type={type}
                maxLength={maxLength}
                className='peer/name w-full h-10 p-2 outline-none focus:border-base-300 border border-gray-400 rounded-lg text-black hover:border-gray-700'
                id={name}
                placeholder=''
                {...register(name)}
            />
            <label htmlFor={name} className='peer-focus/name:text-[10px] text-[10px] peer-focus/name:text-base-300 text-gray-400 absolute peer-focus/name:-top-2.5 peer-focus/name:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/name:text-base peer-placeholder-shown/name:right-2 peer-placeholder-shown/name:top-2'>
                {placeholder}
            </label>
        </div>
    )
}

export default Input