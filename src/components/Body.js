import { useState, useEffect } from "react";
import { restaurantlist } from "./constants";

const Body = () => {
  function filter(SearchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant?.info.name.toLowerCase().includes(SearchText.toLowerCase())
    );
  }
  const [SearchText, setSearchText] = useState("");
  const [allrestaurants, setallrestaurant] = useState(restaurantlist);
  const [filteredrestaurant, setfilteredrestaurant] = useState(restaurantlist);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data.json();

    console.log("render()");

    setallrestaurant(
      json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredrestaurant(
      json1?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    getRestaurant();
  }, []);

  const Restaurantcard = ({ cuisine, cloudinaryImageId, name, costForTwo }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>

        <h4>Price: {costForTwo}</h4>
      </div>
    );
  };

  return (
    <>
      <div className="Searchcont">
        <input
          type="text"
          placeholder="Search"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="searchbtn"
          onClick={() => {
            const filterdata = filter(SearchText, allrestaurants);
            console.log(filterdata);
            setfilteredrestaurant(filterdata);
          }}
        >
          Search
        </button>

        {/* Restaurant body */}
      </div>
      <div className="restaurantbody">
        {filteredrestaurant.map((restaurant) => {
          return (
            <Restaurantcard
              {...restaurant.info}
              key={restaurant.info.parentId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
