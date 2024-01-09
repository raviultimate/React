import { IMG_CDN_URL } from "../../constants";
export const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 border">
      <img className="w-96" src={IMG_CDN_URL + props.restaurant.info.cloudinaryImageId} />
      <h2 className="mb-2 text-wrap mt-1 text-lg font-semibold">
        {props.restaurant.info.name}
      </h2>
      <h3 className="text-wrap">
        {props.restaurant.info.cuisines.join(", ")}
      </h3>
      <h4 className="text-red-400">
        {props.restaurant.info.avgRating + " stars"}
      </h4>
    </div>
  );
};
