import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, id } =
    restaurantData?.data;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      
      <img
        className="restaurant-logo"
        src={CDN_URL + restaurantData.data.cloudinaryImageId}
        alt="restaurantLogo"
      />
      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>${costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
