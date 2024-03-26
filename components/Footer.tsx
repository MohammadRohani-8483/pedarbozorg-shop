'use client'
import React, { useState } from 'react'
import { menuItems } from '@/public/data/menuItems'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import { medias, symbols, companyProfile } from 'public/data/footer'
import MediaIcon from './MediaIcon'

const Footer: React.FC = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <footer className='flex flex-col items-center justify-center bg-[url("/Image/Footer-Mobile.png")] md:bg-[url("/Image/footer-bg.png")] bg-cover bg-no-repeat w-screen px-[10%] pt-[10%] md:pl-[5%] md:p-0 gap-8 md:gap-0'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center md:pt-[74px] md:pr-[5%] gap-6 md:gap-8 w-full'>
                <div className='w-[88%] max-w-[496px] flex flex-col justify-center gap-2 sm:gap-4 md:gap-8 items-center bg-[url("/Image/about-footer-bg.png")] bg-cover bg-no-repeat pr-[16%] sm:pr-[19%] md:pr-16 lg:pr-[94px] pl-[20%] sm:pl-[23%] md:pl-[75px] lg:pl-[118px] aspect-[496/501]'>
                    <Link
                        href="/"
                        className='relative w-[30%] sm:w-[40%] md:w-1/2 aspect-square'
                    >
                        <Image
                            alt='Logo Footer'
                            src='/Image/Logo.svg'
                            fill
                            className='object-cover'
                        />
                    </Link>
                    <p className='text-justify text-base-400 text-[9px] sm:text-xs md:text-sm lg:text-base'>
                        بزرگترین لذت ما این است که بتوانیم سهمی ولو اندک در سلامت و بهداشت روحی و جسمی و روش تغذیه خانواده ها داشته باشیم. دوست داریم همانند پدربزرگ ها ، هر آنچه که می دانیم ، بی منت در اختیار جامعه قرار دهیم. به همین جهت نام پدربزرگ را برای استارت اپ خود انتخاب کردیم.
                    </p>
                </div>
                <div className='flex flex-col gap-8 md:gap-20 w-full md:mt-20'>
                    <div className='flex flex-col md:flex-row gap-2 justify-center lg:justify-between items-center lg:w-[70%]'>
                        {
                            menuItems.map((menu) => (
                                <Link
                                    href={menu.link}
                                    key={menu.id}
                                    className='bg-base-200 text-base-300 rounded-lg py-1.5 px-3 text-sm lg:text-base whitespace-nowrap'
                                >
                                    {menu.item}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center lg:justify-end items-center lg:pl-[15%] w-full ltr'>
                        <div className='flex flex-col justify-center lg:justify-between gap-2 items-center rtl w-full lg:w-auto'>
                            {
                                companyProfile.map((item) => (
                                    <div
                                        key={item.id}
                                        className='flex w-full justify-between items-center text-base-300 rounded-2xl bg-[#E0F1E9] lg:w-[385px] h-auto py-2 px-4'
                                    >
                                        <div className={`whitespace-nowrap text-xs ${item.title === "ایمیل" ? "hidden sm:block" : ""}`}>{item.title}</div>
                                        <div className='ltr flex items-center justify-center gap-2 lg:gap-4'>
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={24}
                                                height={24}
                                            />
                                            {item.link ?
                                                <Link href={item.link} className='text-xs md:text-sm text-center font-bold'>{item.value}</Link>
                                                :
                                                <p className='text-xs md:text-sm text-center font-bold'>{item.value}</p>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex lg:flex-col justify-between lg:justify-around items-center rounded-2xl bg-[#E0F1E9] w-full lg:w-[107px] p-4 gap-4 h-[120px] lg:h-[268px]'>
                            <Link
                                href='/'
                                className='relative w-[87px] aspect-square lg:w-[74px]'
                            >
                                <Image
                                    alt='zarinpal'
                                    src="/Image/footer/symbols/zarinpal.svg"
                                    fill
                                /> 
                            </Link>
                            <Link
                                className='relative w-[87px] aspect-square lg:w-[74px]'
                                href="https://trustseal.enamad.ir/?id=442491&Code=fpIN0X9CJKuz2Rym1BNamoRVIobsmlM2"
                                referrerPolicy="origin" target="_blank"
                            >
                                <Image
                                    alt='enamad'
                                    src="/Image/footer/symbols/enamad.svg"
                                    fill
                                />
                            </Link>
                            <Link
                                href='/'
                                className='relative w-[87px] aspect-square lg:w-[74px]'
                            >
                                <Image
                                    alt='samandehi'
                                    src="/Image/footer/symbols/samandehi.svg"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className='flex lg:flex-col justify-between lg:justify-around items-center sm:w-1/2 aspect-[5/1] mt-4 lg:mt-0 lg:rounded-2xl lg:bg-[#E0F1E9] lg:w-[76px] lg:h-[268px] lg:py-4'>
                            {
                                medias.map((media) => (
                                    <MediaIcon
                                        key={media.id}
                                        icon={media.icon}
                                        iconHover={media.iconHover}
                                        link={media.link}
                                        name={media.name}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-4'>
                <p className='text-base-300 text-xs md:text-sm lg:text-base text-center'>تمامی حقوق مادی و معنوی این سامانه متعلق به فروشگاه<strong> پدربزرگ </strong>می‌باشد</p>
                <p className='text-base-300 text-xs md:text-sm lg:text-base'>طراحی شده توسط گروه فنی مهندسی<a target="_blank" rel="noopener noreferrer" className='font-bold text-[#3F3681]' href="https://codinto.ir"> کدینتو </a></p>
            </div>
        </footer>
    )
}

export default Footer