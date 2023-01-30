import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
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

  return restaurantDetails;
};

export default useRestaurant;
