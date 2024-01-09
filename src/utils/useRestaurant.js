import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"       
    );
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json.data);
  }

  return restaurantDetails;
};

export default useRestaurant;
