import Image from "next/image"
import { specialOffers } from "public/data/specialOffers"
import ProductCard from "../ProductCard"

const SpecialOffers = () => {
    return (
        <div className='flex max-w-[1136px] w-[90%] mx-auto flex-col gap-8 items-center mt-20'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-secondry-base'>پیشنهاد های ویژه</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-4 lg:gap-8 w-full">
                {
                    specialOffers.map((product) => (
                        <ProductCard
                            key={product.id}
                            price={product.price}
                            image={product.image}
                            link={product.link}
                            score={product.score}
                            priceWithOffer={product.price}
                            name={product.name}
                        />
                    ))
                }
            </div>
            <button className="solid-btn rectangle-btn">
                ورود به فروشگاه
            </button>
        </div>
    )
}
export default SpecialOffers