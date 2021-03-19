import React from "react";
import {Link} from 'react-router-dom'

const MenuItem = ({menu_item}) => {
    return (
        <li className="Menu-item">
            <a href="#">
                <Link to={`${menu_item.url}`}>{menu_item.title}</Link>
            </a>
        </li>
    )
}

const MenuList = ({menu_list}) => {
    return (
        <nav>
            <ul className="Menu">
                {menu_list.map((menu_item) => <MenuItem menu_item={menu_item} />)}
            </ul>
        </nav>
    )
}

export default MenuList