import "./accordion.css"
// import data from "../json/Dishes.json"
import { useState } from "react"

const Accordion = (props) => {
    console.log(props)
    const [open, setOpen] = useState(false)
    function toggle () {
        if (open === false) {
            setOpen(true)
        } else setOpen(false)
    }
    return ( 
        <div className="wrapper">
            <div className="accordion">
               
                    <div className="item">
                        <div onClick={() => toggle()} className="name">
                            <li >{props.dishes}</li>
                        </div>
                        <div className={open === false ?   "ac-recipe " : "ac-recipe active"}>
                            <p>{props.skladniki}</p>
                        </div>
                    </div>
                
            </div>
        </div>
        
    )
}

export default Accordion