import React from 'react'

const OTPInput = ({ ref, i }: any) => {
    console.log(ref[0].ref)
    return (
        <input
            ref={ref[0].ref}
            type="text"
            className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#CBCBCB] focus:border-gray-700 focus:text-gray-800 text-gray-500 transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            maxLength={1}
        />
    )
}

export default OTPInput