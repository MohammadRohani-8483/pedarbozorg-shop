import { FaStar, FaRegStar } from "@/node_modules/react-icons/fa/index";
import Image from "@/node_modules/next/image";
import { comment } from "@/public/types/props";


export default function CommentCard({ name, score, product, comment, like, dislike }: comment) {
    const dislikeIcon = "/iconSax/dislike.svg"
    const likeIcon = "/iconSax/like.svg"

    return (
        <div className='bg-white gap-2 justify-between items-center rounded-2xl p-4 flex flex-col w-full h-[250px] hover:shadow-hover hover:transition-shadow hover:duration-300'>
            <div className="flex justify-between items-center w-full">
                <h2 className="text-xl text-base-300 font-bold">{name}</h2>
                <div className="flex ltr text-[#FFC436]">
                    {Array.from({ length: 5 }, (_, i) => {
                        return (
                            i < score ? <FaStar key={i} /> : <FaRegStar key={i} />
                        )
                    })}
                </div>
            </div>
            <h3 className="flex text-sm text-gray-400 justify-start w-full">محصول: <div className="text-base-500 pr-1"> {" " + product}</div></h3>
            <p className="text-justify text-gray-700"> {comment} </p>
            <div className="ltr flex gap-4 text-gray-400 text-xs justify-start w-full">
                <div className="flex gap-1">
                    {like}
                    <Image
                        src={likeIcon}
                        alt="like icon"
                        width={16}
                        height={16}
                    />
                </div>
                <div className="flex gap-1">
                    {dislike}
                    <Image
                        src={dislikeIcon}
                        alt="dislike icon"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </div>
    )
}
