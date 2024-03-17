import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'
import AddToCartItem from './AddToCartItem'

const AddToCartBox = ({ product }: any) => {
    return (
        <div className='fixed bottom-0 z-20 lg:z-0 lg:static flex flex-col p-2 lg:p-4 items-center justify-center gap-2 lg:gap-5 w-full lg:max-w-[465px] bg-white lg:bg-opacity-75 lg:rounded-3xl border border-[#E3E3E3] h-[180px] lg:h-auto lg:max-h-[450px]'>
            <Image
                src="/Image/Logo-mobile.svg"
                alt="logo"
                width={60}
                height={56}
                className='hidden lg:flex'
            />
            {product.variants.length > 0 ?
                <div id='scroll' className='ltr flex flex-col overflow-auto p-1 lg:p-0 w-full gap-1.5 lg:gap-4'>
                    <h2 className='text-[#626262] font-bold text-base hidden lg:flex gap-1 justify-center items-center'>
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
                    <div className='hidden lg:flex h-[1px] w-full bg-[#E3E3E3]' />
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
                </div>
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