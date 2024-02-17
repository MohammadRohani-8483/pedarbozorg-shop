import React from 'react'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'

export const BannerHomePage: React.FC = () => {
    return (
        <div
            className='mt-20 max-w-[1136px] w-[90%] mx-auto'>
            <Link
                href="/"
            >
                <div
                    className='relative aspect-[1136/172] hidden md:block w-full min-w-[250px]'
                >
                    <Image
                        alt='Banner Pedar Bozorg'
                        fill
                        src="/Image/pedarbozorg-single-banner/Desktop.png"
                        className='max-w-[1136px] mx-auto '
                    />
                </div>
                <div
                    className='relative md:hidden block aspect-[2237/633] w-full min-w-[250px]'
                >
                    <Image
                        alt='Banner Pedar Bozorg'
                        fill
                        src="/Image/pedarbozorg-single-banner/Mobile.jpg"
                        className='rounded-lg'
                    />
                </div>
            </Link>
        </div>
    )
}
