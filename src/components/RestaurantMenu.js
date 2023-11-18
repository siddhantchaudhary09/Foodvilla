import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CdnUrl, MenuUrl } from "./constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurantinfo = useRestaurantMenu(resid);

  if (restaurantinfo == null) return <Shimmer />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    city,
    costForTwoMessage,
  } = restaurantinfo.data.cards[0].card.card.info;

  const { itemCards } =
    restaurantinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card;

  const categories =
    restaurantinfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center my-4">
      <h2 className=" font-bold text-4xl"> {name}</h2>
      <p className="font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>

      {categories.map((category) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
