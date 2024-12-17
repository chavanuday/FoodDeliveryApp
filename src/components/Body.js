import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerful variable
  let [listOfRestaurants, setlistofRestaurants] = useState([]);
  let [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchData();
    console.log("USE EFF")
  }, []); 
  // myNote: [] this called as dependency array, note: use effect render after body component

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    
    // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //Optional Chaining
    const resData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setfilteredListOfRestaurants(resData);
    setlistofRestaurants(resData);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          onClick={() => {
            if (searchValue == "") {
              setlistofRestaurants(listOfRestaurants);
            } else {
              const searchedListOfRestaurants = listOfRestaurants.filter(
                (restaurantList) =>
                  restaurantList.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                    ? true
                    : false
              );
              setfilteredListOfRestaurants(searchedListOfRestaurants);
            }
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (restaurantList) => restaurantList.info.avgRating > 4.3
            );
            setfilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard
            restaurantData={restaurant}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
