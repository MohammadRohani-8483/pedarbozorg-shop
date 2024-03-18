'use client'
import { useParams, usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterParent() {
    const pathname = usePathname()
    const params = useParams()
    const isVsisble = !(pathname.includes("products") && Boolean(params.slug))

    return (
        <div className={`lg:block ${isVsisble ? "block" : "hidden"}`}>
            <Footer />
        </div>
    );
}