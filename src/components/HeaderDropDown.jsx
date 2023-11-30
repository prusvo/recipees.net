import { useState } from "react"
import "./HeaderDropDown.css"

const HeaderDropDown = () => {
    const [open, setOpen] = useState(true)
    
    function toggle(){
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    return(
        <div className="headerDropDown">
            <div onClick={() => toggle()} className="headerDropDown-name">Menu</div>
            <div className={open === true ? "headerDropDown-links" : "headerDropDown-links active" }>
                <a className="headerDropDown-link" href="/menu4">Menu 4</a>
                <a className="headerDropDown-link" href="/menu4">Menu 5</a>
            </div>
        </div>
    )
}

export default HeaderDropDown