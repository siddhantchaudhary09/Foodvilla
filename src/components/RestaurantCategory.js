import { CdnUrl } from "./constants";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <div className=" w-6/12 mx-auto border-b-2 my-4 shadow-lg">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <Itemlist items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
