import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[800px] md:h-[700px] flex justify-center items-center gap-4 text-xl md:text-3xl text-gray-400 md:font-bold'>
      <div className='w-6 md:w-12 relative flex justify-center items-center'>
        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div className="relative border-t-transparent border-solid animate-[rereverse-spin_1s_ease-in-out_infinite] rounded-full border-gray-400 border-[2px] md:border-[3px] h-6 md:h-12 w-6 md:w-12">
          </div>
        </div>
        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
          <div className="right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 border-t-transparent border-solid animate-[reverse-spin_1s_ease-in-out_infinite] rounded-full border-gray-400 border-[2px] md:border-[3px] h-3 md:h-6 w-3 md:w-6">
          </div>
        </div>
      </div>
      در حال پیدا کردن محصول ...
    </div>
  )
}

export default Loading