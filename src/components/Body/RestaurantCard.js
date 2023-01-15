import { IMG_CDN_URL } from "../../constants";
export const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant.data.cloudinaryImageId} />
      <h2>{props.restaurant.data.name}</h2>
      <h3>{props.restaurant.data.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data.avgRating + " stars"}</h4>
    </div>
  );
};
