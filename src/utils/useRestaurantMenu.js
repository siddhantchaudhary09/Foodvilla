import { useEffect, useState } from "react";
import { MenuUrl } from "../components/constants";

const useRestaurantMenu = (resid) => {
  const [restaurantinfo, setrestaurantinfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MenuUrl + resid);
    const json = await data.json();
    setrestaurantinfo(json);
  };
  return restaurantinfo;
};

export default useRestaurantMenu;
