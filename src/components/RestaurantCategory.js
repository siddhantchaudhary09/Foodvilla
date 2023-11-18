import { useState } from "react";
import { CdnUrl } from "./constants";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);

  const [showitems, setshowitems] = useState(false);
  const handleclick = () => {
    setshowitems(!showitems);
  };
  return (
    <div>
      <div className=" w-6/12 mx-auto border-b-2 my-4 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showitems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
