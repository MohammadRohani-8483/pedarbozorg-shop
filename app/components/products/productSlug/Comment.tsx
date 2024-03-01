import Image from 'next/image'
import React from 'react'

const Comment = () => {
    const commentRate = 5
    return (
        <div className='flex flex-col gap-2 w-full justify-center items-center'>
            <div className='flex w-full h-6 justify-start items-center gap-6'>
                <div
                    className='flex justify-center items-center rounded-full gap-1 px-3 py-1 text-base text-white font-bold'
                    style={{ backgroundColor: commentRate === 5 ? "#3D8361" : commentRate === 4 ? "#4BA278" : commentRate === 3 ? "#DD9C00" : commentRate === 2 ? "#A9791C" : "#C62020" }}
                >
                    {commentRate}
                    <Image
                        src='/iconSax/like-yellow.svg'
                        alt="like"
                        width={16}
                        height={16}
                    />
                </div>
                <div className='text-sm text-[#ADADAD]'>
                    23 مهر
                </div>
                <div className='text-sm text-[#ADADAD]'>
                    پروین مظفری
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#EDEDED]' />
            <p className='text-base text-black leading-7 text-justify'>
                اهل طراحان موجود امید شرایط و سطر از علی الخصوص  شرایط شناخت با، که، متنوع سخت که بهبود متن موجود ساختگی کتابهای طراحی جوابگوی که، و سطر گرافیک داشت لورم راهکارها متخصصان اصلی اهل از ابزارهای کاربردی کرد علی الخصوص  و فرهنگ پیشرو در نامفهوم، ارائه ایپسوم
            </p>
            <div className='w-full h-[1px] bg-[#EDEDED]' />
            <div className='flex justify-between items-center w-full'>
                <Image
                    src='/iconSax/flag.svg'
                    alt="flag"
                    width={20}
                    height={20}
                />
                <div className='flex justify-center items-center gap-2 text-[#757575] text-base'>
                    <div className='flex justify-center items-center gap-1.5'>
                        1
                        <Image
                            src='/iconSax/dislike-red-regular.png'
                            alt="dislike"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-1.5'>
                        234
                        <Image
                            src='/iconSax/like-green-regular.svg'
                            alt="dislike"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment