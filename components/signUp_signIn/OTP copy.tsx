'use client'
import React, { useEffect } from "react";

interface OTPInputGroupProps {
    setInputValues: React.Dispatch<React.SetStateAction<{ input1: string; input2: string; input3: string; input4: string; input5: string; }>>;
    inputValuesString: string; // یا هر تایپ دیگری که مناسب است
    inputValues: { [key: string]: string };
    handleSubmit: () => void; // یا هر تایپ دیگری که مناسب است
}

const OTPInputGroup = ({ inputValues, inputValuesString, setInputValues, handleSubmit }: OTPInputGroupProps) => {
    useEffect(() => {
        inputValuesString.length>4 && handleSubmit()
    }, [inputValuesString])


    //this function updates the value of the state inputValues
    const handleInputChange = (inputId: any, value: any) => {
        setInputValues((prevInputValues: any) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };

    return (
        <>
            <div data-autosubmit="true" className="w-full ltr flex justify-between items-center">
                <OTPInput
                    id="input1"
                    value={inputValues.input1}
                    onValueChange={handleInputChange}
                    previousId={null}
                    nextId="input2"
                    className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-neutral-400 focus:border-gray-700 focus:text-gray-800 text-gray-500 transition"
                />
                <OTPInput
                    id="input2"
                    value={inputValues.input2}
                    onValueChange={handleInputChange}
                    previousId="input1"
                    nextId="input3"
                    className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-neutral-400 focus:border-gray-700 focus:text-gray-800 text-gray-500 transition"
                />
                <OTPInput
                    id="input3"
                    value={inputValues.input3}
                    onValueChange={handleInputChange}
                    previousId="input2"
                    nextId="input4"
                    className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-neutral-400 focus:border-gray-700 focus:text-gray-800 text-gray-500 transition"
                />
                <OTPInput
                    id="input4"
                    value={inputValues.input4}
                    onValueChange={handleInputChange}
                    previousId="input3"
                    nextId="input5"
                    className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-neutral-400 focus:border-gray-700 focus:text-gray-800 text-gray-500 transition"
                />
                <OTPInput
                    id="input5"
                    value={inputValues.input5}
                    onValueChange={handleInputChange}
                    previousId="input4"
                    className="w-[47px] h-10 border-2 rounded-lg bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-neutral-400 focus:border-gray-700 focus:text-gray-800 text-gray-500 transition"
                />
            </div>
        </>
    );
}

const OTPInput = ({ id, previousId, nextId, value, onValueChange, className }: any) => {
    //This callback function only runs when a key is released
    const handleKeyUp = (e: any) => {
        //check if key is backspace or arrowleft
        if (e.keyCode === 8 || e.keyCode === 37) {
            //find the previous element
            const prev = document.getElementById(previousId) as HTMLInputElement;
            if (prev) {
                //select the previous element
                prev.select();
            }
        } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) || //check if key is numeric keys 0 to 9
            (e.keyCode >= 65 && e.keyCode <= 90) || //check if key is alphabetical keys A to Z
            (e.keyCode >= 96 && e.keyCode <= 105) || //check if key is numeric keypad keys 0 to 9
            e.keyCode === 39 //check if key is right arrow key
        ) {
            //find the next element
            const next = document.getElementById(nextId) as HTMLInputElement;
            if (next) {
                //select the next element
                next.select();
            } else {
                //check if inputGroup has autoSubmit enabled
                const inputGroup = document.getElementById('OTPInputGroup');
                if (inputGroup && inputGroup.dataset['autosubmit']) {
                    //submit the form
                }
            }
        }
    }
    return (
        <input
            id={id}
            name={id}
            type="text"
            value={value}
            maxLength={1}
            onChange={(e) => onValueChange(id, e.target.value)}
            onKeyUp={handleKeyUp}
            className={className}
        />
    );
};

export default OTPInputGroup;