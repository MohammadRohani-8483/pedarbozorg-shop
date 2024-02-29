import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import { SearchValueProps } from "@/public/types/props"

const SearchValueProduct: React.FC<SearchValueProps> = ({ image, name, link }) => {
    return (
        <div className="border-b border-gray-200 h-24">
            <div className="flex justify-start items-center p-2 gap-2">
                <Link
                    href={link}>
                    {image ?
                        <Image
                            src={image}
                            alt={name}
                            width={80}
                            height={80}
                        /> :
                        <div className="w-[80px]"></div>
                    }
                </Link>
                <Link href={link}>
                    <h1 className="text-gray-900 font-bold text-base">{name}</h1>
                </Link>
            </div>
        </div>
    )
}

export default SearchValueProduct