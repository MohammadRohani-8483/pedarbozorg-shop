"use client"
import Link from "@/node_modules/next/link"
import { usePathname } from "@/node_modules/next/navigation"

export default function NavLink({ children, href, className, path }: any) {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={className + (pathname===path ?" active":"")}
        >
            {children}
        </Link>
    )
}
