import Icon from '@/components/Icon'
import React from 'react'

type props = {
    rate: number
    setRate: (rate: number) => void
    comment: string
    setComment: (comment: string) => void
    isAnonymous: boolean
    setIsAnonymous: React.Dispatch<React.SetStateAction<boolean>>
}

const AddCommentBox = ({ rate, setRate, comment, setComment, isAnonymous, setIsAnonymous }: props) => {
    return (
        <div className='w-full md:w-[614px] flex flex-col gap-2 sm:gap-4 md:gap-6 justify-center items-center overflow-auto'>
            <div className='flex flex-col justify-center items-center gap-2 md:gap-4 text-secondry-base font-bold w-full'>
                امتیاز
                <div className='flex gap-4 justify-center items-center'>
                    {Array.from({ length: rate }, (_, i) => {
                        return (
                            <div key={i} onClick={() => setRate(i + 1)}>
                                <Icon nameIcon='like-yellow' size={18} />
                            </div>
                        )
                    })}
                    {Array.from({ length: 5 - rate }, (_, i) => {
                        return (
                            <div key={i} onClick={() => setRate(i + 1 + rate)}>
                                <Icon nameIcon='like-yellow-regular' size={18} key={i} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 md:gap-4 w-full'>
                <p className='text-secondry-base font-bold'>
                    نظر
                </p>
                <div className='relative w-full focus:border-secondry-base border border-gray-400 hover:border-gray-700 rounded-lg p-1 flex justify-center items-center h-[90px]'>
                    <textarea
                        className='peer/message w-full p-2 outline-none  text-black resize-none h-full '
                        id='scroll'
                        placeholder=''
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <label htmlFor="scroll" className='peer-focus/message:text-[10px] text-[10px] peer-focus/message:text-secondry-base text-gray-400 absolute peer-focus/message:-top-2.5 peer-focus/message:right-4 bg-white px-1 right-4 -top-[10px] transition-all pointer-events-none peer-placeholder-shown/message:text-base peer-placeholder-shown/message:right-2 peer-placeholder-shown/message:top-2 font-light'>
                        متن نظر
                    </label>
                </div>
            </div>
            <div className='flex gap-2 items-center w-full'>
                <input
                    type="checkbox"
                    id="recipentMyself"
                    style={{ accentColor: "#3D8361" }}
                    className='cursor-pointer'
                    onChange={() => setIsAnonymous(prev => !prev)}
                    checked={isAnonymous}
                />
                <label htmlFor="recipentMyself" className='cursor-pointer text-neutral-700 text-sm'>
                    ارسال نظر به صورت ناشناس
                </label>
            </div>
        </div >
    )
}

export default AddCommentBox