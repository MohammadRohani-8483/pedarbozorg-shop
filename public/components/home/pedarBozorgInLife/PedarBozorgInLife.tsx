import { pedarBozorgInLifeImages } from "public/data/pedarBozorgInLifeImage"
import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import BlogSlider from "./blogsDesktop/blogSlider"
import BlogsDemo from "./blogsMobile/BlogsDemo"

const PedarBozorgInLife = () => {
    return (
        <div className='flex flex-col gap-8 mx-auto justify-center items-center mt-10 lg:mt-20'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-base-300'>پدربزرگ در زندگی</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div
                className='flex max-w-[1136px] justify-center w-[90%] flex-wrap items-center gap-4'
            >
                {
                    pedarBozorgInLifeImages.map((item) => (
                        <Link key={item.id} href={item.link}
                            className='relative aspect-[368/201] max-w-[368px] w-[48%] min-w-[140px]'
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                            />
                        </Link>
                    ))
                }
            </div>
            <>
                <BlogSlider />
                <BlogsDemo />
            </>
            <Link href="/">
                <button className='square-btn outline-btn'>
                    مشاهده همه مقالات
                </button>
            </Link>
        </div>
    )
}

export default PedarBozorgInLife