import { cart } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GET_ADDRESS } from '@/public/types/adress'
import formatNumber from '@/public/Functions/formatNumber'
import SkeletonCard from '@/components/SkeletonCard'
import { motion } from "framer-motion"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Scrollbar } from 'swiper/modules';

import OrdersCart from 'components/checkout-cart/OrdersCart'
import axios from 'axios'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import { submitCouponResponse } from '@/public/types/orders'

type props = {
    address: GET_ADDRESS
    coupon: string | null
    setCoupon: React.Dispatch<React.SetStateAction<string | null>>
    submitCoupon?: submitCouponResponse
    pendingCoupon: boolean
}

type paymentMethodProps = {
    activeIcon: string
    disableIcon: string
    isTooman?: boolean
    disable?: boolean
    title: string
    value?: string
    isActive: boolean
}

const PayInfos = ({ address, coupon, setCoupon, submitCoupon, pendingCoupon }: props) => {
    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const [inputValue, setInputValue] = useState('')

    const [province, setProvince] = useState<string>()
    const [city, setCity] = useState<string>()

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
    }, [])

    useEffect(() => {
        if (address) {
            axios(`/api/transaction-api/provinces/${address.province}/`)
                .then(res => {
                    setProvince(res.data.name);
                })
            axios(`/api/transaction-api/cities/${address.city}/`)
                .then(res => {
                    setCity(res.data.name);
                })
        }
    }, [address])

    const handleAddCoupon = (e?: any) => {
        e.preventDefault()
        if (inputValue) {
            setCoupon(inputValue)
        }
    }

    const handleDelteCoupon = () => {
        setCoupon(null)
        setInputValue('')
    }

    return (
        <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full gap-8'>
            <div className='w-full flex flex-col items-start justify-start gap-4'>
                <h2 className='text-base font-bold text-secondry-base'>
                    انتخاب نحوه پرداخت
                </h2>
                <PaymentMethod
                    activeIcon='wallet'
                    disableIcon='disable-wallet'
                    isTooman title='کیف پول'
                    // value={`موجودی: ${num.toLocaleString()}`}
                    isActive={false}
                    disable
                />
                <PaymentMethod
                    activeIcon='cards'
                    disableIcon='disable-cards'
                    title='پرداخت آنلاین'
                    value='پرداخت آنلاین با تمامی کارت‌های بانکی'
                    isActive={true}
                />
                <p className='leading-[180%] text-neutral-700 font-light text-xs'>
                    مبلغ کیف پول بطور خودکار از مبلغ قابل پرداخت کسر می‌گردد.
                </p>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-4'>
                <h2 className='text-base font-bold text-secondry-base'>
                    وارد کردن کد تخفیف
                </h2>
                <div className='flex flex-col justify-start items-start w-full gap-2'>
                    <form onSubmit={handleAddCoupon} className="w-full flex justify-center items-center gap-4">
                        <Input name='coupon'
                            placeholder='کد تخفیف'
                            value={coupon || inputValue}
                            setValue={setInputValue}
                            type='text'
                            disabled={Boolean(coupon) || pendingCoupon}
                        />
                        {pendingCoupon ?
                            <button className='relative flex justify-center solid-btn rectangle-btn w-[70px] h-10'>
                                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                                    <div className="relative border-t-transparent border-solid animate-[rereverse-spin_1s_ease-in-out_infinite] rounded-full border-white border-2 h-6 w-6">
                                    </div>
                                </div>
                                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                                    <div className="right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 border-t-transparent border-solid animate-[reverse-spin_1s_ease-in-out_infinite] rounded-full border-white border-2 h-3 w-3">
                                    </div>
                                </div>
                            </button>
                            :
                            coupon ?
                                <button onClick={handleDelteCoupon} className='rectangle-btn bg-error-base hover:bg-error-shade transition-all duration-300 rounded-lg text-white'>
                                    حذف
                                </button>
                                :
                                <button onClick={handleAddCoupon} className='solid-btn rectangle-btn'>
                                    اعمال
                                </button>
                        }
                    </form>
                    {submitCoupon?.discount_code_amount && submitCoupon?.discount_code_amount > 0 &&
                        <div className='leading-[180%] text-xs'>
                            <h4 className='text-secondry-base'>
                                {submitCoupon?.discount_code_amount.toLocaleString()} تومان از مبلغ سفارش کسر شد
                            </h4>
                            <p className='text-neutral-700'>
                                {submitCoupon?.discount_code_description}
                            </p>
                        </div>
                    }
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-4'>
                <h2 className='text-base font-bold text-neutral-700'>
                    آدرس تحویل سفارش
                </h2>
                <div className='flex flex items-start justify-start gap-4'>
                    <Icon nameIcon='location-gray' size={24} />
                    <p className='text-neutral-800 leading-6 text-sm flex gap-1 items-center'>
                        <>
                            {city !== province && `${province}/`}{city}{address?.strict ? `/منطقه ${address.strict}` : ""}/{address?.address}/پلاک {address?.flat_no}{address?.unit_no && `/واحد ${address?.unit_no}`}
                        </>
                    </p>
                    <p className='text-neutral-600 text-sm'>
                        {address?.first_name} {address?.last_name}
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-4'>
                <h2 className='text-base font-bold text-neutral-700'>
                    نحوه ارسال
                </h2>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='text-neutral-800 leading-6 text-sm flex gap-4 items-center'>
                        <span>ارسال با پست پیشتاز:</span>
                        <span>۳ تا ۵ روز کاری</span>
                        <span className='flex justify-center items-center gap-2'>
                            {formatNumber(45000)}
                            <Image
                                src='/Image/Tooman.svg'
                                alt='Tooman'
                                width={20.6}
                                height={14}
                            />
                        </span>
                    </div>
                    <p className='text-neutral-700 text-xs leading-5'>
                        ارسال رایگان برای مناطق ۲، ۵ و ۲۲ تهران
                        <br />
                        سفارش‌های بالای {700} هزار تومان سایر مناطق تهران
                        <br />
                        سفارش‌های بالای {850} هزار تومان شهرستان‌ها
                    </p>
                </div>
            </div>
            <div className='max-w-[688px] w-full'>
                {start && cart.length > 0 ?
                    <>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={32}
                            freeMode={true}
                            scrollbar={{
                                el: '.scrollbar',
                                draggable: true,
                            }}
                            modules={[FreeMode, Scrollbar]}
                            className="mySwiper !p-4 !-mx-4"
                        >
                            {cart.map((product) => (
                                <SwiperSlide key={product?.variant?.id} className='!w-[133px]'>
                                    <OrdersCart
                                        image={product?.variant?.product.featured_image}
                                        name={product?.variant?.name}
                                        quantity={product?.quantity!}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="scrollbar h-1"></div>
                    </>
                    :
                    <div className='flex w-full justify-between items-center'>
                        <div className='w-full flex justify-center'>
                            <SkeletonCard />
                        </div>
                        <div className='w-full flex justify-center'>
                            <SkeletonCard />
                        </div>
                        <div className='hidden lg:block w-full flex justify-center'>
                            <SkeletonCard />
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default PayInfos

const PaymentMethod = ({ activeIcon, disableIcon, isTooman, title, value, isActive, disable }: paymentMethodProps) => {
    return (
        <div className={`flex justify-start items-center gap-4 ${disable ? "opacity-50 cursor-not-allowed" : "cursor-pointer group/name"}`}>
            <div
                className={`!size-5 border rounded-full group-hover/name:bg-secondry-tint-7 group-hover/name:shadow-[0_0_0_5px_rgba(224,241,233,1)] transition-all duration-300 p-1 ${isActive ? "border-secondry-base" : "border-neutral-500"}`}
            >
                {isActive &&
                    <motion.div animate={{ opacity: 1 }} className='w-full h-full bg-secondry-base rounded-full' />
                }
            </div>
            <Icon nameIcon={isActive ? activeIcon : disableIcon} size={32} />
            <div className=' max-w-[65%]'>
                <h3 className='font-bold leading-[140%] text-neutral-700 text-base'>
                    {title}
                </h3>
                <div className='flex gap-2 justify-center items-center text-neutral-800 text-sm font-light'>
                    {value || ""}
                    {isTooman && value &&
                        <Image
                            src='/Image/Tooman/tooman-neutral-6-bold.svg'
                            width={20.6}
                            height={14}
                            alt='tooman'
                        />
                    }
                </div>
            </div>
        </div>
    )
}