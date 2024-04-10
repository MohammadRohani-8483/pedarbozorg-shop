'use client'
import Icon from '@/components/Icon'
import EmptyList from '@/components/profile/EmptyList'
import ProfileBox from '@/components/profile/ProfileBox'
import { authState } from '@/public/redux/store/auth'
import { createFakeOrder, order } from '@/public/types/orders'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Scrollbar } from 'swiper/modules';
import Link from 'next/link'

type activeList = 'preparing' | 'completed' | 'cancelled'

type itemProps = {
    icon: string
    title: string
    count: number
    activeList: activeList
    nameList: activeList
    setActiveList: (list: activeList) => void
}

type orderItemsProps = {
    list: order[]
    activeList: activeList
}

const OrdersPage = () => {
    const userInfo = useSelector((state: { auth: authState }) => state.auth.userInfo)

    const [activeList, setActiveList] = useState<activeList>('preparing')
    const [fakeOrders, setFakeOrders] = useState<order[]>([])
    useEffect(() => {
        const arr = Array(20).fill(1).map(item => createFakeOrder())
        setFakeOrders(arr)
    }, [])



    return (
        <ProfileBox title='لیست سفارش ها'>
            <div className='flex flex-col justify-center w-full items-center gap-4'>
                <div className='flex justify-center w-full items-center'>
                    <OrderItem title="جاری" icon='/Image/orders-list/current-order.svg' count={userInfo.preparing_orders} activeList={activeList} nameList='preparing' setActiveList={setActiveList} />
                    <OrderItem title="ارسال شده" icon='/Image/orders-list/posted-order.svg' count={userInfo.completed_orders} activeList={activeList} nameList='completed' setActiveList={setActiveList} />
                    <OrderItem title="لغو شده" icon='/Image/orders-list/canceled-order.svg' count={userInfo.cancelled_orders} activeList={activeList} nameList='cancelled' setActiveList={setActiveList} />
                </div>
                <ActiveOrderItems activeList={activeList} list={fakeOrders} />
            </div>
        </ProfileBox>
    )
}

export default OrdersPage

const OrderItem = ({ icon, title, count, activeList, setActiveList, nameList }: itemProps) => {
    return (
        <div
            onClick={() => setActiveList(nameList)}
            className={`flex justify-center items-center gap-2 ${activeList === nameList ? "border-b-[3px] border-secondry-base" : "border-b-2 border[#E3E3E3]"} pb-2 md:pb-4 w-full cursor-pointer`}
        >
            <div className={`flex flex-col items-center justify-center gap-2 ${activeList === nameList ? "text-secondry-base" : "text-neutral-500"} text-base font-bold md:text-secondry-base`}>
                <Image
                    src={icon}
                    alt={title}
                    width={64}
                    height={64}
                    className='hidden md:block'
                />
                {title}
            </div>
            <div className={`${activeList === nameList ? "text-white bg-[url('/Image/background/bg-number-active-orders.svg')]" : "bg-[url('/Image/background/bg-number-orders.svg')] text-secondry-base"}  bg-cover w-[70px] h-[82px] bg-no-repeat hidden md:flex justify-center items-center font-bold text-3xl`}>
                {count}
            </div>
        </div>
    )
}

const ActiveOrderItems = ({ list, activeList }: orderItemsProps) => {
    const activeOrderList = list.filter(list => {
        const nameList = (list.level === 1 || list.level === 2) ? "preparing" : list.level
        return nameList === activeList
    })
    return (
        <div className='w-full flex flex-col max-h-[732px] gap-4 overflow-auto ltr px-2' id='scroll'>
            {activeOrderList.length > 0 ?
                activeOrderList.map((order, i, array) => (
                    <React.Fragment key={order.id}>
                        <div className='min-h-[171px] w-full relative bg-white flex flex-col gap-4 justify-center items-start'>
                            <div className='w-full flex justify-between items-start'>
                                <div className={`flex justify-center items-center ${order.level === 'cancelled' ? " text-error-base" : "text-secondry-base"} font-bold gap-4`}>
                                    <h3>
                                        {order.level === 1 ?
                                            "در صف بررسی"
                                            :
                                            order.level === 2 ?
                                                "درحال پردازش"
                                                :
                                                order.level === 'completed' ?
                                                    "ارسال شده"
                                                    :
                                                    'لغو شده'
                                        }
                                    </h3>
                                    <div className='flex gap-2 justify-center items-center'>
                                        {order.level !== 'cancelled' ?
                                            <>
                                                <div className='size-2 rounded-full bg-secondry-base' />
                                                <div className={`size-2 rounded-full ${order.level !== 1 ? "bg-secondry-base" : "bg-neutral-400"}`} />
                                                <div className={`size-2 rounded-full ${order.level === 'completed' ? "bg-secondry-base" : "bg-neutral-400"}`} />
                                            </>
                                            :
                                            Array(3).fill(1).map((_, i) => (
                                                <div key={i} className='size-2 rounded-full bg-error-base' />
                                            ))
                                        }
                                    </div>
                                </div>
                                <p className='text-sm text-neutral-500'>
                                    {order.createdAt.year}/{order.createdAt.month}/{order.createdAt.day}
                                </p>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='gap-1 flex justify-center items-center'>
                                    <p className='text-sm text-neutral-500'>
                                        شماره سفارش
                                    </p>
                                    <p className='text-sm text-neutral-700'>
                                        {order.id}
                                    </p>
                                </div>
                                <div className='gap-1 flex justify-center items-center'>
                                    <p className='text-sm text-neutral-500'>
                                        مبلغ
                                    </p>
                                    <p className='text-sm text-neutral-700'>
                                        {order.price.toLocaleString()}
                                    </p>
                                    <Icon nameIcon='ToomanSquarelightGray' size={20} />
                                </div>
                            </div>
                            <Swiper
                                slidesPerView={'auto'}
                                spaceBetween={8}
                                freeMode={true}
                                scrollbar={{
                                    el: `.scrollbar${i}`,
                                    draggable: true,
                                }}
                                modules={[FreeMode, Scrollbar]}
                                className="mySwiper w-full !pb-2"
                            >
                                {Array(3).fill(1).map((_,i) => (
                                    <SwiperSlide key={i} className='!w-20'>
                                        <Image
                                            src='/Image/offer-products/ard-nokhodchi.png'
                                            width={80}
                                            height={80}
                                            alt='product'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className={`scrollbar${i} h-1 !z-20 !w-full !-m-2`} />
                            <Link href={order.slug} className='absolute bottom-0 left-0 rectangle-btn text-secondry-base text-sm flex justify-center items-center gap-2 z-20'>
                                جزئیات سفارش
                                <Icon nameIcon='arrow-left-viewall-btn' size={20} />
                            </Link>
                        </div>
                        {array.length > i + 1 && <div className='min-h-[2px] w-full bg-[#E3E3E3]' />}
                    </React.Fragment >
                ))
                :
                <div className='pt-4'>
                    <EmptyList />
                </div>
            }
        </div >
    )
}