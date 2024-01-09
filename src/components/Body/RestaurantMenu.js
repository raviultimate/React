import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import { CardShimmer } from "../UI/shimmer";
import useRestaurant from "../../utils/useRestaurant";
import Categories from "./Categories";

const RestaurantMenu = () => {
  const { resId } = useParams("resId");

  const restaurantDetails = useRestaurant(resId);

  console.log("helo");

  return !restaurantDetails ? (
    <CardShimmer />
  ) : (
    <div className="menu">
      <div className="text-center">
        <h2 className="font-bold my-2 text-2xl">
          {restaurantDetails?.cards[0]?.card?.card?.info?.name}
        </h2>
        <h3>
          {restaurantDetails?.cards[0]?.card?.card?.info?.cuisines.join(",")} -{" "}
          {restaurantDetails?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
        {restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          .filter((element) => {
            return (
              element.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
          })
          .map((category) => {
            return <Categories data={category} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
