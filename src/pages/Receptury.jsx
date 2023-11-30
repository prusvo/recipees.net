import Header from "../components/Header"
import "./receptury.css"
import data from "../json/Dishes.json"
// import { BsCopy } from "react-icons/bs";


const Receptury = () => {
    return (
        <div>
            <Header />
            {data.map((dish, id) => {
                return (
                    <div className="container">
                        <div className="receptury">
                    {/* <h1 id={id} className="dishName">{dish.dishName} <BsCopy onClick={ () => navigator.clipboard.writeText(this.dish)}/></h1> */}
                    <h1 id={id} className="dishName">{dish.dishName}</h1>
                    <p id={id} className="ing"><li>{dish.ingridients}</li>
                    </p>
                    
                </div>
                </div>
                    
                    
                    
                )
            })}
        </div>
    )
}

export default Receptury

