import React from 'react'
import OrderItem from './OrderItem'
import ProfileBox from './ProfileBox'

const OrdersList = () => {
    return (
        <ProfileBox title='لیست سفارش ها' viewBtn>
            <div className='flex flex-col md:flex-row md:px-8 gap-4 justify-center md:justify-between w-full items-center'>
                <OrderItem title="جاری" icon='/Image/orders-list/current-order.svg' count={3} />
                <OrderItem title="ارسال شده" icon='/Image/orders-list/posted-order.svg' count={345} />
                <OrderItem title="لغو شده" icon='/Image/orders-list/canceled-order.svg' count={0} />
            </div>
        </ProfileBox>
    )
}

export default OrdersList