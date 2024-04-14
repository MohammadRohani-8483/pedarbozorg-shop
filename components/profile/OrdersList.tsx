import { authState } from '@/public/redux/store/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import ProfileBox from './ProfileBox'

const OrdersList = () => {
    const userInfo = useSelector((state: { auth: authState }) => state.auth.userInfo)

    return (
        <ProfileBox title='لیست سفارش ها' linkBtn="/profile/orders">
            <div className='flex flex-col md:flex-row md:px-8 gap-4 justify-center md:justify-between w-full items-center'>
                <OrderItem title="جاری" icon='/Image/orders-list/current-order.svg' count={userInfo.preparing_orders} />
                <OrderItem title="ارسال شده" icon='/Image/orders-list/posted-order.svg' count={userInfo.completed_orders} />
                <OrderItem title="لغو شده" icon='/Image/orders-list/canceled-order.svg' count={userInfo.cancelled_orders} />
            </div>
        </ProfileBox>
    )
}

export default OrdersList