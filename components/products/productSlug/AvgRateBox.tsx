import Alert from '@/components/Alert'
import SignUpSignIn from '@/components/signUp_signIn/SignUpSignIn'
import { toFixedDigit } from '@/public/Functions/toFixedDigit'
import { useAppSelector } from '@/public/redux/hooks'
import { authState } from '@/public/redux/store/auth'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AddCommentBox from './AddCommentBox'
import Star from './Star'

const AvgRateBox = ({ product }: any) => {
    const roundRate = Math.floor(product.avg_rate)
    const [loginOpen, setLoginOpen] = useState(false)
    const [addCommentBoxOpen, setAddCommentBoxOpen] = useState(false)
    const [rateNewComment, setRateNewComment] = useState(0)
    const [comment, setComment] = useState('')
    const [isAnonymous, setIsAnonymous] = useState(false)

    const { isLogedIn } = useAppSelector((state: { auth: authState }) => state.auth)

    const handleAddComment = () => {
        if (isLogedIn) {
            setAddCommentBoxOpen(true)
            document.documentElement.classList.add('overflow-hidden')
        } else {
            setLoginOpen(true)
            document.documentElement.classList.add('overflow-hidden')
        }
    }

    useEffect(() => {
        if (!addCommentBoxOpen) {
            setRateNewComment(0)
            setComment('')
            setIsAnonymous(false)
        }
    }, [addCommentBoxOpen])

    return (
        <div className='bg-white rounded-2xl w-full md:w-2/3 lg:max-w-[272px] h-auto border border-[#E3E3E3] p-4 flex flex-col justify-center items-center gap-4 md:mt-12'>
            {product.avg_rate > 0 &&
                <div className='text-neutral-500 text-base font-bold'>
                    <span className='text-secondry-base text-lg'>{toFixedDigit(product.avg_rate)}</span> از 5
                </div>
            }
            <div className='flex gap-4 justify-center items-center'>
                {Array.from({ length: roundRate }, (_, i) => {
                    return (
                        <Image
                            key={i}
                            src='/iconSax/like-yellow.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
                <Star present={(product.avg_rate - roundRate) * 100} />
                {Array.from({ length: 4 - roundRate }, (_, i) => {
                    return (
                        <Image key={i}
                            src='/iconSax/like-yellow-regular.svg'
                            alt="like"
                            width={18}
                            height={18}
                        />
                    )
                })}
            </div>
            {product.avg_rate > 0 ?
                <h5 className='text-neutral-600 text-xs'>
                    از مجموع {product.rate_count} امتیاز
                </h5>
                :
                <h5 className='text-neutral-600 text-xs'>
                    هنوز امتیازی ثبت نشده است.
                </h5>
            }
            <button
                onClick={handleAddComment}
                className='border border-secondry-base rounded-md text-secondry-base text-base rectangle-btn w-full transition-all duration-300 hover:bg-secondry-tint-7 py-2'
            >
                افزودن نظر
            </button>
            {loginOpen && <SignUpSignIn setIsFormOpen={setLoginOpen} />}
            {addCommentBoxOpen &&
                <Alert
                    confirmFunc={() => { }}
                    messageToast='نظر شما ثبت شد و پس از تایید نمایش داده میشود'
                    setIsAlertOpen={setAddCommentBoxOpen}
                    textBtn='ارسال' title='افزودن نظر' >
                    <AddCommentBox
                        rate={rateNewComment}
                        isAnonymous={isAnonymous}
                        setIsAnonymous={setIsAnonymous}
                        setRate={setRateNewComment}
                        comment={comment}
                        setComment={setComment} />
                </Alert>
            }
        </div>
    )
}

export default AvgRateBox