import Icon from '@/components/Icon'
import formatNumber from '@/public/Functions/formatNumber'
import { productDetail } from '@/public/types/products'
import Image from 'next/image'
import React from 'react'
import AddToCartItem from './AddToCartItem'

type props = {
    product: productDetail
}

const AddToCartBox = ({ product }: props) => {
    const { variants, min_price, max_price, slug } = product
    return (
        <div className='fixed bottom-0 z-20 lg:z-0 lg:static flex flex-col p-2 lg:p-4 items-center justify-center gap-2 lg:gap-5 w-full lg:max-w-[465px] bg-white lg:bg-opacity-75 lg:rounded-2xl border border-[#E3E3E3] h-[180px] lg:h-auto lg:max-h-[450px]'>
            <Image
                src="/Image/Logo-mobile.svg"
                alt="logo"
                width={60}
                height={56}
                className='hidden lg:flex'
            />
            {variants.length > 0 ?
                <div id='scroll' className='ltr flex flex-col overflow-auto p-1 lg:p-0 lg:pr-1 w-full gap-3 lg:gap-8'>
                    <h2 className='text-neutral-700 font-bold text-base hidden lg:flex gap-1 justify-center items-center'>
                        از
                        {min_price &&
                            <span className='font-bold text-2xl text-secondry-base'>
                                {formatNumber(min_price)}
                            </span>
                        }
                        تا
                        {max_price &&
                            <span className='font-bold text-2xl text-secondry-base'>
                                {formatNumber(max_price)}
                            </span>
                        }
                        <Image
                            src='/Image/gray-Tooman.svg'
                            width={22}
                            height={22}
                            alt='تومان'
                        />
                    </h2>
                    {variants.sort((a, b) => a.shatoot_info.final_price - b.shatoot_info.final_price).map((variant) => (
                        <React.Fragment key={variant.id}>
                            <AddToCartItem
                                variant={variant}
                                product={product}
                                image={variant.image}
                                name={variant.shatoot_info.good_name}
                                price={variant.shatoot_info.sell_price}
                                priceWithOffer={variant.shatoot_info.final_price}
                                slug={slug}
                            />
                        </React.Fragment>
                    ))}
                </div>
                :
                <>
                    <h2 className='text-neutral-500 font-bold text-2xl'>
                        ناموجود
                    </h2>
                    <button className='w-full bg-secondry-tint-7 text-secondry-base text-base py-2 rounded-lg flex gap-2 justify-center items-center'>
                        <Icon size={24} nameIcon='alarm' />
                        موجود شد اطلاع بده
                    </button>
                </>
            }
        </div>
    )
}

export default AddToCartBox