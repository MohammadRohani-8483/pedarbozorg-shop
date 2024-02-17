import { videoCategory } from "@/public/data/videoCategory"
import { FaChevronLeft } from "react-icons/fa";
import Link from "@/node_modules/next/link";

export default function VideoCategory() {

    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 lg:gap-4 max-w-[1136px] w-[90%] mx-auto mt-20 justify-items-center">
            {videoCategory.map((product, index) => (
                index % 2 === 0 ?
                    <div key={product.id} className="lg:gap-4 gap-2 flex flex-col">
                        <video autoPlay loop
                            className='object-cover max-w-[272px] w-full h-[431px] rounded-3xl'
                            itemType="video/mp4"
                            src={product.video}
                        />
                        <div className={`rounded-3xl max-w-[272px] w-full lg:h-[221px] h-[200px] text-${product.color}-300 bg-${product.color}-200 p-4 gap-4 flex flex-col items-center justify-center text-center`}>
                            <h1 className="lg:text-2xl text-base font-bold">{product.name}</h1>
                            <p className={`lg:text-lg text-sm`}>
                                {product.description}
                            </p>
                            <button className={`rounded-lg text-white bg-${product.color}-300 text-sm`}>
                                <Link
                                    className="flex justify-center items-center gap-2 hover:backdrop-brightness-[0.8] w-full h-full px-3 py-1.5 rounded-lg"
                                    href={product.link}
                                >
                                    خرید
                                    <FaChevronLeft />
                                </Link>
                            </button>
                        </div>
                    </div>
                    :
                    <div key={product.id} className="gap-4 flex flex-col">
                        <div className={`rounded-3xl max-w-[272px] w-full lg:h-[221px] h-[200px] text-${product.color}-300 bg-${product.color}-200 p-4 gap-4 flex flex-col items-center justify-center text-center`}>
                            <h1 className="lg:text-2xl text-base font-bold">{product.name}</h1>
                            <p className={`lg:text-lg text-sm`}>
                                {product.description}
                            </p>
                            <button className={`rounded-lg text-white bg-${product.color}-300 text-sm`}>
                                <Link
                                    className="flex justify-center items-center gap-2 hover:backdrop-brightness-[0.8] w-full h-full px-3 py-1.5 rounded-lg"
                                    href={product.link}
                                >
                                    خرید
                                    <FaChevronLeft />
                                </Link>
                            </button>
                        </div>
                        <video autoPlay loop
                            className='object-cover max-w-[272px] w-full h-[431px] rounded-3xl'
                            itemType="video/mp4"
                            src={product.video}
                        />
                    </div>
            ))}
        </div>
    )
}
