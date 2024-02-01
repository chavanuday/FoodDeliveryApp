import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokData";

const Body = () => {
    return (
      <div className="body">
        <div className="search-container">Search</div>
        <div className="restaurant-container">
          {restaurantList.map((restaurant) => (
            <RestaurantCard
            key={restaurant.data.id}
            restaurantData={restaurant}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Body;