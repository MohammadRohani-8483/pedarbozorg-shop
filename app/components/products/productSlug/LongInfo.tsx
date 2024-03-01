'use client'
import React, { useEffect, useState } from 'react'
import Benefits from './Benefits'

const LongInfo = () => {
    const [itemInfo, setItemInfo] = useState('معرفی')
    const itemsInfo = [
        {
            name: "معرفی",
            scrollFrom: 0,
            scrollTo: 480,
            endScroll: 480
        },
        {
            name: "مشخصات",
            scrollFrom: 481,
            scrollTo: 760,
            endScroll: 760
        },
        {
            name: "فواید",
            scrollFrom: 761,
            scrollTo: 890,
            endScroll: 890
        },
        {
            name: "نظرات کاربران",
            scrollFrom: 891,
            scrollTo: 1120,
            endScroll: 11000020
        }
    ]

    const isBrowser = () => typeof window !== 'undefined';

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        for (let item of itemsInfo) {
            if (scrollY >= item.scrollFrom && scrollY <= item.endScroll) {
                setItemInfo(item.name);
                break;
            }
        }
    }, [scrollY]);

    return (
        <div className='w-full flex flex-col gap-7'>
            <div className='w-full max-w-[490px] flex justify-between items-center'>
                {itemsInfo.map((item) => (
                    <div key={item.name}
                        className={`w-full text-center p-2 border-b-2 ${item.name === itemInfo ? "border-base-300 text-base-300" : "border-[#E3E3E3] text-[#ADADAD]"} font-bold text-base cursor-pointer`}
                        onClick={() => {
                            setItemInfo(item.name)
                            if (!isBrowser()) return;
                            window.scrollTo({ top: item.scrollTo, behavior: 'smooth' });
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='w-[90%] mx-auto flex flex-col gap-4 justify-center items-center'>
                <div className='w-full flex flex-col justify-center items-start gap-2 border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-base-300'>
                        معرفی
                    </h3>
                    <p className='text-lg text-black text-justify'>
                        جوابگوی آنچنان پیوسته بیشتری را سوالات از جوابگوی و نرم افزارها سادگی مورد نیاز شناخت و آینده داشت و طراحان فراوان فعلی اصلی است و دشواری متنوع و طراحان و مورد نیاز ابزارهای کاربردی سوالات و با اساسا ایجاد سخت مورد نیاز اصلی با هدف طراحان بیشتری را گذشته اهل کرد می طلبد شناخت متنوع می توان کتابهای و کاربردهای را دستاوردهای در دنیای چاپگرها حروفچینی و با کرد به پایان که، طراحی فراوان علی الخصوص  اهل فعلی شصت و سه درصد بهبود بهبود لازم و مجله در زبان فارسی  در که، تمام سادگی شرایط را فراوان طراحان طراحان خلاقی بیشتری را دنیای و و فرهنگ پیشرو و آینده سادگی سوالات طراحان خلاقی گذشته
                    </p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start w-full border-b-2 border-[#E3E3E3] py-2'>
                    <h3 className='text-xl font-bold text-base-300'>
                        مشخصات
                    </h3>
                    <div className='flex flex-col gap-4 '>
                        <div className='flex justify-center items-center gap-4'>
                            <p className='text-[#ADADAD] text-sm'>
                                حالت فیزیکی:
                            </p>
                            <h3 className='text-base text-[#626262] font-bold'>
                                جامد
                            </h3>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <p className='text-[#ADADAD] text-sm'>
                                حالت فیزیکی:
                            </p>
                            <h3 className='text-base text-[#626262] font-bold'>
                                جامد
                            </h3>
                        </div>
                    </div>
                </div>
                <Benefits />
            </div>
        </div>
    )
}

export default LongInfo