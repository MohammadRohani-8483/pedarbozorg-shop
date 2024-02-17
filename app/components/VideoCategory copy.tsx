import { videoCategory } from "@/public/data/videoCategory"
import { FaChevronLeft } from "react-icons/fa";
import Link from "@/node_modules/next/link";

export default function VideoCategory() {

    return (
        <div className="flex justify-between max-w-[1136px] mx-auto mt-24 items-center mt-20">
            {videoCategory.map((product, index) => (
                index % 2 === 0 ?
                    <div key={product.id} className="gap-4 flex flex-col">
                        <video autoPlay loop
                            className='object-cover w-[272px] h-[431px] rounded-3xl'
                            itemType="video/mp4"
                            src={product.video} />
                        <div className={`rounded-3xl w-[272px] h-[221px] text-${product.color}-300 bg-${product.color}-200 p-4 gap-4 flex flex-col items-center justify-center text-center`}>
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <p className={`text-lg`}>
                                {product.description}
                            </p>
                            <button className={` rounded-lg text-white bg-${product.color}-300 px-3 py-1.5 text-sm`}>
                                <Link
                                    className="flex justify-center items-center gap-2"
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
                        <div className={`rounded-3xl w-[272px] h-[221px] text-${product.color}-300 bg-${product.color}-200 p-4 gap-4 flex flex-col items-center justify-center text-center`}>
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <p className={`text-lg`}>
                                {product.description}
                            </p>
                            <button className={` rounded-lg text-white bg-${product.color}-300 px-3 py-1.5 text-sm`}>
                                <Link
                                    className="flex justify-center items-center gap-2"
                                    href={product.link}
                                >
                                    خرید
                                    <FaChevronLeft />
                                </Link>
                            </button>
                        </div>
                        <video autoPlay loop
                            className='object-cover w-[272px] h-[362px] rounded-3xl'
                            itemType="video/mp4"
                            src={product.video}
                        />
                    </div>
            ))}
        </div>
    )
}
