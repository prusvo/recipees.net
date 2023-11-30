import { useState } from "react"
import "./dropDown.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";



const DropDown = () => {
    const [dropDown, setDtopDown] = useState(false)

    const ShowDropBox = () => {
    if (dropDown === false){
    setDtopDown(true)
    }else {
        setDtopDown(false)
    }

    }
    return (
        <div className="dropDown">
            <div onClick={() => {
                ShowDropBox();
                }} className="title">Menu {dropDown === false ?<IoMdArrowDropdown />: <IoMdArrowDropup/>}</div>
            <div className={dropDown === true ? "lins active": "links"}>
            <a className="dropDown__link" href="/menu4">Menu 4</a>
            <a className="dropDown__link" href="/menu5">Menu 5</a>
            </div>
            

        </div>
    )
}

export default DropDown