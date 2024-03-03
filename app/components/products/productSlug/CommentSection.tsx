import Image from 'next/image'
import React from 'react'
import PaginationButtons from '../../PaginationButtons'
import Comment from './Comment'

const CommentSection = ({ itemsInfo }: any) => {
    const commentCount = 7

    return (
        <div ref={itemsInfo[3].ref} className='flex flex-col justify-center items-center gap-4 justify-center items-start w-full py-2'>
            <h2 className='text-xl font-bold text-base-300'>
                نظرات کاربران
            </h2>
            {false ?
                <>
                    <div
                        // onClick={() => {
                        //     setIsOrderingOpen(true)
                        //     document.documentElement.classList.add('overflow-hidden')
                        // }}
                        className='flex gap-2 justify-center items-center text-sm text-base-300 px-3 py-1.5 cursor-pointer'
                    >
                        <Image
                            src='/iconSax/sort.svg'
                            alt='sort'
                            width={20}
                            height={20}
                        />
                        <h2>مرتب سازی</h2>
                    </div>
                    <div className='w-full flex flex-col gap-4 justify-center items-center'>
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        <Comment />
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        <Comment />
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        <Comment />
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        <Comment />
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        <Comment />
                        <div className='w-full h-[1px] bg-[#CBCBCB]' />
                        {Math.ceil(commentCount / 5) > 1 && < PaginationButtons pageCount={Math.ceil((commentCount - 5) / 10) + 1} />}
                    </div>
                </>
                :
                <div className='flex justify-center items-center h-[300px] text-xl text-gray-500 font-bold'>
                    هیچ کامنتی ثبت نشده است.
                </div>
            }
        </div>
    )
}

export default CommentSection