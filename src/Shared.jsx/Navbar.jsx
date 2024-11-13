import { MdElectricBolt } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  const links = (
    <>
      <li>
        Home
      </li>
      <li>
        Products
      </li>
      <li>
        Services
      </li>
      <li>
        About
      </li>
    </>
  );
  return (
   
      <div className="md:max-w-[1600px] md:mx-auto ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
            <ul className="menu menu-horizontal gap md:gap-10  md:text-lg">{links}</ul>

            <div className="flex ">
              <HiOutlineShoppingCart className=" md:text-4xl md:relative" />
              <p className="md:absolute md:top-4  bg-red-500 md:px-1 rounded-full text-sm">0</p>
           </div>
            <div className="flex ">
            <CiHeart className="md:text-4xl md:relative" />
            <p className="md:absolute md:top-4  bg-red-500 px-1 rounded-full text-sm">0</p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
