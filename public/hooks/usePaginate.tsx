import { useState } from 'react'

type Props = {
    array: Array<any>,
    numProductPage: number
}

export const usePaginate = (array: Array<any>, numProductPage: number) => {
    const paginate = Math.ceil(array.length / numProductPage)
    const [page, setPage] = useState(1)
    const nextPage = () => {
        page < paginate && setPage(current => ++current)
    }

    const prevPage = () => {
        page > 1 && setPage(current => --current)
    }

    const clickInPaginate = (e: any) => {
        setPage(e.target.value)
    }

    return { page, nextPage, prevPage, clickInPaginate }
}