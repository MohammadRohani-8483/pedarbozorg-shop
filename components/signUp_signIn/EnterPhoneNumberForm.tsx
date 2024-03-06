import Image from 'next/image'
import { IoIosClose } from "react-icons/io";

type props = {
    handleClose: () => void
    inputValue: string
    setInputValue: (par: string) => void
    setIsEnterNumber: (val: boolean) => void
}

const EnterPhoneNumberForm = ({ handleClose, inputValue, setInputValue, setIsEnterNumber }: props) => {
    const handleSubmit = () => {
        validateMobileNumber() ? setIsEnterNumber(true) : alert("شماره موبایل وارد شده معتبر نیست.");
    }

    function validateMobileNumber() {
        var regex = /^09[0-9]{9}$/;

        if (regex.test(inputValue)) return true
        else return false;
    }

    return (
        <>
            <div className='flex justify-between items-center text-base-300 text-xl font-bold w-full'>
                <h1>ثبت نام | ورود</h1>
                <IoIosClose className='text-3xl cursor-pointer'
                    onClick={handleClose} />
            </div>
            <div className='flex flex-col gap-2 justify-center items-center w-full max-w-[300px]'>
                <Image
                    alt='Logo'
                    src='/Image/logo-login.png'
                    width={145}
                    height={145}
                />
                <div className='flex flex-col w-full gap-6'>
                    <div className='w-full flex flex-col justify-center items-center gap-4'>
                        <h2 className="text-sm text-[#757575]">شماره همراه خود را وارد کنید</h2>
                        <div className='relative'>
                            <input maxLength={11} type="tel"
                                className='peer w-full h-10 placeholder:text-base p-2 outline-none focus:border-base-300 border border-[#CBCBCB] rounded-lg text-black'
                                id='input_phone'
                                placeholder=''
                                required
                                value={inputValue}
                                onChange={(e: any) => {
                                    setInputValue(e.nativeEvent.target.value)
                                }}
                            />
                            <label htmlFor="input_phone" className='text-[10px] peer-placeholder-shown:text-base peer-focus:text-base-300 text-gray-400 absolute -top-2.5 right-4 bg-white px-1 peer-placeholder-shown:right-2 peer-placeholder-shown:top-2 transition-all'>
                                شماره همراه
                            </label>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className='flex justify-center solid-btn rectangle-btn w-full'>ورود</button>
                </div>
            </div>
        </>
    )
}

export default EnterPhoneNumberForm