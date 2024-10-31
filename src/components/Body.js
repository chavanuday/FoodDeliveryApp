import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokData";
import { useEffect, useState } from "react";

const Body = () => {
  // Local state varable - suuper powerful variable

  const [listOfRestaurant, SetListOfRestaurant] = useState(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);
  // my note: call back, dependency array, call back uses after my component renders

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.257690679917964&lng=73.13521083444357&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
      // The swiggy api i found
    ).then(response=>{
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return json()}).catch(err=>{
        console.log(err)
      });

    // const json = await data.json();
    //CODERS: Download CORS extention

    // console.log(json);

    // console.log(json);
    // SetListOfRestaurant(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
    //   );

    // setAllRestaurants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

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
            SetListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
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
