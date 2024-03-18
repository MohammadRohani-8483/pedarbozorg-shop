import React from 'react'
import CommunicationItems from './CommunicationItems'

const Communications = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4 w-full'>
      <CommunicationItems
      icon='/iconSax/call.svg'
      title='تلفن های تماس'
      descs={[
          {
            key: 'تلفن فروشگاه',
            value: '۰۲۱-۴۴۶۱۲۷۵۲',
            link: 'tel:+982144612752'
          },
          {
            key: 'تلفن سفارشات',
            value: '۰۲۱-۴۴۸۹۹۲۱۰',
            link: 'tel:+982144899210'
          },
          {
            key: 'تلفن همراه مدیر عامل',
            value: '۰۹۱۹۴۰۶۰۸۰۵',
            link: 'tel:+989194060805'
          },
        ]}
      />
      <CommunicationItems
        title='ایمیل'
        desc='Pedarbozorg.busiuness@gmail.com'
        icon='/iconSax/mail.svg'
        link="mailto:Pedarbozorg.busiuness@gmail.com"
        />
      <CommunicationItems
        icon='/iconSax/bg-location.svg'
        title='آدرس فروشگاه مرکزی'
        desc='تهران،جنت آباد مرکزی، خیابان کبیری طامه(شاهین شمالی) ۲۰ متری گلستان غربی،پلاک ۱۵'
      />
    </div>
  )
}

export default Communications