import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../../constants";
import { useEffect, useState } from "react";
import { CardShimmer } from "../UI/shimmer";
import { Link } from "react-router-dom";
import { searchFilter } from "../../utils/helper";
import useOnline from "../../utils/useOnline";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!isOnline) {
    return <h1>You are offline</h1>;
  }

  return (
    <>
      <div className="bg-slate-500">
        <input
          type="text"
          className="m-4 p-1 rounded-md border-solid border-2 border-yellow-900 hover:border-dashed focus:bg-slate-300"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="bg-yellow-500 p-1 px-2 rounded-md"
          onClick={(e) => {
            const data = searchFilter(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      {allRestaurants.length == 0 ? (
        <CardShimmer />
      ) : (
        <div className="flex flex-wrap bg-lime-50 items-stretch">
          {filteredRestaurants.length == 0 ? (
            <h1>No match found try with something else:)</h1>
          ) : (
            filteredRestaurants.map((element) => {
              return (
                <Link to={"/restaurant/" + element.data.id}>
                  <RestaurantCard key={element.data.id} restaurant={element} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
