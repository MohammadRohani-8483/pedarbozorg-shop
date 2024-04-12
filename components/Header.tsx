"use client"
import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import Image from "@/node_modules/next/image";
import Menu from "./Menu";
import Link from "@/node_modules/next/link";
import SearchMobile from './SearchMobile';
import MenuMobile from './MenuMobile';
import { motion } from 'framer-motion';
import ShopingCard from './ShopingCard';
import { useDispatch, useSelector } from 'react-redux';
import { cart } from '@/public/types/productType';
import { authState } from '@/public/redux/store/auth';
import ProfileMenu from './ProfileMenu';
import SignUpSignIn from './signUp_signIn/SignUpSignIn';
import SkeletonLoginBtn from './SkeletonLoginBtn';
import SkeletonShoppingCart from './SkeletonShoppingCart';
import Alert from './Alert';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/public/redux/hooks';
import { logoutUser } from '@/public/redux/actions/authActions';
import { getCartFromLocalStorage } from '@/public/redux/store/cart';

const Header: React.FC = () => {
    const [isTop, setIsTop] = useState(true);
    const [openSearchBar, setOpenSearchBar] = useState(true)
    const [openSearchBarMobile, setOpenSearchBarMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isHoverLogin, setIsHoverLogin] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [focus, setFocus] = useState(false)
    const [start, setStart] = useState(false)

    const [isProfileVisible, setIsProfileVisible] = useState(false)
    const [isProfileHover, setIsProfileHover] = useState(false)
    const [isLogOut, setIsLogOut] = useState(false)

    const { replace } = useRouter()

    const [cartLength, setCartLength] = useState(0)

    const cart = useSelector((state: { cart: cart }) => state.cart.cartItems)
    const { userInfo, isLogedIn } = useSelector((state: { auth: authState }) => state.auth)

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    }

    useEffect(() => {
        setCartLength(cart?.length!)
    }, [cart])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setStart(true)
    }, []);

    useEffect(() => {
        focus && searchValue.length > 0 ?
            document.documentElement.classList.add('overflow-hidden')
            :
            document.documentElement.classList.remove('overflow-hidden')
    }, [focus, searchValue])

    useEffect(() => {
        !focus && setOpenSearchBar(isTop)
    }, [focus, isTop])

    const variants = {
        openSearch: {
            y: 0
        },
        closeSearch: {
            y: "-50px"
        }
    }
    useEffect(() => {
        setFocus(searchValue.length > 0)
    }, [searchValue])

    const handleFormSignInOpen = () => {
        setIsFormOpen(true)
        document.documentElement.classList.add('overflow-hidden')
        setIsHoverLogin(true)
        setTimeout(() => setIsHoverLogin(false), 800)
    }

    const dispatch = useAppDispatch()
    const { userToken } = useSelector((state: { auth: authState }) => state.auth)

    const handleLogOut = async () => {
        replace('/')
        await dispatch(logoutUser({ access: userToken.access!, refresh: userToken.refresh! }))
        dispatch(getCartFromLocalStorage())
    }

    return (
        <>
            <header
                id="header"
                className={`w-screen fixed z-50  hidden lg:flex justify-between px-14 transition-all duration-800  ${openSearchBar ? "h-[117px]" : "h-20"} ${isTop ? 'border-background' : "border-secondry-tint-7 bg-background border-b"}`}
            >
                <Link className={`h-14 ${openSearchBar ? "mt-5" : "mt-3"} w-14 relative pl-16`}
                    href={"/"}
                >
                    <Image
                        src="/Image/Logo.svg"
                        alt="logo"
                        fill
                        className='w-[56px]'
                    />
                </Link>
                <div className={`${openSearchBar && "mt-5"} mt-5 mr-28 flex flex-col justidy-center items-center w-[calc(100%-420px)] ltr`}>
                    <div className={`flex ${openSearchBar ? "justidy-center ltr" : "justify-end"} w-full`}>
                        <SearchBar
                            handleOpenSearch={() => {
                                setOpenSearchBar(true)
                                !isTop && setFocus(true)
                            }}
                            handleCloseSearch={() => {
                                !isTop && setOpenSearchBar(false)
                                setSearchValue('')
                                setFocus(false)
                            }}
                            openSearchBar={openSearchBar}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            setFocus={setFocus}
                            focus={focus}
                        />
                    </div>
                    <motion.div
                        className='w-full flex justify-center mt-1'
                        animate={openSearchBar ? "openSearch" : "closeSearch"}
                        variants={variants}
                        transition={{ duration: 0.3 }}
                    >
                        <Menu />
                    </motion.div>
                </div>
                <div className="flex gap-4 items-center h-20 w-auto">
                    {start ?
                        isLogedIn ?
                            <>
                                <motion.div className='py-3'
                                    onHoverStart={() => {
                                        setIsProfileVisible(true)
                                        setIsProfileHover(true)
                                    }}
                                    onHoverEnd={() => setIsProfileHover(false)}
                                >
                                    <div className='relative'>
                                        <Link href='/profile' className='w-[162px] outline-btn rectangle-btn h-10 flex gap-2 justify-center items-center'>
                                            <Image
                                                src='/iconSax/user-square.svg'
                                                alt="user account"
                                                width={24}
                                                height={24}
                                            />
                                            <p className='text-base text-secondry-base max-w-[98px] overflow-hidden text-ellipsis'>
                                                {userInfo.first_name || userInfo.last_name ?
                                                    `${userInfo?.first_name || ""} ${userInfo?.last_name || ""}`
                                                    :
                                                    userInfo.user?.username
                                                }
                                            </p>
                                        </Link>
                                        {isProfileVisible && <ProfileMenu isHover={isProfileHover} setIsLogOut={setIsLogOut} />}
                                    </div>
                                </motion.div>
                                {isLogOut &&
                                    <Alert
                                        confirmFunc={handleLogOut}
                                        messageToast='با موفقیت از حساب خود خارج شدید'
                                        setIsAlertOpen={setIsLogOut}
                                        textBtn='خروج از حساب'
                                        title='خروج از حساب کاربری' redBtn
                                    >
                                        <p className='text-neutral-800 w-full text-right'>
                                            برای سفارش و مشاهده سبد خرید بایستی وارد حساب خود باشید
                                        </p>
                                    </Alert>
                                }
                            </>
                            :
                            <button
                                onClick={handleFormSignInOpen}
                                onMouseOver={() => setIsHoverLogin(true)}
                                onMouseOut={() => setIsHoverLogin(false)}
                                className="w-[162px] border-background hover:border-secondry-tint-7 flex items-center gap-3 bg-secondry-base hover:bg-secondry-shade-2 text-background text-sm md:text-base md:py-2 md:px-4 px-3 py-1.5 border-4 rounded-[10px]"
                            >
                                <div className='flex w-[20px] gap-1 h-[20px] overflow-hidden bg-[url("/iconSax/login-bg-btn.svg")] bg-contain bg-no-repeat bg-right'>
                                    <motion.img
                                        animate={isHoverLogin ? { x: 24 } : { x: 0 }}
                                        transition={{ duration: 0.2 }}
                                        src="/iconSax/right-arrow.svg"
                                        width={16}
                                        height={24}
                                        alt="login"
                                        loading='lazy'
                                        decoding='async'
                                        data-nimg={1}
                                        style={{ color: 'transparent' }}
                                    />
                                    <motion.img
                                        animate={isHoverLogin ? { x: 20 } : { x: 0 }}
                                        transition={{ duration: 0.2 }}
                                        src="/iconSax/right-arrow.svg"
                                        width={16}
                                        height={24}
                                        alt="login"
                                        loading='lazy'
                                        decoding='async'
                                        data-nimg={1}
                                        style={{ color: 'transparent' }}
                                    />
                                </div>
                                ورود/ثبت نام
                            </button>
                        :
                        <SkeletonLoginBtn />
                    }
                    {isFormOpen && <SignUpSignIn setIsFormOpen={setIsFormOpen} />}
                    {start ?
                        <motion.div className='py-3'
                            onHoverStart={() => {
                                setIsVisible(true)
                                setIsHover(true)
                            }}
                            onHoverEnd={() => setIsHover(false)}
                        >
                            <div className='relative'>
                                <Link href='/checkout-cart'>
                                    <button className='w-[38px] outline-btn square-btn'>
                                        <Image
                                            src='/iconSax/shopping-cart.svg'
                                            width={22}
                                            height={22}
                                            alt="shoping cart"
                                            className='w-[22px] h-[22px] w-full'
                                        />
                                        {cartLength !== 0 &&
                                            <div className="absolute px-1.5 py-0 rounded-md bg-red-500 text-white text-xs flex justify-center items-center top-0.5 right-0.5">
                                                {cartLength}
                                            </div>
                                        }
                                    </button>
                                </Link>
                                {isVisible && <ShopingCard isVisible={isHover} />}
                            </div>
                        </motion.div>
                        :
                        <SkeletonShoppingCart />
                    }
                </div>
            </header>

            <header
                id="header"
                className={`w-screen h-16 fixed z-40 overflow-auto bg-background flex lg:hidden justify-between px-6 py-3 transition-all duration-500 border-b ${isTop ? 'border-background' : "border-secondry-tint-7"}`}
            >
                <div className='flex items-center gap-2'>
                    <button
                        className='square-btn outline-btn'
                        onClick={() => {
                            setIsMenuOpen(true)
                            document.documentElement.classList.add('overflow-hidden')
                        }}
                    >
                        <Image
                            src='/iconSax/menu-mobile.svg'
                            width={22}
                            height={22}
                            alt="menu"
                        />
                    </button>
                    {isMenuOpen &&
                        <MenuMobile
                            setIsMenuOpen={setIsMenuOpen}
                        />
                    }
                    <button
                        className='square-btn outline-btn'
                        onClick={() => {
                            setOpenSearchBarMobile(true)
                            document.documentElement.classList.add('overflow-hidden')
                        }
                        }
                    >
                        <Image
                            src='/iconSax/search-mobile.svg'
                            width={22}
                            height={22}
                            alt="Search bar"
                        />
                    </button>
                    {openSearchBarMobile &&
                        <SearchMobile
                            setOpenSearchBar={setOpenSearchBarMobile}
                        />
                    }
                </div>
                <Link href="/">
                    <div>
                        <Image
                            src="/Image/Logo-mobile.svg"
                            alt="logo"
                            width={46}
                            height={44}
                        />
                    </div>
                </Link>
                <div className='flex items-center justify-center gap-1'>
                    {isLogedIn ?
                        <Link href='/profile' className='outline-btn square-btn'>
                            <Image
                                src='/iconSax/user-square.svg'
                                alt="user account"
                                width={22}
                                height={22}
                            />
                        </Link>
                        :
                        <div
                            onClick={() => {
                                setIsFormOpen(true)
                                document.documentElement.classList.add('overflow-hidden')
                                setIsHoverLogin(true)
                                setTimeout(() => setIsHoverLogin(false), 800)
                            }}
                            className='border-background hover:border-secondry-tint-7 flex items-center gap-3 bg-secondry-base hover:bg-secondry-shade-2 text-background text-sm md:text-base md:p-2 p-2 border-4 rounded-[10px]'
                        >
                            <div className='flex w-[20px] gap-1 h-[20px] overflow-hidden bg-[url("/iconSax/login-bg-btn.svg")] bg-contain bg-no-repeat bg-right'>
                                <motion.img
                                    animate={isHoverLogin ? { x: 24 } : { x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    src="/iconSax/right-arrow.svg"
                                    width={16}
                                    height={24}
                                    alt="login"
                                    loading='lazy'
                                    decoding='async'
                                    data-nimg={1}
                                    style={{ color: 'transparent' }}
                                />
                                <motion.img
                                    animate={isHoverLogin ? { x: 20 } : { x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    src="/iconSax/right-arrow.svg"
                                    width={16}
                                    height={24}
                                    alt="login"
                                    loading='lazy'
                                    decoding='async'
                                    data-nimg={1}
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                            {isFormOpen && <SignUpSignIn setIsFormOpen={setIsFormOpen} />}
                        </div>
                    }
                    <Link href='/checkout-cart' className='square-btn outline-btn relative'>
                        <Image
                            src='/iconSax/shopping-cart.svg'
                            width={22}
                            height={22}
                            alt="shoping cart"
                        />
                        {cartLength !== 0 &&
                            <div className="absolute px-1.5 py-0 rounded-md bg-red-500 text-white text-xs flex justify-center items-center top-0.5 right-0.5">
                                {cart?.length}
                            </div>
                        }
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header

