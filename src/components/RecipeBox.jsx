import Dish from './Dish';


const RecipeBox = ({ dishList, searchTerm }) => {
    return (
      <div className="menu">
        {dishList.map((dish, id) => {
          return (
            <Dish 
              key={id}
              dishName={dish.dishName}
              recipe={dish.ingridients}
              metod={dish.metod}
              // id={dish.id}
            />
          )
        })}
      </div>
    )
}



export default RecipeBox;