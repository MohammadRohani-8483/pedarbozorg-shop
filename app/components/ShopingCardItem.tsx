import React from 'react'
import Image from 'next/image'
import formatNumber from 'public/Functions/formatNumber'
import Link from 'next/link'

const ShopingCardItem = ({ image, link, price, offerPresent = 0, weight, name, count }: any) => {
    const present = price * (offerPresent) / 100
    return (
        <div
            className='flex justify-between h-[131px] w-[455px] items-center'
        >
            <Link href={link} className='flex gap-2 justify-center items-center'>
                <Image
                    src={image}
                    alt={name}
                    width={133}
                    height={131}
                />
                <div className='h-[80px] w-[1px] bg-[#EDEDED]'></div>
                <div className='flex flex-col gap-2 items-start justify-center'>
                    <h2 className='text-[#353535] text-xl font-bold'>{name}</h2>
                    <div className='flex items-center justify-start gap-2'>
                        <div className='bg-[#626262] aspect-square w-[6px] rounded-full'></div>
                        <h3 className='text-sm text-[#626262]'>{weight} گرم</h3>
                    </div>
                </div>
            </Link>
            <div className='flex justify-center items-center gap-2'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-[#C62020] text-sm font-bold flex justify-center items-center gap-1'>
                        <p>{formatNumber(present * count)}</p>
                        <Image
                            src='/Image/red-Tooman.svg'
                            alt='تومان'
                            width={22}
                            height={15}
                        />
                        <p>تخفیف</p>
                    </div>
                    <div className='text-[#353535] text-xl font-bold flex gap-2 justify-center items-center'>
                        <h2>{formatNumber((price - present) * count)}</h2>
                        <Image
                            src='/Image/Tooman.svg'
                            alt='تومان'
                            width={24}
                            height={16}
                        />
                    </div>
                </div>
                <div className='h-[80px] w-[1px] bg-[#EDEDED]'></div>
                <div className='flex justify-center items-center gap-2'>
                    <h2 className='text-[#353535] text-xl font-bold'>{count}</h2>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='bg-[#E0F1E9] hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
                            <Image
                                src='/iconSax/add.svg'
                                alt='add product count'
                                width={20}
                                height={20}
                            />
                        </div>
                        <>
                            {count > 1 ?
                                <div className='bg-[#E0F1E9] hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
                                    <Image
                                        src='/iconSax/minus.svg'
                                        alt='minus product count'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                :
                                <div className='bg-[#E0F1E9] hover:bg-[#C1E2D2] rounded-lg text-[#3D8361] p-1.5 cursor-pointer'>
                                    <Image
                                        src='/iconSax/trash.svg'
                                        alt='delete product'
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopingCardItem