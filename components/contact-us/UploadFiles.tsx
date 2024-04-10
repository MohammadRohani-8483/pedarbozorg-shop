'use client'
import Image from 'next/image'
import React from 'react'

export default function UploadFiles() {
    return (
        <div className='flex flex-col lg:flex-row lg:py-12 items-center justify-center lg:justify-around w-full  outline-none border border-gray-400 rounded-lg text-black p-4 gap-4 lg:gap-0'>
            <Image
                src='/iconSax/document-upload.svg'
                alt='document upload'
                width={64}
                height={64}
            />
            <p className="text-base text-neutral-600 text-center">حداکثر ۵ تصویر jpeg یا png حداکثر یک مگابایت، یک ویدیو mp4 حداکثر ۵۰ مگابایت</p>
            <label htmlFor="upload" className="rectangle-btn cursor-pointer border border-secondry-base rounded-lg flex gap-2 justify-center items-center text-secondry-base text-base hover:bg-secondry-tint-7">
                <Image
                    src='/iconSax/upload-green.svg'
                    alt='document upload'
                    width={24}
                    height={24}
                />
                بارگذاری عکس یا ویدئو
            </label>
            <input id="upload" type="file" className="hidden" accept="image/png, image/jpeg, video/mp4" multiple />
        </div>
    )
}
