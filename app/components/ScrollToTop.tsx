'use client'
import React, { useEffect, useState } from 'react'
import { PiCaretUp } from "@/node_modules/react-icons/pi/index";

const ScrollToTop = () => {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`bg-[#E0F1E9] fixed bottom-0 left-4 rounded-lg p-1.5 md:p-2 mb-16 z-20 items-center text-base-300 text-xl md:text-2xl hover:bg-[#C1E2D2] ${isVisible ? 'opacity-1' : 'opacity-0'}`}
            onClick={scrollToTop}
        >
            <PiCaretUp />
        </button>)
}

export default ScrollToTop