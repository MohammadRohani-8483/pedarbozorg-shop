import Image from 'next/image'
import React from 'react'

const ProfileBox = ({ children, title, viewBtn }: any) => {
    return (
        <div className='flex flex-col w-full p-4 md:p-8 gap-6 items-center justify-center bg-white border border-[#E3E3E3] rounded-3xl'>
            {title &&
                <div className='flex justify-between items-center w-full text-base-300 text-base font-bold'>
                    {title}
                    {viewBtn &&
                        <button className='px-3 py-1.5 text-sm flex gap-2 text-base-300 font-medium'>
                            مشاهده همه
                            <Image
                                src='/iconSax/arrow-left-viewall-btn.svg'
                                width={20}
                                height={20}
                                alt='arrow left'
                            />
                        </button>
                    }
                </div>
            }
            {children}
        </div>
    )
}

export default ProfileBox