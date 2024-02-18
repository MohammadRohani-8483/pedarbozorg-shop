/* eslint-disable @next/next/no-img-element */
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
import SignUpSignIn from './signUp_signIn/signUpSignIn';

const Header: React.FC = () => {
    const [isTop, setIsTop] = useState(true);
    const [openSearchBar, setOpenSearchBar] = useState(true)
    const [openSearchBarMobile, setOpenSearchBarMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isHoverLogin, setIsHoverLogin] = useState(false)
    const [isFormOpen, setIsFormOpen] = useState(false)


    const handleScroll = () => {
        if (window.scrollY > 80) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const [searchValue, setSearchValue] = useState("")
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        !isTop && !focus && setOpenSearchBar(false)

    }, [focus, isTop])

    const variants = {
        openSearch: {
            y: 0
        },
        closeSearch: {
            y: "-50px"
        }
    }

    const visibleCard = () => {
        setIsHover(true)
        setTimeout(() => {
            setIsVisible(true)
        }, 200)
    }

    // useEffect(() => {
    //     hovering ? 
    //     setIsVisible(true) 
    //     :
    //     setIsVisible(false)

    // }, [hovering])


    const hiddenCard = () => {
        setIsVisible(false)
        setTimeout(() => {
            setIsHover(false)
        }, 200)
    }

    return (
        <>
            <header
                id="header"
                className={`w-screen fixed z-50 bg-base-100 hidden lg:flex justify-between px-14 transition-all duration-500 border-b ${openSearchBar ? "h-[117px]" : "h-20"} ${isTop ? 'border-base-100' : "border-base-200"}`}
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
                            handleOpenSearch={() => setOpenSearchBar(true)}
                            handleCloseSearch={() => {
                                setOpenSearchBar(false)
                                setSearchValue('')
                                setFocus(true)
                            }}
                            openSearchBar={openSearchBar}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            setFocus={setFocus}
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
                    <button
                        onClick={() => {
                            setIsFormOpen(true)
                            document.documentElement.classList.add('overflow-hidden')
                            setIsHoverLogin(true)
                            setTimeout(() => setIsHoverLogin(false), 800)
                        }}
                        onMouseOver={() => setIsHoverLogin(true)}
                        onMouseOut={() => setIsHoverLogin(false)}
                        className="w-[162px] border-base-100 hover:border-base-200 flex items-center gap-3 bg-base-300 hover:bg-base-400 text-base-100 text-sm md:text-base md:py-2 md:px-4 px-3 py-1.5 border-4 rounded-xl"
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
                            {/* <Image
                                src="/iconSax/right-arrow.svg"
                                width={24}
                                height={24}
                                alt="login"
                            /> */}
                        </div>
                        ورود/ثبت نام
                        {isFormOpen && <SignUpSignIn setIsFormOpen={setIsFormOpen} />}
                    </button>
                    <div className='py-3'
                        onMouseOver={() => {
                            // !isHover && visibleCard()
                            setIsHover(true)
                            document.documentElement.classList.add('overflow-hidden')
                        }}
                        onMouseOut={() => {
                            // isVisible && hiddenCard()
                            setIsHover(false)
                            document.documentElement.classList.remove('overflow-hidden')
                        }}
                    >
                        <button className="w-[38px] relative outline-btn square-btn">
                            <Image
                                src='/iconSax/shopping-cart.svg'
                                width={22}
                                height={22}
                                alt="shoping cart"
                                className='w-[22px] h-[22px] w-full'
                            />
                            {isHover && <ShopingCard isVisible={isVisible} />}
                        </button>
                    </div>
                </div>
            </header>

            <header
                id="header"
                className={`w-screen h-16 fixed z-40 overflow-auto bg-base-100 flex lg:hidden justify-between px-6 py-3 transition-all duration-500 border-b ${isTop ? 'border-base-100' : "border-base-200"}`}
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
                <div className='flex items-center gap-1'>
                    <button
                        onClick={() => {
                            setIsFormOpen(true)
                            document.documentElement.classList.add('overflow-hidden')
                            setIsHoverLogin(true)
                            setTimeout(() => setIsHoverLogin(false), 800)
                        }}
                        className='border-base-100 hover:border-base-200 flex items-center gap-3 bg-base-300 hover:bg-base-400 text-base-100 text-sm md:text-base md:p-2 p-2 border-4 rounded-xl'
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
                            {/* <Image
                                src="/iconSax/right-arrow.svg"
                                width={24}
                                height={24}
                                alt="login"
                            /> */}
                        </div>
                        {isFormOpen && <SignUpSignIn setIsFormOpen={setIsFormOpen} />}
                    </button>
                    <button className='square-btn outline-btn'
                    >
                        <Image
                            src='/iconSax/shopping-cart.svg'
                            width={22}
                            height={22}
                            alt="shoping cart"
                        />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header

