import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EmptyCheckoutCart = () => {
    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full gap-4 md:gap-8 max-w-[752px]'>
            <div className='size-8 md:size-16 relative'>
                <Image
                    src='/iconSax/shopping-cart.svg'
                    alt='shoping cart'
                    fill
                />
            </div>
            <h2 className='text-neutral-700 font-bold text-xl md:text-2xl text-center'>سبد خرید شما خالی است</h2>
            <div className='w-full flex flex-col justify-center items-center gap-4 md:gap-8'>
                <h3 className='text-neutral-500 font-bold text-sm md:text-base text-center'>
                    جهت افزودن به سبد خرید و سفارش بایستی محصولی را به سبد خرید اضافه کنید
                    </h3>
                <div className='w-full flex flex-col md:flex-row gap-3 md:gap-4'>
                    <Link href='/' className='w-full flex justify-center items-center py-1.5 md:py-2.5 text-secondry-base border border-secondry-base outline-none rounded-lg hover:bg-secondry-tint-7 transition-all duration-300'>
                        بازگشت به صفحه اصلی
                    </Link>
                    <Link href='/products' className='w-full flex justify-center items-center py-1.5 md:py-2.5 text-secondry-base border border-secondry-base outline-none rounded-lg hover:bg-secondry-tint-7 transition-all duration-300'>
                        ورود به فروشگاه
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCheckoutCart