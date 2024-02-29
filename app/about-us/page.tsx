'use client'
import React, { useEffect } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
const AboutUs = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    params.set("search", "name")
    // console.log(params.toString());
    const pathname = usePathname()
    // console.log(pathname);
    const { replace , push} = useRouter()
    const router = useRouter()
    useEffect(() => {
        // replace(`${pathname}?${params.toString()}`)
        push(`?${params.toString()}`)
    }, [])

    return (
        <div>page</div>
    )
}

export default AboutUs