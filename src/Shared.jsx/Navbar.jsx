import { MdElectricBolt } from "react-icons/md";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../store";
import { Link } from 'react-scroll';
import PopUp from "../Components/PopUp";
import { useState } from "react";
const Navbar = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible((prev) => !prev);
  };
  const { cartItems } = useCartStore();
  const links = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <Link to="product" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} > Products</Link>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="md:max-w-7xl md:mx-auto ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex  items-center gap-2">
            <MdElectricBolt className="text-4xl font-bold"></MdElectricBolt>
            <p className=" md:text-4xl font-bold">Code Life</p>
          </div>
        </div>
        <div className="navbar-end hidden  md:flex md:gap-10">
          <ul className="menu menu-horizontal gap md:gap-5  md:text-sm">
            {links}
          </ul>

          <div className="flex relative">
            <HiOutlineShoppingCart
              className="md:text-4xl md:relative cursor-pointer"
              onClick={togglePopUp}
            />
            <p className="md:absolute md:top-4 bg-red-500 md:px-1 rounded-full text-sm">
              {cartItems}
            </p>
            {isPopUpVisible && (
              <div className="absolute top-10 right-0">
                <PopUp />
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
