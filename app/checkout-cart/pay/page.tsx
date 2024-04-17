'use client'
import Loading from '@/app/loading'
import OrderSteps from '@/components/checkout-cart/OrderSteps'
import SubmitOrderBox from '@/components/checkout-cart/cart/SubmitOrderBox'
import PayInfos from '@/components/checkout-cart/pay/PayInfos'
import { useAppSelector } from '@/public/redux/hooks'
import { authState } from '@/public/redux/store/auth'
import { GET_ADDRESS } from '@/public/types/adress'
import { submitCouponResponse } from '@/public/types/orders'
import { cart } from '@/public/types/productType'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { GoArrowRight } from 'react-icons/go'

const PayPage = () => {
  const shipmentMethod = "CO"
  const { replace } = useRouter()
  const cart = useAppSelector((state: { cart: cart }) => state.cart)
  const { userToken } = useAppSelector((state: { auth: authState }) => state.auth)

  const [totalFinalPrice, setTotalFinalPrice] = useState(0)
  const [totalSellPrice, setTotalSellPrice] = useState(0)
  const [activeAddress, setActiveAddress] = useState<GET_ADDRESS>()
  const [submitCoupon, setsubmitCoupon] = useState<submitCouponResponse>()
  const [coupon, setCoupon] = useState<string | null>(null)
  const [pendingCoupon, setPendingCoupon] = useState(false)

  const [start, setStart] = useState(false)

  useEffect(() => {
    document.title = 'پدربزرگ - اطلاعات ارسال'
    axios('/api/transaction-api/address/',
      {
        headers: {
          Authorization: `JWT ${userToken.access}`
        }
      }
    )
      .then(res => {
        setActiveAddress(res.data.results.find((address: GET_ADDRESS) => address.is_active))
      })
    !activeAddress && setStart(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setTotalFinalPrice(cart.cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.final_price * current?.quantity!, 0))
    setTotalSellPrice(cart.cartItems.reduce((previous, current) => previous + current?.variant.shatoot_info.sell_price * current?.quantity!, 0))
  }, [cart])

  useEffect(() => {
    cart.cartItems.length < 1 && replace('/checkout-cart')

    const couponInfo = coupon ? {
      address: activeAddress?.id,
      shipment_method: shipmentMethod,
      coupon: coupon || ""
    }
      :
      {
        address: activeAddress?.id,
        shipment_method: shipmentMethod
      }

    if (activeAddress?.id) {
      setPendingCoupon(true)
      axios.post(`/api/transaction-api/cart/${cart?.id}/submit_coupon/`,
        couponInfo,
        {
          headers: {
            Authorization: `JWT ${userToken.access}`
          }
        })
        .then(({ data }) => {
          setsubmitCoupon(data)
          setPendingCoupon(false)
        })
        .catch(({ response }) => {
          toast.error(response.data.coupon[0])
          setCoupon(null)
          setPendingCoupon(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coupon])

  const paymentFunc = async () => {
    const couponInfo = coupon ? {
      address: activeAddress?.id,
      shipment_method: shipmentMethod,
      coupon: coupon ,
      payment_method: "ON"
    }
      :
      {
        address: activeAddress?.id,
        shipment_method: shipmentMethod,
        payment_method: "ON"
      }
    const { data } = await axios.post(`/api/transaction-api/cart/${cart?.id}/submit_order/`,
      couponInfo,
      {
        headers: {
          Authorization: `JWT ${userToken.access}`
        }
      })
      replace(data.url)
  }

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
            <OrderSteps page='PAY' />
            <div className='flex flex-col md:flex-row w-full justify-center items-start gap-2 lg:gap-6'>
              <div className="w-full flex flex-col justify-center items-start gap-4">
                <PayInfos
                  address={activeAddress!}
                  coupon={coupon}
                  setCoupon={setCoupon}
                  submitCoupon={submitCoupon}
                  pendingCoupon={pendingCoupon}
                />
                <Link href='/checkout-cart/shipping'
                  className="flex justify-center items-center py-1.5 px-3 gap-2 text-secondry-base text-sm"
                >
                  <GoArrowRight size={20} />
                  بازگشت به سبد خرید
                </Link>
              </div>
              <SubmitOrderBox
                countProduct={cart?.cartItems.length}
                finalPrice={submitCoupon?.total_final_price || totalFinalPrice}
                sellPrice={submitCoupon?.total_sell_price || totalSellPrice}
                discountProducts={submitCoupon?.product_discount_amount || (totalSellPrice - totalFinalPrice)}
                discountProductsPercent={submitCoupon?.product_discount_percent || ((totalSellPrice - totalFinalPrice) / totalSellPrice * 100)}
                yourProfit={submitCoupon?.your_profit_amount || (totalSellPrice - totalFinalPrice)}
                yourProfitPercent={submitCoupon?.your_profit_percent || ((totalSellPrice - totalFinalPrice) / totalSellPrice * 100)}
                page='PAY'
                shipmentPrice={submitCoupon?.shipment_cost}
                paymentFunc={paymentFunc}
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

export default PayPage