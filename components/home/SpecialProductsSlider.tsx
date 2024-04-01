'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import SliderBtn from '../SliderBtn';
import { specialProductsSlider } from '@/public/data/specialProducts';
import { cart, cartItem, vipProducts } from '@/public/types/productType';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '@/public/redux/store/auth';
import { AppDispatch } from '@/public/redux/store';
import { getCartFromServer, makeCartItem } from '@/public/redux/actions/cartActions';
import { addToCart, setCartToLocalStorage } from '@/public/redux/store/cart';

type prop = {
    products: vipProducts
    productToCart: any[]
}

export default function SpecialProductsSlider({ products, productToCart }: prop) {
    const cartItems: cartItem[] = productToCart?.map(product => ({
        variant: {
            id: product.cheapest_variant_id,
            image: product.featured_image,
            name: product.name,
            product: {
                id: product.id,
                featured_image: product.featured_image,
                name: product.name,
                slug: product.slug
            },
            shatoot_info: {
                discount: product.min_price - product.min_sell_price,
                final_price: product.min_price,
                sell_price: product.min_sell_price
            }
        }
    }))

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const auth = useSelector((state: { auth: authState }) => state.auth)

    const dispatch = useDispatch<AppDispatch>()
    const handleAddToCart = async (index: number) => {
        if (auth.isLogedIn) {
            await dispatch(makeCartItem({ quantity: 1, token: auth.userToken.access!, variant: cartItems[index].variant.id }))
            dispatch(getCartFromServer(auth.userToken.access!))
        } else {
            dispatch(addToCart(cartItems[index]))
            dispatch(setCartToLocalStorage())
        }
    }
    return (
        <div className='mt-20 text-center max-w-[1136px] w-[90%] flex flex-col mx-auto lg:gap-8 gap-4'>
            <div className='flex items-center justify-center gap-4'>
                <Image
                    src="/Image/title-vecors/right.svg"
                    alt="right"
                    width={69}
                    height={69}
                />
                <h1 className='font-bold text-2xl text-base-300'>محصولات ویژه</h1>
                <Image
                    src="/Image/title-vecors/left.svg"
                    alt="left"
                    width={69}
                    height={69}
                />
            </div>
            <div className='justify-between flex mt-6 items-center w-full gap-4 md:gap-8 lg:gap-16'>
                <SliderBtn prev className='prev-special-btn' />
                <Swiper
                    navigation={{
                        nextEl: '.next-special-btn',
                        prevEl: '.prev-special-btn',
                    }}
                    modules={[Navigation]}
                    className="mySwiper text-right"
                    loop={true}
                    spaceBetween={80}
                >
                    {specialProductsSlider.map((product, i) => {
                        const isProductToCart = Boolean(cart.find((item) => item.variant.id === cartItems[i].variant.id))
                        return (
                            <SwiperSlide
                                key={product.id}
                                className='px-8'
                            >
                                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8 ltr'>
                                    <div className='relative aspect-[404/400] lg:max-w-[404px] max-w-xs min-w-[190px] min-h-[153px] w-4/5 h-4/5'>
                                        <Image
                                            src={product.image}
                                            fill
                                            alt={product.name}
                                            className='object-cover'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-8'>
                                        <h1 className='text-base-300 text-2xl text-center font-bold'>{product.name}</h1>
                                        <div className='flex flex-col gap-2 text-center text-base text-base-300 w-full'>
                                            {product.advantages.map((advantage) => (
                                                <div key={advantage.id} className='bg-base-200 min-w-[190px] w-full max-w-[368px] rounded-lg py-2 sm:px-4 text-[10px] sm:text-xs md:text-sm lg:text-base'>
                                                    <p className='whitespace-nowrap'>{advantage.title}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex items-center justify-center gap-2 w-full'>
                                            <Link href={product.slug}>
                                                <button className='solid-btn rectangle-btn'>
                                                    مشاهده محصول
                                                </button>
                                            </Link>
                                            <button className='outline-btn square-btn'
                                                onClick={() => !isProductToCart && handleAddToCart(i)}
                                            >
                                                <Image
                                                    src="/iconSax/shopping-cart.svg"
                                                    width={22}
                                                    height={22}
                                                    alt="shoping cart"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <SliderBtn next className='next-special-btn' />
            </div>
        </div >
    )
}
