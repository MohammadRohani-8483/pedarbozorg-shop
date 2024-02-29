'use client'
import Image from "@/node_modules/next/image"
import { BsArrowRight } from "@/node_modules/react-icons/bs/index";
import { menuItems } from "public/data/menuItems"
import Link from "@/node_modules/next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type MenuProps = {
    setIsMenuOpen: (value: boolean) => void,
}

const MenuMobile: React.FC<MenuProps> = ({ setIsMenuOpen }) => {
    const [isOpen, setIsOpen] = useState(true)
    const variants = {
        visible: {
            x: 0,
        },
        hidden: {
            x: "100vw",
        },
        bgHidden: {
            opacity: 0
        },
        bgVisible: {
            opacity: 1
        },
    };

    const handleClose = () => {
        setIsOpen(false)
        setTimeout(() => {
            setIsMenuOpen(false)
            document.documentElement.classList.remove('overflow-hidden')
        }, 200)
    }

    return (
        <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50'
            animate={isOpen ? "bgVisible" : "bgHidden"}
            initial={isOpen ? "bgHidden" : "bgVisible"}
            variants={variants}
            onClick={(e: any) => e.target.className === "fixed inset-0 bg-black bg-opacity-50 w-screen h-screen z-50" && handleClose()}
        >
            <motion.div
                className='bg-base-100 max-w-[255px] h-full flex flex-col items-center gap-8'
                animate={isOpen ? "visible" : "hidden"}
                initial={isOpen ? "hidden" : "visible"}
                variants={variants}
                transition={{ duration: 0.4 }}
            >
                <div className='h-16 w-full flex justify-between items-center border-b border-base-200 px-5 py-3'>
                    <BsArrowRight className='text-xl text-base-300 cursor-pointer'
                        onClick={handleClose}
                    />
                    <Image
                        alt="Pedarbozorg Shop"
                        src='/Image/Logo-mobile.svg'
                        width={42}
                        height={40}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-6 text-base-300 text-sm font-bold">
                    {menuItems.map((menu) => (
                        <Link href={menu.link} key={menu.id}
                            onClick={handleClose}
                        >
                            <h2>{menu.item}</h2>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MenuMobile