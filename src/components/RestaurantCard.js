import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { 
    cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurantData?.info;


  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={CDN_URL + 
          cloudinaryImageId
          }
        alt="restaurantLogo"
      />
   

      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>${costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
