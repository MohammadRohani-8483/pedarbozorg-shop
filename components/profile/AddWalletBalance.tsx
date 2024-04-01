import formatNumber from '@/public/Functions/formatNumber'
import Image from 'next/image'
import React from 'react'

type props = {
    amount?: number | null
    setAmount: (amount: number) => void
}

type prposalProps = {
    value: number
    amount?: number | null
    setAmount: (amount: number) => void
}

const AddWalletBalance = ({ amount, setAmount }: props) => {

    return (
        <div className='flex flex-col gap-4 md:gap-6 justify-center items-center md:px-[92px]'>
            <h3 className='text-sm sm:text-base text-[#626262] text-center'>
                مبلغ مورد نظر خود را برای افزایش اعتبار کیف پول خود وارد کنید
            </h3>
            <div className='flex flex-col gap-3 md:gap-4 justify-center items-center'>
                <div className='flex justify-between items-center px-2 border border-[#CBCBCB] rounded-lg h-10 w-[180px] relative'>
                    <span className='absolute text-xs text-black font-bold -top-2 right-4 px-2 bg-white flex justify-center'>
                        مبلغ
                    </span>
                    <input type="number" name="amount" className='outline-none text-sm text-black w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                        step={10000}
                        value={amount || ''}
                        onChange={(e) => setAmount(+e.target.value)}
                    />
                    <Image
                        src='/Image/gray-Tooman.svg'
                        alt="تومان"
                        width={20}
                        height={20}
                    />
                </div>
                <div className='flex justify-center items-center gap-3 md:gap-4'>
                    <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                        <ProposalAmount amount={amount} value={50000} setAmount={setAmount} />
                        <ProposalAmount amount={amount} value={100000} setAmount={setAmount} />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                        <ProposalAmount amount={amount} value={200000} setAmount={setAmount} />
                        <ProposalAmount amount={amount} value={500000} setAmount={setAmount} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddWalletBalance

const ProposalAmount = ({ value, amount, setAmount }: prposalProps) => {
    return (
        <div
            onClick={() => setAmount(value)}
            className={`rounded-lg border ${value === amount ? "border-[#3D8361]" : "border-[#FFC436]"} h-8 px-3 py-1.5 flex gap-2 justify-center items-center cursor-pointer`}
        >
            <p className='text-sm text-base-300'>
                {formatNumber(value)}
            </p>
            <Image
                alt='tooman'
                src='/Image/green-Tooman.svg'
                width={20}
                height={20}
            />
        </div>
    )
}