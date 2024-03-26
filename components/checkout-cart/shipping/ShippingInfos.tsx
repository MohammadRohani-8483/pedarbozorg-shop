import { deleteAllItems, removeFromCart } from '@/public/redux/store/cart'
import { shopCartItem } from '@/public/types/productType'
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

type props = {
  addresses: address[]
}

const ShippingInfos = ({ addresses }: props) => {
  const [addAddressIsOpen, setAddAddressIsOpen] = useState(false)

  const [addAddressFunc, setaddAddressFunc] = useState<(data: any) => void>((data: any) => { })

  const cart: shopCartItem[] = useSelector((state: any) => state.cart.cart)

  const [start, setStart] = useState(false)
  useEffect(() => {
    setStart(true)
  }, [])

  const activeAddress = addresses.find(address => address.is_active)

  return (
    <div className='flex flex-col bg-white rounded-2xl p-4 md:p-8 items-center justify-center w-full gap-8'>
      <div className='w-full flex flex-col items-start justify-center gap-4'>
        <h2 className='text-base font-bold text-base-300'>
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
              <p className='text-[#353535] leading-6 text-sm flex gap-1 items-center'>
                {activeAddress?.city !== activeAddress?.province && `${activeAddress?.province}/`}{activeAddress?.city}/{activeAddress?.address}/پلاک {activeAddress?.flat_no}/واحد {activeAddress?.unit_no}
              </p>
              <p className='text-[#757575] text-sm'>
                {activeAddress?.first_name} {activeAddress?.last_name}
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
            <p className='text-[#626262] text-sm'>
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
                confirmFunc={addAddressFunc}
                messageToast='آدرس با موفقیت اضافه شد'
                textBtn='افزودن'
                title='افزودن آدرس جدید'
                setIsAlertOpen={setAddAddressIsOpen}
              >
                <AddressForm addAddressFunc={setaddAddressFunc} />
              </Alert>
            }
          </>
        }
      </div>
      <div className='w-full flex flex-col items-start justify-center gap-4'>
        <h2 className='text-base font-bold text-base-300'>
          نحوه ارسال
        </h2>
        <div className='flex flex-col items-start justify-center gap-2'>
          <div className='text-[#353535] leading-6 text-sm flex gap-4 items-center'>
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
          <p className='text-[#626262] text-xs leading-5'>
            ارسال رایگان برای مناطق ۲، ۵ و ۲۲ تهران
            <br />
            سفارش‌های بالای {700} هزار تومان سایر مناطق تهران
            <br />
            سفارش‌های بالای {850} هزار تومان شهرستان‌ها
          </p>
        </div>
      </div>
      <div className='max-w-[688px] w-full'>
        {start ?
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
              {cart.map((product: any, i: number) => (
                <SwiperSlide key={crypto.randomUUID()} className='!w-[133px]'>
                  <OrdersCart
                    image={product?.product.featuredImage}
                    name={product?.product.name}
                    quantity={product?.quantity}
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