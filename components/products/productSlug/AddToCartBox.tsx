import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'
import AddToCartItem from './AddToCartItem'

const AddToCartBox = ({ product }: any) => {
    // console.log(product.min_price)
    return (
        <div className='hidden lg:flex flex-col p-4 items-center justify-center gap-5 w-full max-w-[465px] bg-white bg-opacity-75 rounded-3xl border border-[#E3E3E3]'>
            <Image
                src="/Image/Logo-mobile.svg"
                alt="logo"
                width={60}
                height={56}
            />
            {true ?
                <>
                    <h2 className='text-[#626262] font-bold text-base flex gap-1 justify-center items-center'>
                        از
                        {product.min_price &&
                            <span className='font-bold text-2xl text-base-300'>
                                {formatNumber(product.min_price || 0)}
                            </span>
                        }
                        تا
                        {product.max_price &&
                            <span className='font-bold text-2xl text-base-300'>
                                {formatNumber(product.max_price || 0)}
                            </span>
                        }
                        <Image
                            src='/Image/gray-Tooman.svg'
                            width={22}
                            height={22}
                            alt='تومان'
                        />
                    </h2>
                    <div className='h-[1px] w-full bg-[#E3E3E3]' />
                    {product.variants?.sort((a: any, b: any) => a.shatoot_info.final_price - b.shatoot_info.final_price).map((variant: any, i: number, array: Array<any>) => (
                        <React.Fragment key={variant.id}>
                            <AddToCartItem
                                product={variant}
                                image={variant.image}
                                name={variant.shatoot_info.good_name}
                                price={variant.shatoot_info.sell_price}
                                priceWithOffer={variant.shatoot_info.final_price}
                                slug={product.slug}
                            />
                            {i < array.length - 1 && <div className='h-[1px] w-full bg-[#E3E3E3]' />}
                        </React.Fragment>
                    ))}
                </>
                :
                <>
                    <h2 className='text-[#ADADAD] font-bold text-2xl'>
                        ناموجود
                    </h2>
                    <button className='w-full bg-base-200 text-base-300 text-base py-2 rounded-lg flex gap-2 justify-center items-center'>
                        <Image
                            src="/iconSax/alarm.svg"
                            alt="logo"
                            width={24}
                            height={24}
                        />
                        موجود شد اطلاع بده
                    </button>
                </>
            }
        </div>
    )
}

export default AddToCartBox