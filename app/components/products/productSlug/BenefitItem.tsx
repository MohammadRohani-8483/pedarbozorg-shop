import Image from 'next/image'
import React from 'react'

const BenefitItem = () => {
    return (
        <div className='flex gap-4 w-full items-center justify-center'>
            <Image
                src='/iconSax/tick-square-green.svg'
                alt='Tick Icon'
                width={24}
                height={24}
            />
            <p className='text-sm text-[#626262] text-justify leading-6'>
                از ابزارهای کاربردی برای به پایان متخصصان شناخت ایجاد زیادی شناخت را
            </p>
        </div>
    )
}

export default BenefitItem