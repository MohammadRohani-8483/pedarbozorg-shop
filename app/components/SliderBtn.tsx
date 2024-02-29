import { PiCaretLeft, PiCaretRight } from "@/node_modules/react-icons/pi/index";

const SliderBtn = (
    { next, prev, className, onClick }:
        {
            next?: boolean | undefined
            prev?: boolean | undefined
            className?: string
            onClick?: () => void
        }
) => {
    return (
        <button 
        onClick={onClick}
        className={`bg-[#E0F1E9] rounded-lg text-base-300 text-xl md:text-2xl hover:bg-[#C1E2D2] p-1.5 md:p-2 ${className !== undefined && className}`}>
            {prev && <PiCaretRight />}
            {next && <PiCaretLeft />}
        </button>
    )
}

export default SliderBtn