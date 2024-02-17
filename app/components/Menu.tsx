import { menuItems } from "public/data/menuItems"
import NavLink from './NavLink'

export default function Menu() {
    return (
        <ul className='flex gap-8 mt-4 font-semibold text-base-300 text-sm justify-center'>
            {menuItems.map((item) => (
                <NavLink
                    key={item.id}
                    href={item.link}
                    className="pb-1 menu-item"
                    path={item.link}
                    ke
                >
                    {item.item}
                </NavLink>
            ))}
        </ul>
    )
}