'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type props = {
    options: string[]
    activeOption?: string
    setActiveOption: (option: string) => void
    defaultValue: string
}

export default function Select({ options, activeOption, setActiveOption, defaultValue }: props) {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (!dropdownRef.current?.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);


    const handleOptionsClick = (vlaue: string) => {
        setActiveOption(vlaue)
        setIsOpen(false)
    }

    const toggling = () => setIsOpen(!isOpen)

    return (
        <div ref={dropdownRef} className='relative flex flex-col w-full justify-center items-center'>
            <div
                onClick={toggling}
                className={`flex justify-between items-center pl-2 pr-3 py-2.5 w-full h-10 bg-white border border-gray-400 rounded-lg text-black cursor-pointer hover:border-gray-700 ${activeOption ? "text-black" : "text-gray-400"}`}
            >
                {activeOption || defaultValue}
                {isOpen ?
                    <Image
                        src='/iconSax/arrow-up.svg'
                        alt='arrow up'
                        width={20}
                        height={20}
                    />
                    :
                    <Image
                        src='/iconSax/arrow-down.svg'
                        alt='arrow down'
                        width={20}
                        height={20}
                    />}
            </div>
            {isOpen &&
                <div className='absolute top-11 left-0 right-0 bg-white w-full rounded-lg border border-gray-300 flex flex-col items-start justify-center overflow-auto z-10'>
                    {options.map((option, i) => (
                        <React.Fragment key={i}>
                            {option === activeOption ?
                                <div
                                    onClick={() => handleOptionsClick(option)}
                                    className='w-full bg-base-200 text-base-300 px-4 py-1'
                                >
                                    {option}
                                </div>
                                :
                                <div
                                    onClick={() => handleOptionsClick(option)}
                                    className='w-full hover:bg-base-200 hover:text-base-300 px-4 py-1'
                                >
                                    {option}
                                </div>
                            }
                        </React.Fragment>
                    ))}
                </div>
            }
        </div>
    )
}
