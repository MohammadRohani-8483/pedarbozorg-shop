import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'
import ProfileBox from './ProfileBox'

const Info = () => {
    return (
        <ProfileBox>
            <div className='w-full gap-4 md:gap-8 flex flex-col justigy-center items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h2 className='font-bold text-base-300 text-base md:text-xl'>
                            محمد روحانی
                        </h2>
                        <p className='text-sm md:text-base text-[#626262]'>
                            09330146331
                        </p>
                    </div>
                    <div className='p-1.5'>
                        <Image
                            src='/iconSax/edit.svg'
                            alt="edit"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h2 className='font-bold text-base-300 text-base'>
                            کیف پول
                        </h2>
                        <div className='text-sm md:text-xl text-[#626262] flex justify-center items-center gap-2 font-bold'>
                            {formatNumber(235000)}
                            <div className='relative w-[19px] h-3 md:w-[27px] md:h-[18px]'>
                                <Image
                                    src='/Image/gray-Tooman.svg'
                                    alt='tooman'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className='p-1.5'>
                        <Image
                            src='/iconSax/add-wallet.svg'
                            alt="edit"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </ProfileBox>
    )
}

export default Info