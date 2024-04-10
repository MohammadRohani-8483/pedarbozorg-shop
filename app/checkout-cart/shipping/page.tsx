'use client'
import Loading from '@/app/loading'
import SubmitOrderBox from '@/components/checkout-cart/cart/SubmitOrderBox'
import OrderSteps from '@/components/checkout-cart/OrderSteps'
import ShippingInfos from '@/components/checkout-cart/shipping/ShippingInfos'
import { address } from '@/public/types/adress'
import { cart } from '@/public/types/productType'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link'

const ShippingPage = () => {
    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalSellPrice, setTotalSellPrice] = useState(0)
    const [shipmentPrice, setShipmentPrice] = useState<number | null>(null)
    const [addresses, setAddresses] = useState<address[]>([])

    useEffect(() => {
        setTotalFinalPrice(cart.reduce((previous, current) => previous + current?.variant.shatoot_info.final_price * current?.quantity!, 0))
        setTotalSellPrice(cart.reduce((previous, current) => previous + current?.variant.shatoot_info.sell_price * current?.quantity!, 0))
    }, [cart])

    useEffect(() => {
        addresses.length > 0 &&
            setShipmentPrice(50000)
    }, [addresses])

    const { replace } = useRouter()

    const [start, setStart] = useState(false)
    useEffect(() => {
        setStart(true)
        cart.length < 1 && replace('/checkout-cart')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const TITLE = 'پدربزرگ - اطلاعات ارسال'

    useEffect(() => {
        document.title = TITLE
    }, [TITLE])

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
                                countProduct={cart?.length}
                                finalPrice={totalFinalPrice}
                                sellPrice={totalSellPrice}
                                discountProducts={totalSellPrice - totalFinalPrice}
                                discountProductsPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                                yourProfit={totalSellPrice - totalFinalPrice}
                                yourProfitPercent={(totalSellPrice - totalFinalPrice) / totalSellPrice * 100}
                                page='SHIPPING'
                                shipmentPrice={shipmentPrice}
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