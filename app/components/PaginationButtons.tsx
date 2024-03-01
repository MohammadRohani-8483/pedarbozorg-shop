'use client'
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const PaginationButtons = ({ pageCount, setCurrentPage }: { pageCount: number, setCurrentPage?: any }) => {
    const handlePageClick = ({ selected }: any) => {
        setCurrentPage(selected + 1);
    };
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    };

    return (
        <motion.div
            variants={paginationVariants}
            initial="hidden"
            animate="visible"
        >
            <ReactPaginate
                breakLabel={<span className="mx-2">...</span>}
                nextLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md">
                        <BsChevronLeft />
                    </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-lightGray rounded-md mr-4 text-base-300">
                        <BsChevronRight />
                    </span>
                }
                containerClassName="flex items-center justify-center gap-2 h-10 text-base-300"
                pageClassName="block hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md m w-7"
                activeClassName="bg-base-300 text-white"
            />
        </motion.div>
    );
};

export default PaginationButtons;