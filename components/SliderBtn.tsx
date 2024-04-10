import { PiCaretLeft, PiCaretRight } from "@/node_modules/react-icons/pi/index";
import { motion } from 'framer-motion'

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
        <motion.button
            whileHover={{ backgroundColor: "#C1E2D2" }}
            onClick={onClick}
            className={`bg-secondry-tint-7 rounded-lg text-secondry-base text-xl md:text-2xl p-1.5 md:p-2 ${className || ''}`}>
            {prev && <PiCaretRight />}
            {next && <PiCaretLeft />}
        </motion.button>
    )
}

export default SliderBtn