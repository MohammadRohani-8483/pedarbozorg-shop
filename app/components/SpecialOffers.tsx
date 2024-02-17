import { specialOffers } from "public/data/specialOffers"
import ProductCard from "./productCard"

const SpecialOffers = () => {
    return (
        <div className='flex max-w-[1136px] w-[90%] mx-auto flex-col gap-8 items-center mt-20'>
            <div className="text-center">
                <h1 className="font-bold text-2xl text-base-300">پیشنهاد های ویژه</h1>
            </div>
            <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 gfid-cols-1 justify-items-center gap-4 lg:gap-8 w-full">
                {
                    specialOffers.map((product) => (
                        <ProductCard
                            key={product.id}
                            price={product.price}
                            image={product.image}
                            link={product.link}
                            score={product.score}
                            offerPresent={product.offerPresent}
                            name={product.name}
                        />
                    ))
                }
            </div>
            <button className="solid-btn rectangle-btn">
                ورود/ثبت نام
            </button>
        </div>
    )
}
export default SpecialOffers