import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedin, setlogin] = useState(false);
  const cartitems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-gray-300">
      <img src={logo} className="w-24" alt="logo" />

      <div className="flex m-4 p-4  gap-6 items-center ">
        <ul className="flex gap-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className=" font-bold text-xl ">
            <Link to="/cart">Cart ({cartitems.length} items)</Link>
          </li>
        </ul>

        <div>
          {isLoggedin ? (
            <button onClick={() => setlogin(false)}>Logout</button>
          ) : (
            <button onClick={() => setlogin(true)}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
