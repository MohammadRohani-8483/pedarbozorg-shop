'use client'
import React from 'react'
import './style.css'

const DoubleRangeSlider = ({ max, inputFrom, setInputFrom, inputTo, setInputTo }: any) => {
    const step = 100000

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        const parsedValue = Number(value);

        if (name === 'min') {
            if (parsedValue > inputTo) {
                setInputFrom(inputTo);
            } else {
                setInputFrom(Math.min(parsedValue, inputTo));
            }
        } else if (name === 'max') {
            if (parsedValue < inputFrom) {
                setInputTo(inputFrom);
            } else {
                setInputTo(Math.max(parsedValue, inputFrom));
            }
        }
    };

    return (
        <div className='w-full'>
            <div className='relative bg-[#e0f1e9] rounded-sm h-[5px]'>
                <span className='bg-secondry-base rounded-[5px] h-full absolute'
                    style={{
                        right: `${inputFrom / max * 100}%`,
                        left: `${(max - inputTo) / max * 100}%`
                    }}
                >
                </span>
            </div>
            <div className='relative range_input'>
                <input
                    type="range"
                    name='min'
                    min={0}
                    max={max}
                    step={step}
                    value={inputFrom}
                    onChange={handleChange}
                />
                <input
                    type="range"
                    name='max'
                    min={0}
                    max={max}
                    step={inputTo > max - step * 2 ? step / 2 : step}
                    value={inputTo}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default DoubleRangeSlider