import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import PaginationButtons from '../../PaginationButtons'
import Comment from './Comment'

export type comment = {
    id: number,
    text: string,
    user: {
        id: string,
        full_name: string
    },
    created_at: string,
    topic_object_id: number,
    feedback: {
        like_count: number,
        dislike_count: number,
        has_liked: boolean,
        has_disliked: boolean
    },
    is_anonymous: boolean,
    featured_image: null | string,
    rate: number
}

const CommentSection = ({ itemsInfo, commentsID }: any) => {
    const [commentsCount, setCommentsCount] = useState(1)
    const [page, setPage] = useState(0)
    const [comments, setComments] = useState<comment[]>([])
    const api = '/api/store-api/products-public/'

    useEffect(() => {
        axios.get(`${api}${commentsID}/comments`)
            .then(res => {
                setCommentsCount(res.data.count)
                setComments(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [commentsID]);

    return (
        <div ref={itemsInfo[3].ref} className='flex flex-col justify-center items-center gap-4 justify-center items-start w-full py-2'>
            <h2 className='text-xl font-bold text-secondry-base'>
                نظرات کاربران
            </h2>
            {commentsCount > 0 ?
                <>
                    <div className='flex gap-2 justify-center items-center text-sm text-secondry-base px-3 py-1.5 cursor-pointer'>
                        <Image
                            src='/iconSax/sort.svg'
                            alt='sort'
                            width={20}
                            height={20}
                        />
                        <h2>مرتب سازی</h2>
                    </div>
                    <div className='w-full flex flex-col gap-4 justify-center items-center'>
                        <div className='w-full h-[1px] bg-neutral-400' />
                        {
                            comments.map(comment => (
                                <React.Fragment key={comment.id}>
                                    <Comment comment={comment} />
                                    <div className='w-full h-[1px] bg-neutral-400' />
                                </React.Fragment>
                            ))
                        }
                        {Math.ceil(commentsCount / 5) > 1 && < PaginationButtons pageCount={Math.ceil((commentsCount - 5) / 10) + 1} activePage={page} setCurrentPage={setPage} />}
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