const Restaurantcard = ({ cuisine, cloudinaryImageId, name, costForTwo }) => {
  return (
    <div className="m-4 p-4 w-[250px]  h-72 bg-gray-100 rounded-md hover:bg-gray-200">
      <img
        className=" rounded-md"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2 className=" font-bold py-2 text-lg">{name}</h2>

      <h4>Price: {costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (Restaurantcard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <Restaurantcard />
      </div>
    );
  };
};

export default Restaurantcard;
