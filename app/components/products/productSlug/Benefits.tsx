import React from 'react'
import BenefitItem from './BenefitItem'

const Benefits = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-start w-full border-b-2 border-[#E3E3E3] py-2'>
            <h3 className='text-xl font-bold text-base-300'>
                فواید
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
                <BenefitItem />
            </div>
        </div>
    )
}

export default Benefits