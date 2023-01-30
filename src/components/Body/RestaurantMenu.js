import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import { CardShimmer } from "../UI/shimmer";
import useRestaurant from "../../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams("resId");

  const restaurantDetails = useRestaurant(resId);
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
