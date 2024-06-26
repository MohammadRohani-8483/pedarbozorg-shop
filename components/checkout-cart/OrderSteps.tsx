import Image from 'next/image'
import React from 'react'

type props = {
    page: "SHIPPING" | "PAY"
}

const OrderSteps = ({ page }: props) => {
    return (
        <div className="relative flex w-full md:h-[290px] flex-col gap-4 justify-center items-center">
            <div className='absolute hidden sm:block'>
                <Image
                    src='/Image/Logo.svg'
                    alt="Logo"
                    width={290}
                    height={290}
                    className='opacity-[0.15]'
                />
            </div>
            <div className='flex justify-between w-full items-center gap-3'>
                <Image
                    src='/iconSax/shopping-cart.svg'
                    alt='shoping cart'
                    width={24}
                    height={24}
                    className='mx-2'
                />
                <div className='bg-secondry-base w-full h-[1px]' />
                <div className={`p-2 ${page === "SHIPPING" ? "bg-secondry-base rounded-full" : ""}`}>
                    <div className='relative min-w-[24px] h-6'>
                        <Image
                            src={page === "SHIPPING" ? '/iconSax/circle-delivery.svg' : "/iconSax/delivery.svg"}
                            alt='shoping cart'
                            fill
                        />
                    </div>
                </div>
                <div className={`w-full h-[1px] ${page === "SHIPPING" ? "bg-neutral-500" : "bg-secondry-base"}`} />
                <div className={`p-2 ${page === "PAY" ? "bg-secondry-base rounded-full" : ""}`}>
                    <div className='relative min-w-[24px] h-6'>
                        <Image
                            src={page === "PAY" ? '/iconSax/card-pos.svg' : "/iconSax/disable-card-pos.png"}
                            alt='shoping cart'
                            fill
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center w-full'>
                <h2 className='font-bold text-base text-secondry-base'>سبد خرید</h2>
                <h2 className={`font-bold ${page === "SHIPPING" ? "text-xl" : "text-base"} text-secondry-base`}>اطلاعات ارسال</h2>
                <h2 className={`font-bold ${page === "PAY" ? "text-xl text-secondry-base" : "text-base text-neutral-500"}`}>پرداخت</h2>
            </div>
        </div>
    )
}

export default OrderSteps