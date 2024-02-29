'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as images from 'public/data/sliderProductImages';

const SliderProductItems = (
    {
        imageIndex,
        animateIndex,
    }: any
) => {
    const duration = 0.3

    return (
        <>
            <motion.img
                style={{ position: 'absolute', ...images.styleImage2[imageIndex] }}
                src={images.image2[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : '-100vw',
                    y: animateIndex ? 0 : -200,
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleImage1[imageIndex] }}
                src={images.image1[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : '-100vw',
                    y: animateIndex ? 0 : -200,
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleImage3[imageIndex] }}
                src={images.image3[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : '-100vw',
                    y: animateIndex ? 0 : -200,
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon1[imageIndex] }}
                src={images.icon1[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : 300,
                    y: animateIndex ? 0 : '-100vh',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon2[imageIndex] }}
                src={images.icon2[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : '100vw',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon3[imageIndex] }}
                src={images.icon3[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : 300,
                    y: animateIndex ? 0 : '100vh',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon4[imageIndex] }}
                src={images.icon4[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : -300,
                    y: animateIndex ? 0 : '-100vh',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon5[imageIndex] }}
                src={images.icon5[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : '-100vw',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                style={{ position: 'absolute', ...images.styleIcon6[imageIndex] }}
                src={images.icon6[imageIndex]}
                animate={{
                    x: animateIndex ? 0 : -300,
                    y: animateIndex ? 0 : '100vh',
                    opacity: animateIndex ? 1 : 0
                }}
                transition={{
                    duration: duration,
                    ease: 'easeInOut',
                }}
            />
        </>
    )
}

export default SliderProductItems