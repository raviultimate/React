import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/foodVilla.jpg";
export const Title = () => (
  <h1 id="title" key="h2">
    <img className="h-[70] m-2" alt="logo" src={logo} />
  </h1>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between bg-lime-800">
      <Title />
      <div>
        <ul className="flex">
          <li className="m-4 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 text-white">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-4 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="m-4 text-white">Cart</li>
        </ul>
      </div>

      {!isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
          className="bg-yellow-500 p-4 rounded-sm m-3"
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
          className="bg-yellow-500 p-4 rounded-sm m-3"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
