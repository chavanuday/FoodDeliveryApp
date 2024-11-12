import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { restaurentData } = props;

  const { 
    cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restaurentData?.info;

    console.log(`${CDN_URL}${cloudinaryImageId}`);


  return (
    <div className="restaurent-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurent-logo"
        src={CDN_URL + 
          cloudinaryImageId
          }
        alt="restaurentLogo"
      />
   

      <h3>{name}</h3>
      <h4 style={{ wordWrap: "break-word" }}>{cuisines.join(",")}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>${costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurentCard;
