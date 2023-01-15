import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import { CardShimmer } from "../UI/shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams("resId");
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json.data);
  }
  return !restaurantDetails ? (
    <CardShimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurantDetails?.name}</h2>
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} />
        <h3>{restaurantDetails?.area}</h3>
        <h3>{restaurantDetails?.city}</h3>
        <h3>{restaurantDetails?.avgRating} stars</h3>
        <h3>{restaurantDetails?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantDetails?.menu?.items).map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
