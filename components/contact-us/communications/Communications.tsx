import React from 'react'
import CommunicationItems from './CommunicationItems'

const Communications = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full'>
        <CommunicationItems 
        title='تلفن های تماس'
        descs={[
          {
            key: 'تلفن فروشگاه',
            value: '۰۲۱-۴۴۶۱۲۷۵۲'
          },
          {
            key: 'تلفن سفارشات',
            value: '۰۲۱-۴۴۸۹۹۲۱۰'
          },
          {
            key: 'تلفن همراه مدیر عامل',
            value: '۰۹۱۹۴۰۶۰۸۰۵'
          },
        ]} 
        />
        <CommunicationItems 
        title='ایمیل'
        desc='Pedarbozorg.busiuness@gmail.com'
        />
        <CommunicationItems 
        title='آدرس فروشگاه مرکزی'
        desc='تهران،جنت آباد مرکزی، خیابان کبیری طامه(شاهین شمالی) ۲۰ متری گلستان غربی،پلاک ۱۵'
        />
    </div>
  )
}

export default Communications