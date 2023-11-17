import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { CdnUrl, MenuUrl } from "./constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  return (
    <div>
      <div>
        <br></br>
        <h2> {name}</h2>
        <img src={CdnUrl + cloudinaryImageId} />
        <h2>{areaName}</h2>
        <h2>{city}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>

      {/* njcshjshjsdhn */}

      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
