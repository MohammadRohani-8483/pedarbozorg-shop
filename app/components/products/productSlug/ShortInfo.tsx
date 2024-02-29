import React from 'react'
import { FaStar } from 'react-icons/fa'

const ShortInfo = () => {
    return (
        <>
            <div className='flex justify-between items-center w-full'>
                <h1 className='text-2xl text-base-300 font-bold'>
                    آرد نخودچی
                </h1>
                <div className='flex justify-center items-center gap-4'>
                    <p className='text-sm text-base-300 px-3'>
                        14 نظر
                    </p>
                    <div className='flex justify-center items-center gap-1'>
                        <FaStar className='text-[#FFC436]' />
                        <p className='text-[#757575] text-base '>
                            4.3
                        </p>
                        <p className='text-[#ADADAD] text-base'>
                            (13)
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-[1px] w-full bg-[#E3E3E3]'></div>
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-base-300 font-bold'>
                    توضیحات
                </h3>
                <p className='text-[#626262] text-sm w-full text-justify'>
                    از ابزارهای کاربردی برای به پایان متخصصان شناخت ایجاد زیادی شناخت رااز ابزارهای کاربردی برای متخصصان شناخت ایجاد زیادی شناخت را
                </p>
            </div>
            <div className='flex flex-col gap-4 justify-start items-start w-full'>
                <h3 className='text-base text-base-300 font-bold'>
                    مشخصات
                </h3>
                <div className='flex flex-col  gap-2 '>
                    <div className='flex justify-center items-center gap-4'>
                        <p className='text-[#ADADAD] text-sm'>
                            حالت فیزیکی:
                        </p>
                        <h3 className='text-base text-[#626262] font-bold'>
                            جامد
                        </h3>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <p className='text-[#ADADAD] text-sm'>
                            حالت فیزیکی:
                        </p>
                        <h3 className='text-base text-[#626262] font-bold'>
                            جامد
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShortInfo