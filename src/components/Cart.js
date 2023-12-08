import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utils/cartslice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleclearcart = () => {
    dispatch(clearcart());
  };

  const citems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-auto font-bold text-3xl">
      <h1>Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-2 rounded-lg bg-black text-white"
          onClick={handleclearcart}
        >
          Clear Cart
        </button>
        <Itemlist items={citems} />
      </div>
    </div>
  );
};

export default Cart;
