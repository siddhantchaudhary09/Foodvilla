import { useState, useEffect } from "react";
// import { restaurantlist } from "./constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Restaurantcard, { withPromotedLabel } from "./Restaurantcard";

const Body = () => {
  function filter(SearchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info.name.toLowerCase().includes(SearchText.toLowerCase())
    );
  }
  const [SearchText, setSearchText] = useState("");
  const [allrestaurants, setallrestaurant] = useState([]);
  const [filteredrestaurant, setfilteredrestaurant] = useState([]);
  const Restauantcardpromoted = withPromotedLabel(Restaurantcard);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data.json();

    console.log(json1.info);

    setallrestaurant(
      json1?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredrestaurant(
      json1?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    getRestaurant();
  }, []);

  // if (!allrestaurants) return null;
  // if (!filteredrestaurant) return null;

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return <h1>You are offline!! Please check internet</h1>;
  const restaurantlength = allrestaurants?.length;

  return restaurantlength == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" ml-[40%] p-4 ">
        <input
          className="border border-solid border-black rounded-md "
          type="text"
          placeholder="Search"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="px-4 py-2 bg-green-100 rounded-md m-4 "
          onClick={() => {
            const filterdata = filter(SearchText, allrestaurants);
            console.log(filterdata);
            setfilteredrestaurant(filterdata);
          }}
        >
          Search
        </button>
      </div>

      {filteredrestaurant == 0 ? (
        <h1> NO Restaurants Matched</h1>
      ) : (
        <div className="flex flex-wrap">
          {filteredrestaurant?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.parentId}
              >
                <Restaurantcard {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
