import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <div className='flex justify-between items-start w-full'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <Image
                    src='/iconSax/moneys.svg'
                    alt='قیمت مناسب'
                    width={32}
                    height={32}
                />
                <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                    قیمت مناسب
                </h3>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <Image
                    src='/iconSax/tick-square.svg'
                    alt='تضمین اصالت'
                    width={32}
                    height={32}
                />
                <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                    تضمین اصالت
                </h3>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <Image
                    src='/iconSax/tree-gray.svg'
                    alt='100% طبیعی'
                    width={32}
                    height={32}
                />
                <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                    100% طبیعی
                </h3>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <Image
                    src='/iconSax/truck-time.svg'
                    alt='ارسال سریع و رایگان'
                    width={32}
                    height={32}
                />
                <h3 className='text-[#757575] text-sm whitespace-nowrap'>
                    ارسال سریع و رایگان
                </h3>
                <p className='text-[10px] text-[#757575] text-center whitespace-nowrap'>
                    سفارش بالای ۷۰۰ هزار تومان تهران
                </p>
                <p className='text-[10px] text-[#757575] text-center whitespace-nowrap'>
                    سفارش بالای ۸۵۰ تومان شهرستان‌ها
                </p>
            </div>
        </div>
    )
}

export default Features