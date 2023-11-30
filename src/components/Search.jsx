import React, {  useState } from "react";
import MOCK_DATA from '../json/Dishes.json'
import RecipeBox from "./RecipeBox";



const data = MOCK_DATA;
function Search() {

    const filterDish = (searchText, listOfDish) => {
        if (!searchText) {
            return listOfDish;
        }
        return listOfDish.filter(({ dishName }) => 
        dishName.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    const [dishList, setDishList] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [show, setShow] = useState(false);
    // const [startSearch, setStartSearch] = useState(false);

    const Searching = (e) => {
        
        setShow(true)
        const filteredDish = filterDish(searchTerm, data);
        setDishList(filteredDish)  
    }
  
    // useEffect(() => {
    //     const Debounce = setTimeout(() => {
    //         const filteredDish = filterDish(searchTerm, data);
    //         setDishList(filteredDish)
    //     }, 500)
    //     return () => clearTimeout(Debounce);
    // });

    return (
        <div className="Search">
            <form className="search-form">
                <label>
                    Receptury<br/>
                    <input 
                    className="search-input" 
                    type="text" 
                    name="search" 
                    width="50px"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <br/>
                </label>
                <div>
                <button 
                    className="search-botton"  
                    onClick={(e) => {
                        e.preventDefault();
                        Searching()
                    }}
                    disabled={!searchTerm}
                >Search</button>
                
                </div>
                
            </form>
            {show && (<RecipeBox dishList={dishList}/>)}
        </div> 
    );
    }



export default Search;
