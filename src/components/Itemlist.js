import { CdnUrl } from "./constants";

const Itemlist = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex border-gray-200 border-b-4"
        >
          <div className="w-9/12 text-left  m-2 p-2 ">
            <span className=" text-lg  p-3 ">{item.card.info.name}</span>
            -₹
            <span className="  text-lg">
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs ml-2 p-2">{item.card.info.description}</p>
          </div>

          <div className="w-3/12  m-2 p-2 ">
            {item.card.info.imageId ? (
              <img
                className="rounded-lg"
                src={CdnUrl + item.card.info.imageId}
              />
            ) : (
              <h2>no img</h2>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
