import { IMG_CDN_URL } from "../../constants";
export const RestaurantCard = (props) => {
  return (
    <div className="block max-w-sm min-h-max h-full p-6 border border-gray-200 my-4 mx-4 rounded-lg shadow hover:border-gray-100 hover:bg-gray-300">
      <img src={IMG_CDN_URL + props.restaurant.data.cloudinaryImageId} />
      <h2 className="mb-2 mt-1 text-2xl font-semibold">
        {props.restaurant.data.name}
      </h2>
      <h3 className="font-normal text-gray-700 dark:text-gray-400">
        {props.restaurant.data.cuisines.join(", ")}
      </h3>
      <h4 className="text-red-400">
        {props.restaurant.data.avgRating + " stars"}
      </h4>
    </div>
  );
};
