import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../../public/alt.png'
const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "Queries",
          path: "/queries"
        },
        {
          id: 3,
          name: "Login",
          path: "/login"
        },
      ];

  return (
    <header className="p-4 sticky top-0 bg- z-50 bg-white">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <Link to='/' className="flex items-center justify-center gap-2">
        <img className="w-10 h-10 md:w-12 md:h-12" src={logo} alt="" />
        <span className="font-bold text-2xl md:text-3xl">AltChoice.</span>
        </Link>
        <ul className="items-stretch hidden space-x-6 md:flex">
        {
                    routes.map(route => <li key={route.id}><Link className="font-medium text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer" to={`${route.path}`}>{route.name}</Link></li>)
                }
        </ul>
        <ul className={`  ${menu ? "absolute md:hidden top-28 right-4 p-4 pr-40 space-y-2 duration-700 ease-in-out shadow-md rounded-md" : "hidden"} `}>
                {
                    routes.map(route => <li key={route.id}><Link className="font-semibold text-lg hover:text-rose-600 ease-in-out duration-300 cursor-pointer active:border-b-2" to={`${route.path}`}>{route.name}</Link></li>)
                }
            </ul>
        <button onClick={() => setMenu(!menu)} className="flex justify-end p-4 md:hidden">
                    {
                        menu ? 
                        <IoClose className="text-3xl"/> :
                        <IoMenu className="text-3xl"/> 
                    }
        </button>
      </div>
    </header>
  );
};

export default Navbar;
