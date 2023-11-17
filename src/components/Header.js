import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Header = () => {
  const [isLoggedin, setlogin] = useState(false);
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
          <li>Cart</li>
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
