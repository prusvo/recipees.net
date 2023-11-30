const Dish = ({ dishName, recipe, metod, id }) => {

    return (
        <div className="recipe-box">
            <div className="box-title"><h1>{dishName}</h1></div>
            <div className="recipe"><p>{recipe}</p></div>
            <div className="metod"><p>{metod}</p></div>
            <div className="id"><p>{id}</p></div>
        </div>
    )
}

export default Dish