import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
// import {useQ} from 'next/router'


const SearchBarProducts = ({ searchValue, setSearchValue }: any) => {

    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const pathname = usePathname()

    const handleSearch = (term: any) => {
        term ?
            params.set("search", term)
            :
            params.delete("search")
        replace(`${pathname}?${params.toString()}`)
    }
    // useEffect(() => {
    //     setSearchValue(params.get("search") || "")
    // }, [])


    return (
        <div className='border-gray-200 border text-gray-400 rounded-2xl bg-white flex pr-3 py-2 pl-2 justify-between items-center w-full h-10 md:h-12'>
            <input
                value={searchValue}
                // defaultValue={params.get("search")?.toString()}
                type="text"
                name="Search Bar"
                placeholder="جستجو.."
                className=' bg-transparent w-4/5
                focus:outline-none pr-1 cursor-pointer'
                onChange={(e: any) => {
                    handleSearch(e.target.value)
                    setSearchValue(e.nativeEvent.target.value)
                }}
            />
            <Image
                src="/iconSax/search-normal.svg"
                width={24}
                height={24}
                alt="search icon"
                className="cursor-pointer"
            />
        </div>
    )
}

export default SearchBarProducts