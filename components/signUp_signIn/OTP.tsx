import React, { useState, useRef, useEffect } from "react";

interface OTPInputGroupProps {
    setInputValues: (pars: string[]) => void
    inputValuesString: string
    inputValues: string[]
    handleSubmit: () => void
}

let currentOTPIndex: number = 0;
const OTPInputGroup = ({ inputValues, inputValuesString, setInputValues, handleSubmit }: OTPInputGroupProps) => {
    const [activeOTPIndex, setActiveOTPIndex] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        const newOTP: string[] = [...inputValues];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);

        if (!value) setActiveOTPIndex(currentOTPIndex - 1);
        else setActiveOTPIndex(currentOTPIndex + 1);

        setInputValues(newOTP);
    };

    const handleOnKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        currentOTPIndex = index;
        if (e.key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex]);

    useEffect(() => {
        if (inputValuesString.length > 4) {
            handleSubmit()
            setActiveOTPIndex(0)
        }
    }, [inputValuesString])

    return (
        <div className="w-full ltr flex justify-between items-center">
            {inputValues.map((_, index) => {
                return (
                    <input
                        key={index}
                        ref={activeOTPIndex === index ? inputRef : null}
                        type="number"
                        className={
                            "w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-[#CBCBCB] focus:border-gray-700 focus:text-gray-800 text-gray-500 transition [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        }
                        onChange={handleOnChange}
                        onKeyDown={(e) => handleOnKeyDown(e, index)}
                        value={inputValues[index]}
                        onSubmit={(e) => e.preventDefault()}
                    />
                );
            })}
        </div>
    );
};


export default OTPInputGroup;

