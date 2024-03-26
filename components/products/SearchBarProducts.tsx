import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const SearchBarProducts = ({ searchValue, setSearchValue }: any) => {
        const { replace } = useRouter()
        const searchParams = useSearchParams()
        const params = new URLSearchParams(searchParams)
        const pathname = usePathname()

        const handleSearch = (term: string) => {
            term ?
                params.set("search", term)
                :
                params.delete("search")
            replace(`${pathname}?${params.toString()}`)
        }

        return (
            <div className='border-gray-200 border text-gray-400 rounded-xl bg-white flex pr-3 py-2 pl-2 justify-between items-center w-full h-10 md:h-12'>
                <input
                    defaultValue={searchValue}
                    type="text"
                    name="Search Bar"
                    placeholder="جستجو.."
                    className=' bg-transparent w-4/5
                focus:outline-none pr-1 cursor-pointer'
                    onChange={(e: any) => {
                        handleSearch(e.target.value)
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