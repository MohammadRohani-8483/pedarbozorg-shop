import Image from 'next/image'
import React from 'react'

const ImageGallery = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center w-full md:max-w-[312px]'>
            <div className='relative w-full aspect-square rounded-3xl overflow-hidden  border-2 border-[#E3E3E3]'>
                <Image
                    src="/Image/offer-products/ard-nokhodchi.png"
                    alt='Product'
                    fill
                />
            </div>
            <div className='w-full grid grid-cols-4 gap-2'>
                {Array.from({ length: 3 }, (_, i) => {
                    return (
                        <div key={i} className='relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#E3E3E3]'>
                            <Image
                                src="/Image/offer-products/ard-nokhodchi.png"
                                alt='Product'
                                fill
                            />
                        </div>
                    )
                })}
                <div className='relative w-full aspect-square rounded-3xl overflow-hidden flex justify-center items-center p-[31%] bg-white border-2 border-[#E3E3E3]'>
                    <div className='relative w-full h-full'>
                        <Image
                            src="/iconSax/GalleryWide.svg"
                            alt='Product'
                            fill
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full '></div>
        </div>
    )
}

export default ImageGallery