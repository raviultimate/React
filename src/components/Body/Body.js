import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../../constants";
import { useEffect, useState } from "react";
import { CardShimmer } from "../UI/shimmer";
import { Link } from "react-router-dom";

const searchFilter = (searchTxt, items) => {
  const filteredData = items.filter((element) =>
    element.data.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState(restaurantList);

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

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
        <div className="restaurant-list">
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
