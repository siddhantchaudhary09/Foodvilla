import { useState } from "react";
import { restaurantlist } from "./constants";

const Body = () => {
  function filter(SearchText, restaurants) {
    const filterdata = restaurants.filter((restaurant) => {
      restaurant.info.name.includes(SearchText);
    });
    return filterdata;
  }
  const [SearchText, setSearchText] = useState("");
  const [restaurants, setrestaurant] = useState(restaurantlist);

  const Restaurantcard = ({
    cuisines,
    cloudinaryImageId,
    name,
    costForTwo,
  }) => {
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
    <div>
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
            const data = filter(SearchText, restaurants);
            setrestaurant(data);
          }}
        >
          Search
        </button>

        {/* Restaurant body */}
      </div>
      <div className="restaurantbody">
        {restaurants.map((restaurant) => {
          return (
            <Restaurantcard
              {...restaurant.info}
              key={restaurant.info.parentId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
