import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AvailableProductsToggle = ({ isAvailable, setIsAvailable }: any) => {
    return (
        <motion.div
            transition={{ type: "tween" }}
            whileHover={{ backgroundColor: '#F9F9F9' }}
            className="overflow-hidden h-12 border-gray-200 border text-base-300 rounded-2xl bg-white flex flex-col pr-4 py-3 pl-3 justify-start items-start transition-all w-full gap-4"
            style={{ height: "auto" }}
        >
            <div
                className='w-full flex justify-between items-center text-base-300'
            >
                <div className='flex justify-center items-center gap-1'>
                    <h1>
                        فقط کالاهای موجود
                    </h1>
                    {isAvailable && <div className='w-2 h-2 bg-[#FFC436] rounded-full'></div>}
                </div>
                <div className='flex items-center justify-center'>
                    <input type="checkbox" id="toggle"
                        onChange={(e: any) => setIsAvailable(e.target.checked)}
                        checked={isAvailable}
                    />
                    <label htmlFor="toggle" id='label_toggle'></label>
                </div>
            </div>
        </motion.div>
    )
}

export default AvailableProductsToggle