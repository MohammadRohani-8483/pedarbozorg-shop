import Image from 'next/image'

const SearchBarProducts = ({ searchValue, setSearchValue }: any) => {
    return (
        <div className='border-gray-200 border text-gray-400 rounded-2xl bg-white flex pr-3 py-2 pl-2 justify-between items-center w-full h-10'>
            <input
                value={searchValue}
                type="text"
                name="Search Bar"
                placeholder="جستجو.."
                className=' bg-transparent w-4/5
                focus:outline-none pr-1 cursor-pointer'
                onChange={(e: any) => {
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