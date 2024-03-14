import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function Title({children}:{children:ReactNode}) {
  return (
    <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-lg md:text-xl lg:text-2xl text-base-300 text-center'>
                {children}
                </h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
  )
}
