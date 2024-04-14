import { cart } from '@/public/types/productType'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { address } from '@/public/types/adress'
import formatNumber from '@/public/Functions/formatNumber'
import SkeletonCard from '@/components/SkeletonCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Scrollbar } from 'swiper/modules';

import OrdersCart from 'components/checkout-cart/OrdersCart'
import Alert from '@/components/Alert'
import AddressForm from '@/components/AddressForm'
import axios from 'axios'

type props = {
  addresses: address[]
  setAddresses: (address: address[]) => void
}

const ShippingInfos = ({ addresses, setAddresses }: props) => {
  const [addAddressIsOpen, setAddAddressIsOpen] = useState(false)

  const [address, setAddress] = useState<address>()
  const [error, setError] = useState<string | null>()
  const [province, setProvince] = useState<string>()
  const [city, setCity] = useState<string>()

  const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)

  const [start, setStart] = useState(false)
  useEffect(() => {
    setStart(true)
  }, [])

  const activeAddress = addresses.find(address => address.isActive)

  useEffect(() => {
    if (!(address?.address?.length! > 0 && address?.province && address.city && address.flatNum && address.zipCode!.length > 0 && address.firstName!.length > 0 && address.lastName!.length > 0 && address.phoneNumber!.length > 0) || (address?.city === 1508 && !address.strict)) {
      setError('لطفا فیلد های ضروری را کامل نمایید')
    } else if (!/^[\u0600-\u06FF\s]+$/.test(address.address!)) {
      setError('لطفا ادرس خود را به فارسی وارد کنید')
    } else if (!/^[1-9]\d{9}$/.test(address.zipCode!)) {
      setError('لطفا کد پستی ادرس خود را صحیح وارد کنید')
    } else if (!/^[\u0600-\u06FF\s]+$/.test(address.firstName!) || !/^[\u0600-\u06FF\s]+$/.test(address.lastName!)) {
      setError('لطفا نام و نام خانوادگی خود را به فارسی وارد کنید')
    } else if (!/^09\d{9}$/.test(address.phoneNumber!)) {
      setError('لطفا شماره موبایل خود را صحیح وارد کنید')
    } else {
      setError(null)
    }
  }, [address])


  const handleAddAddress = () => {
    const newActiveAddress: address = { ...address, isActive: true }
    const newAddressArray = [
      ...addresses, newActiveAddress
    ]
    setAddresses(newAddressArray)
    setAddress({})
  }

  useEffect(() => {
    if (activeAddress) {
      axios(`/api/transaction-api/provinces/${activeAddress.province}/`)
        .then(res => {
          setProvince(res.data.name);
        })
      axios(`/api/transaction-api/cities/${activeAddress.city}/`)
        .then(res => {
          setCity(res.data.name);
        })
    }
  }, [activeAddress])


  return (
    <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full gap-8'>
      <div className='w-full flex flex-col items-start justify-center gap-4'>
        <h2 className='text-base font-bold text-secondry-base'>
          انتخاب آدرس تحویل سفارش
        </h2>
        {addresses.length > 0 ?
          <>
            <div className='flex justify-center items-center gap-4'>
              <Image
                src='/iconSax/bg-location.svg'
                alt='Location'
                width={24}
                height={24}
              />
              <p className='text-neutral-800 leading-6 text-sm flex gap-1 items-center'>
                <>
                  {city !== province && `${province}/`}{city}/{activeAddress?.address}/پلاک {activeAddress?.flatNum}{activeAddress?.unitNum && `/واحد ${activeAddress?.unitNum}`}
                </>
              </p>
              <p className='text-neutral-600 text-sm'>
                {activeAddress?.firstName} {activeAddress?.lastName}
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <button className="solid-btn rectangle-btn">
                تغییر آدرس
              </button>
            </div>
          </>
          :
          <>
            <p className='text-neutral-700 text-sm'>
              تا کنون آدرسی اضافه نکرده اید
            </p>
            <button
              onClick={() => setAddAddressIsOpen(true)}
              className="solid-btn rectangle-btn w-full"
            >
              افزودن آدرس
            </button>
            {addAddressIsOpen &&
              <Alert
                confirmFunc={handleAddAddress}
                messageToast='آدرس با موفقیت اضافه شد'
                textBtn='افزودن'
                title='افزودن آدرس جدید'
                setIsAlertOpen={setAddAddressIsOpen}
                error={error}
              >
                <AddressForm setAddress={setAddress} />
              </Alert>
            }
          </>
        }
      </div>
      <div className='w-full flex flex-col items-start justify-center gap-4'>
        <h2 className='text-base font-bold text-secondry-base'>
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

export default ShippingInfos