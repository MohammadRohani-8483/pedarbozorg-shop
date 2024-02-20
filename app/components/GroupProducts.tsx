import { groupProducts } from "public/data/groupProducts"
import GroupProduct from "./GroupProduct"

export default function GroupProducts() {
    return (
        <div className="lg:flex lg:justify-between grid grid-cols-[109px_109px] md:grid-cols-[109px_109px_109px] lg:max-w-[1136px] mx-auto mt-24 justify-center gap-8">
            {
                groupProducts.map((group) => (
                    <GroupProduct
                        key={group.id}
                        link={group.link}
                        name={group.name}
                        icon={group.icon}
                    />
                ))
            }
        </div>
    )
}