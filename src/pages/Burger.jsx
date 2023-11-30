// import '../components/burger.css';
// import BgMenu from './BgMenu';
// import { AiFillAccountBook } from "react-icons/ai";
// import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi'
// import { useState } from 'react';

function BurgerMenu () {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "Main Page", href: '/home'},
    {value: "Menu", href: '/menu'},
    {value: "Receptury", href: '/receptury'}]
    return (
        <div>
            <nav>
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
              {!menuActive ? <GiHamburgerMenu/> : <AiOutlineClose/>}
            </div>
          </nav>
          <BgMenu active={menuActive} setActive={setMenuActive} header={"Burger Menu"} items={items}/>
        </div>
    )
}

export default BurgerMenu