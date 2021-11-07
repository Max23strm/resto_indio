import React from 'react'
import { MenuList } from '../data/data'
import MenuItem from '../componentes/MenuItem.js'
import "../styles/Menu.css";

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <h1>Our menu</h1>
                <div    className="menuList">
                    {MenuList.map((menuItem, key)=> {return (
                        <MenuItem
                        key={key} 
                        image={menuItem.image} 
                        name={menuItem.name}
                        price={menuItem.price} />
                    )}
                    )}
                </div>
            </div>  
        </div>
    )
}
export default Menu
