import React from "react";

const MenuItem = ({menu_item}) => {
    return (
        <li className="Menu-item">
            <a href="#">
                {menu_item}
            </a>
        </li>
    )
}

const MenuList = ({menu_list}) => {
    return (
        <div>
            <ul className="Menu">
                {menu_list.map((menu_item) => <MenuItem menu_item={menu_item} />)}
            </ul>
        </div>
    )
}

export default MenuList