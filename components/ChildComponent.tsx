'use client'
import { useParams, usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ChildComponent() {

    const pathname = usePathname()
    const params = useParams()

    const isVsisble = !(pathname.includes("products") && Boolean(params.slug))



    console.log(isVsisble)
    // console.log(pathname.includes("products"))
    // const { pathname } = router.asPath; // Use asPath for server components

    // Use pathname for conditional rendering or data fetching
    return (
        <div className={`lg:block ${isVsisble?"block":"hidden"}`}>
            <Footer />
        </div>
    );
}