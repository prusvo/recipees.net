import React, { useState } from "react";
import './Header.css';
import './burger.css';
import HeaderDropDown from "../components/HeaderDropDown";


import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi'
// import { BiSolidSun } from 'react-icons/bi'
import BgMenu from "./BgMenu";



function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value: "Home", href: '/home'},
      
      {value: "Receptury", href: '/receptury'}]
    return (
      <div>
        
        <div className="Header">
          
          <div className="logo">Logo</div>
          <div className="burger-btn" onClick={() =>  setMenuActive(!menuActive)}>
              {!menuActive ? <GiHamburgerMenu/> : <AiOutlineClose/>}
        </div>
          <div className="nav">
          <a href="/home">Home</a>
          <HeaderDropDown />
          <a href="/receptury">Receptury</a>
          
            
          </div>
          
        </div>
        <BgMenu active={menuActive} setActive={setMenuActive} header={"Pages"} items={items}/>
        {console.log(menuActive)}
      </div>
      
    );
    
  }



export default Header;