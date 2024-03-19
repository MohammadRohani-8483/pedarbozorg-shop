import AboutUsItem from '@/components/about-us/AboutUsItem'
import SkeletonCard from '@/components/SkeletonCard'
import Title from '@/components/Title'
import Image from 'next/image'
import React from 'react'

const page = () => {
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
      <main className='w-[90%] mx-auto max-w-[1136px] flex flex-col justify-center items-center gap-16 md:gap-20 py-20 md:py-[117px]'>
        <Title>درباره ما</Title>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col md:flex-row w-full justify-center items-center gap-4 md:gap-8'>
            <div className='relative size-40 md:size-[370px]'>
              <Image
                src='/Image/logo-login.svg'
                alt='flower'
                fill
              />
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-2 md:gap-8'>
              <h2 className='text-2xl md:text-[44px] text-base-300 font-bold text-center'>
                فروشگاه پدربزرگ
              </h2>
              <p className='text-sm md:text-lg text-justify leading-6'>
                &quot;پدربزرگ&quot; به عنوان یک استارتاپ فعال و پر انرژی در زمینه فروش محصولات ارگانیک شناخته می‌شود. ما از اصول پایداری به عنوان راهبرد اصلی خود الهام گرفته‌ایم و از طریق ارائه‌ی محصولات با کیفیت، به جلب توجه به سلامت و زندگی سبز مشتریان خود می‌پردازیم. &quot;پدربزرگ&quot; یک سفر فراتر از خرید و فروش است، بلکه یک تجربه ارگانیک است که در آن هر دانه یک داستان طعم و سلامت به خود دارد.
              </p>
            </div>
          </div>
          <Image
            src='/iconSax/flower.svg'
            alt='flower'
            width={40}
            height={40}
          />
          <AboutUsItem
            desc='"پدربزرگ" به عنوان نماینده برجسته در دنیای محصولات ارگانیک، تنوع بی‌پایانی از خوراکی‌ها تا محصولات بهداشتی را ارائه می‌دهد. اینجا هر دانه، یک داستان جذاب از زیبایی و سلامت است. از لذت گرفتن از هر ذره تا کشف طیف گسترده ای از خواص غذایی.'
            image='/Image/about-us/Item1.svg'
            title='تنوع محصولات ارگانیک'
            leftImage
          />
          <Image
            src='/iconSax/flower.svg'
            alt='flower'
            width={40}
            height={40}
          />
          <AboutUsItem
            desc='ما با دقت به انتخاب محصولات با کیفیت بالا و ارگانیک می‌پردازیم. هر گام از تولید تحت نظر کشاورزان ما و بر اساس استانداردهای بین‌المللی ارگانیک انجام می‌شود. از لحظه کاشت تا دست‌یابی به دست مشتریان، کیفیت به عنوان اصلی‌ترین اولویت ما درخشیده و حفظ می‌شود.'
            title='کیفیت بالا و مشخصات ارگانیک'
            image='/Image/about-us/Item2.svg'
          />
          <Image
            src='/iconSax/flower.svg'
            alt='flower'
            width={40}
            height={40}
          />
          <AboutUsItem
            desc='"پدربزرگ" با تعهد به حفظ محیط زیست، از راهکارهای سازگار با محیط زیست در تمام فرآیند تولید و توزیع محصولات استفاده می‌کند. با کمینه کردن اثرات جانبی بر زیستگاه مشتریان، به ترویج مدیریت محیط زیستی پویا می‌پردازد.'
            title='توجه به محیط زیست'
            image='/Image/about-us/Item3.svg'
            leftImage
          />
          <Image
            src='/iconSax/flower.svg'
            alt='flower'
            width={40}
            height={40}
          />
          <AboutUsItem
            desc='ارتباط نزدیک با مشتریان یکی از ارزش‌های بزرگ "پدربزرگ" است. ما با ارائه خدمات مشتریان برتر و ارتباط نزدیک با مشتریان، به دنبال ایجاد ارتباط دوسویه قوی و اعتماد بیشتر با جامعه‌ی مشتریان خود هستیم. نظرات و بازخوردهای شما برای ما ارزشمند است و ما به بهبود مستمر خدماتمان متعهدیم.'
            title='ارتباط نزدیک با مشتریان'
            image='/Image/about-us/Item4.svg'
          />
        </div>
      </main>
    </>
  )
}

export default page