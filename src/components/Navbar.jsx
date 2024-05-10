import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../public/alt.png";
import UseAuth from "../hooks/useAuth";
import Profile from "./Profile";
import ScaleLoader from 'react-spinners/ScaleLoader';


const Navbar = () => {
  const {user, loading} = UseAuth();
  const [menu, setMenu] = useState(false);

  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Queries",
      path: "/queries",
    },
    {
      id: 3,
      name: "Login",
      path: "/login",
    },
  ];

  return (
    <header className="p-2 md:p-4 sticky top-0 bg- z-50 bg-white">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <Link to="/" className="hidden md:flex items-center justify-center gap-2">
          <img className="w-10 h-10 md:w-12 md:h-12" src={logo} alt="" />
          <span className="font-bold text-2xl md:text-3xl">AltChoice.</span>
        </Link>
        <ul className="items-stretch hidden space-x-6 md:flex">
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className="font-medium text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer"
                to={`${route.path}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={`${
            menu
              ? "absolute md:hidden top-24 left-4 sm:left-16 p-4 pr-40 space-y-2 duration-700 ease-in-out shadow-md rounded-md z-50 bg-white"
              : "hidden"
          } `}
        >
          {routes.map((route) => (
            <li key={route.id}>
              <Link
                className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer active:border-b-2"
                to={`${route.path}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenu(!menu)}
          className="flex justify-end p-4 md:hidden"
        >
          {menu ? (
            <IoClose className="text-4xl" />
          ) : (
            <IoMenu className="text-4xl" />
          )}
        </button>
        {loading ? (
          <ScaleLoader height={30}
          width={3} color="#36d7b7" />
        ) : !loading && user ? (
          <Profile user={user} />
        ) :  <Link to='/login' className="block md:hidden px-5 py-1.5 text-white bg-[#32C36C] border-2 border-[#32C36C] hover:bg-white hover:border-white hover:text-black rounded-md -skew-x-6 text-lg font-semibold md:font-bold ease-in-out duration-300">Login</Link>
      }
      </div>
    </header>
  );
};

export default Navbar;
