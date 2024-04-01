import formatNumber from '@/public/Functions/formatNumber'
import { authState } from '@/public/redux/store/auth'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Alert from '../Alert'
import Icon from '../Icon'
import AddWalletBalance from './AddWalletBalance'
import ProfileBox from './ProfileBox'

const Info = () => {
    const userInfo = useSelector((state: { auth: authState }) => state.auth.userInfo)

    const [amount, setAmount] = useState<number>()

    const [isAddWalletBalance, setIsAddWalletBalance] = useState(false)
    const addWalletBalance = () => {

    }

    return (
        <ProfileBox>
            <div className='w-full gap-4 md:gap-8 flex flex-col justigy-center items-center'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h2 className='font-bold text-base-300 text-base md:text-xl'>
                            {userInfo?.first_name ? `${userInfo?.first_name} ${userInfo?.last_name}` : userInfo?.user?.username}
                        </h2>
                        <p className='text-sm md:text-base text-[#626262]'>
                            {userInfo?.first_name ? userInfo?.user?.username : null}
                        </p>
                    </div>
                    <div className='p-1.5'>
                        <Icon nameIcon='edit' size={20} />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h2 className='font-bold text-base-300 text-base'>
                            کیف پول
                        </h2>
                        <div className='text-sm md:text-xl text-[#626262] flex justify-center items-center gap-2 font-bold'>
                            {formatNumber(userInfo.wallet_balance || 0)}
                            <div className='relative w-[19px] h-3 md:w-[27px] md:h-[18px]'>
                                <Image
                                    src='/Image/gray-Tooman.svg'
                                    alt='tooman'
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    <div className='p-1.5'
                        onClick={() => setIsAddWalletBalance(true)}
                    >
                        <Icon nameIcon='add-wallet' size={20} />
                    </div>
                </div>
                {isAddWalletBalance &&
                    <Alert
                        confirmFunc={addWalletBalance}
                        messageToast='موجودی شما افزایش یافت'
                        setIsAlertOpen={setIsAddWalletBalance}
                        textBtn='افزایش موجودی'
                        title='افزایش اعتبار کیف پول'
                    >
                        <AddWalletBalance amount={amount} setAmount={setAmount} />
                    </Alert>
                }
            </div>
        </ProfileBox>
    )
}

export default Info