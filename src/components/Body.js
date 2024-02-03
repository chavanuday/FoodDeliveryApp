import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokData";
import { useState } from "react";


const Body = () => {


  // Local state varable - suuper powerful variable

  const [listOfRestaurant , SetListOfRestaurant ] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter out

          const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            SetListOfRestaurant(filteredList)
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="restaurant-container">
        { listOfRestaurant.map((restaurant) => (
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
