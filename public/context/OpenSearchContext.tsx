'use client'
import { createContext, useState } from 'react'

export const OpenSearchContext = createContext({})

export const OpenSearchProvider = ({ children }: any) => {
    const [isOpenSearch, setIsOpenSearch] = useState(false)

    const ContextValue = {
        isOpenSearch,
        setIsOpenSearch
    };
    return (
        <OpenSearchContext.Provider value={ContextValue}>{children}</OpenSearchContext.Provider>
    )
}

