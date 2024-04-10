import Image from 'next/image'
import React from 'react'

type props = {
    activeOrder: string
    setActiveOrder: (par: string) => void
    orders: {
        id: number
        value: string
        name: string
    }[]
}

const Ordering = ({ activeOrder, setActiveOrder, orders }: props) => {
    return (
        <div className='hidden lg:flex gap-2 w-'>
            <Image
                src='/iconSax/sort.svg'
                alt='sort'
                width={24}
                height={24}
            />
            <h2 className='text-xl text-secondry-base font-bold whitespace-nowrap'>مرتب سازی</h2>
            {orders.map((order: any) => {
                return (
                    activeOrder === order.value ?
                        <div className='bg-secondry-base text-sm text-white px-3 py-1.5 rounded-md cursor-pointer whitespace-nowrap' defaultValue={order.value} key={order.id}>
                            {order.name}
                        </div>
                        :
                        <div
                            className='text-secondry-base text-sm px-3 py-1.5 cursor-pointer whitespace-nowrap'
                            key={order.id}
                            onClick={() => {
                                setActiveOrder(order.value)
                            }}
                        >
                            {order.name}
                        </div>
                )
            })}
        </div>
    )
}

export default Ordering