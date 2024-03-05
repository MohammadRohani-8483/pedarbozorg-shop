import Image from 'next/image'
import React from 'react'
import { comment } from './CommentSection'
import moment from "moment-jalaali";

const Comment = ({ comment }: { comment: comment }) => {
    const datePartsRegex = /(?<!\d)\d+(?!\d)/g;

    const dateParts = comment.created_at.match(datePartsRegex)!;

    // تبدیل آرایه به رشته
    const commentDate = {
        year: +dateParts[0],
        month: +dateParts[1],
        day: +dateParts[2],
        fullDate: new Date(`${+dateParts[0]}/${+dateParts[1]}/${+dateParts[2]}`)
    }
    const now = new Date()
    const isCommentForThisYear = now.getFullYear() - commentDate.year === 0
    console.log(new Intl.DateTimeFormat('fa-IR-u-nu-latn', { month: 'short', day: 'numeric', year: 'numeric' }).format(commentDate.fullDate))
    const shamsiDate = {
        year: new Intl.DateTimeFormat('fa-IR-u-nu-latn', { year: 'numeric' }).format(commentDate.fullDate),
        month: new Intl.DateTimeFormat('fa-IR-u-nu-latn', { month: 'short' }).format(commentDate.fullDate),
        day: new Intl.DateTimeFormat('fa-IR-u-nu-latn', { day: 'numeric' }).format(commentDate.fullDate)
    }
    console.log(shamsiDate);

    return (
        <div className='flex flex-col gap-2 w-full justify-center items-center'>
            <div className='flex w-full h-6 justify-start items-center gap-6'>
                <div
                    className='flex justify-center items-center rounded-full gap-1 px-3 py-1 text-base text-white font-bold'
                    style={{ backgroundColor: comment.rate === 5 ? "#3D8361" : comment.rate === 4 ? "#4BA278" : comment.rate === 3 ? "#DD9C00" : comment.rate === 2 ? "#A9791C" : "#C62020" }}
                >
                    {comment.rate}
                    <Image
                        src='/iconSax/like-yellow.svg'
                        alt="like"
                        width={16}
                        height={16}
                    />
                </div>
                <div className='text-sm text-[#ADADAD]'>
                    {isCommentForThisYear ? `${shamsiDate.day} ${shamsiDate.month}` : `${shamsiDate.day} ${shamsiDate.month} ${shamsiDate.year}`}
                </div>
                <div className='text-sm text-[#ADADAD]'>
                    {comment.user.full_name}
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#EDEDED]' />
            <p className='w-full text-right text-base text-black leading-7 text-justify'>
                {comment.text}
            </p>
            <div className='w-full h-[1px] bg-[#EDEDED]' />
            <div className='flex justify-between items-center w-full'>
                <Image
                    src='/iconSax/flag.svg'
                    alt="flag"
                    width={20}
                    height={20}
                />
                <div className='flex justify-center items-center gap-2 text-[#757575] text-base'>
                    <div className='flex justify-center items-center gap-1.5'>
                        {comment.feedback.dislike_count}
                        <Image
                            src='/iconSax/dislike-red-regular.png'
                            alt="dislike"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='flex justify-center items-center gap-1.5'>
                        {comment.feedback.like_count}
                        <Image
                            src='/iconSax/like-green-regular.svg'
                            alt="dislike"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment