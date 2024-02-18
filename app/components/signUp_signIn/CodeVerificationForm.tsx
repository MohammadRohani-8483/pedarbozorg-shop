import Image from 'next/image'
import { IoIosClose } from "react-icons/io";

type props = {
    handleClose: () => void
    phoneNumber: string
}

const CodeVerificationForm = ({ handleClose, phoneNumber }: props) => {
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
                        <h2 className="text-sm text-[#757575]">کد ارسال شده به شماره {phoneNumber} را وارد کنید</h2>
                        <div className='w-full ltr flex justify-between items-center'>
                            <input maxLength={1} type="tel"
                                className='text-center w-[47px] h-10 focus:outline-none border border-[#CBCBCB] rounded-lg text-black'
                            />
                            <input maxLength={1} type="tel"
                                className='text-center w-[47px] h-10 focus:outline-none border border-[#CBCBCB] rounded-lg text-black'
                            />
                            <input maxLength={1} type="tel"
                                className='text-center w-[47px] h-10 focus:outline-none border border-[#CBCBCB] rounded-lg text-black'
                            />
                            <input maxLength={1} type="tel"
                                className='text-center w-[47px] h-10 focus:outline-none border border-[#CBCBCB] rounded-lg text-black'
                            />
                            <input maxLength={1} type="tel"
                                className='text-center w-[47px] h-10 focus:outline-none border border-[#CBCBCB] rounded-lg text-black'
                            />
                        </div>
                    </div>
                    <button className='flex justify-center solid-btn rectangle-btn w-full'>ورود</button>
                </div>
            </div>
        </>
    )
}

export default CodeVerificationForm