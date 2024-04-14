import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type props = {
    children: any
    title: string
    linkBtn?: string
    bgImage: string
    CustomBtn?: any
}

const ProfileBox = ({ children, title, linkBtn, bgImage, CustomBtn }: any) => {
    return (
        <div className={`flex flex-col w-full p-4 md:p-8 gap-6 items-center justify-center bg-white border border-[#E3E3E3] rounded-2xl ${bgImage ? "bg-[url('/Image/background/bg-info-box.svg')] bg-no-repeat bg-[length:80%] bg-right-top" : ""}`}>
            {title &&
                <div className='flex justify-between items-center w-full text-secondry-base text-base font-bold'>
                    {title}
                    {linkBtn &&
                        <Link href={linkBtn}>
                            <button className='px-3 py-1.5 text-sm flex gap-2 text-secondry-base font-medium'>
                                مشاهده همه
                                <Image
                                    src='/iconSax/arrow-left-viewall-btn.svg'
                                    width={20}
                                    height={20}
                                    alt='arrow left'
                                />
                            </button>
                        </Link>
                    }
                    {CustomBtn && <CustomBtn />}
                </div>
            }
            {children}
        </div>
    )
}

export default ProfileBox