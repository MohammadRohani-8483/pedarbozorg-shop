import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import Star from './Star'

const AvgRateBox = ({ product }: any) => {
    const roundRate = Math.floor(product.avg_rate)

    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const pathname = usePathname()

    const goToSignIn=()=>{
        params.set("sign_in", "true")
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='bg-white rounded-3xl w-full md:w-2/3 lg:max-w-[272px] h-auto border border-[#E3E3E3] p-4 flex flex-col justify-center items-center gap-4 md:mt-12'>
            {product.avg_rate > 0 &&
                <div className='text-[#ADADAD] text-base font-bold'>
                    <span className='text-base-300 text-lg'>{product.avg_rate.toFixed(1)}</span> از 5
                </div>
            }
            <div className='flex gap-4 justify-center items-center'>
                {Array.from({ length: roundRate }, (_, i) => {
                    return (
                        <Image
                            key={i}
                            src='/iconSax/like-yellow.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
                <Star present={(product.avg_rate - roundRate) * 100} />
                {Array.from({ length: 4 - roundRate }, (_, i) => {
                    return (
                        <Image key={i}
                            src='/iconSax/like-yellow-regular.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
            </div>
            {product.avg_rate > 0 ?
                <h5 className='text-[#757575] text-xs'>
                    از مجموع {product.rate_count} امتیاز
                </h5>
                :
                <h5 className='text-[#757575] text-xs'>
                    هنوز امتیازی ثبت نشده است.
                </h5>
            }
            <button
            onClick={goToSignIn}
                className='border border-base-300 rounded-md text-base-300 text-base rectangle-btn w-full transition-all duration-300 hover:bg-base-200 py-2'
            >
                افزودن نظر
            </button>
        </div>
    )
}

export default AvgRateBox