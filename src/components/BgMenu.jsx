import React from "react";
import DropDown from "./DropDown";

const BgMenu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map(item => 
                        <li> 
                            <a href={item.href}>{item.value }</a>  
                            
                        </li>
                        
                    )}
                    <DropDown/>
                </ul>
            </div>
        </div>
    )
}
export default BgMenu

// {active ? 'burger-menu active' : 'burger-menu'}