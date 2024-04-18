'use client'
import Loading from '@/app/loading'
import SubmitOrderBox from '@/components/checkout-cart/cart/SubmitOrderBox'
import OrderSteps from '@/components/checkout-cart/OrderSteps'
import ShippingInfos from '@/components/checkout-cart/shipping/ShippingInfos'
import { GET_ADDRESS } from '@/public/types/adress'
import { cart } from '@/public/types/productType'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'
import axios from 'axios'
import { authState } from '@/public/redux/store/auth'
import { submitCouponResponse } from '@/public/types/orders'

const ShippingPage = () => {
    const shipmentMethod = "CO"
    const { cartItems, id, successRedux } = useSelector((state: { cart: cart }) => state.cart)
    const { userToken, isLogedIn } = useSelector((state: { auth: authState }) => state.auth)
    const [start, setStart] = useState(false)
    const { replace } = useRouter()
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalSellPrice, setTotalSellPrice] = useState(0)
    const [addresses, setAddresses] = useState<GET_ADDRESS[]>([])
    const [submitCoupon, setsubmitCoupon] = useState<submitCouponResponse>()

    useEffect(() => {
        !isLogedIn && replace('/checkout-cart')
        document.title = 'پدربزرگ - اطلاعات ارسال'
        axios('/api/transaction-api/address/',
            {
                headers: {
                    Authorization: `JWT ${userToken.access}`
                }
            }
        )
            .then(({ data }) => {
                setAddresses(data.results)
                setStart(true)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setTotalFinalPrice(cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.final_price * current?.quantity!, 0))
        setTotalSellPrice(cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.sell_price * current?.quantity!, 0))
        cartItems.length < 1 && replace('/checkout-cart')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems])

    useEffect(() => {
        const activeAddressID = addresses.find(address => address.is_active)?.id
        activeAddressID &&
            axios.post(`/api/transaction-api/cart/${id}/submit_coupon/`,
                {
                    address: activeAddressID,
                    shipment_method: shipmentMethod
                },
                {
                    headers: {
                        Authorization: `JWT ${userToken.access}`
                    }
                })
                .then(res => {
                    setsubmitCoupon(res.data)
                    setStart(true)
                })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addresses])

    return (
        <>
            <Image
                src="/Image/background/vectors/tree-2.svg"
                alt="tree 2"
                width={219}
                height={218}
                className='top-2 left-0 absolute hidden md:block z-[-1]'
            />
            <Image
                src="/Image/background/vectors/tree-1.svg"
                alt="tree 1"
                width={152}
                height={192}
                className='top-12 right-0 absolute hidden md:block z-[-1]'
            />
            {start ?
                <>
                    <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-8 py-20 md:py-[117px]'>
                        <OrderSteps page='SHIPPING' />
                        <div className='flex flex-col md:flex-row w-full justify-center items-start gap-2 lg:gap-6'>
                            <div className="w-full flex flex-col justify-center items-start gap-4">
                                <ShippingInfos addresses={addresses} setAddresses={setAddresses} />
                                <Link href='/checkout-cart' className="flex justify-center items-center py-1.5 px-3 gap-2 text-secondry-base text-sm">
                                    <GoArrowRight size={20} />
                                    بازگشت به سبد خرید
                                </Link>
                            </div>
                            <SubmitOrderBox
                                countProduct={cartItems.length}
                                finalPrice={totalFinalPrice}
                                sellPrice={totalSellPrice}
                                discountProducts={totalSellPrice - totalFinalPrice}
                                discountProductsPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                                yourProfit={totalSellPrice - totalFinalPrice}
                                yourProfitPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                                page='SHIPPING'
                                shipmentPrice={submitCoupon?.shipment_cost}
                            />
                        </div>
                    </main>
                </>
                :
                <Loading />
            }
        </>
    )
}

export default ShippingPage