import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { specialProductsImageDesktop } from "public/data/specialProducts"

export default function SpecialProducts() {
    return (
        <div className="max-w-[1136px] min-w-[288px] mx-auto flex md:flex-row gap-8 md:gap-4 justify-center items-center flex-col w-[90%] mt-10">
            {
                specialProductsImageDesktop.map((banner) => (
                    <Link key={banner.id} href={banner.link} className='relative w-full aspect-[560/239]'>
                        <Image
                            src={banner.image}
                            alt={banner.name}
                            fill
                        />
                    </Link>
                ))
            }
        </div>
    )
}
