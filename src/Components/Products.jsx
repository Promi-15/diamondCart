import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div id="product">
      <p className=" max-w-7xl mx-auto  my-10 text-4xl font-bold">Products</p>
      <div className="bg-blue-50 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 p-16 rounded-xl mt-5">
        <div
          className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-center p-5 space-y-5 flex flex-col items-center
"
        >
          <p className="text-xl font-bold">All</p>
          <img src="/public/img1.jpg" className="w-40 rounded-xl" alt="" />
          <NavLink
            className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 border-none "
            to="/allCate"
          >
            Click Here{" "}
          </NavLink>
        </div>
        <div
          className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-center p-5 space-y-5 flex flex-col items-center
"
        >
          <p className="text-xl font-bold">Rings</p>
          <img src="/public/ring1.png" className="w-40 rounded-xl" alt="" />
          <NavLink
            className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 border-none "
            to="/rings"
          >
            Click Here{" "}
          </NavLink>
        </div>
        <div
          className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-center p-5 space-y-5 flex flex-col items-center
"
        >
          <p className="text-xl font-bold">Necklace</p>
          <img src="/public/img16.jpg" className="w-40 rounded-xl" alt="" />
          <NavLink
            className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 border-none "
            to="/necklace"
          >
            Click Here{" "}
          </NavLink>
        </div>
        <div
          className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-center p-5 space-y-5 flex flex-col items-center
"
        >
          <p className="text-xl font-bold">Crown</p>
          <img src="/public/crown1.jpg" className="w-40 rounded-xl" alt="" />
          <NavLink
            className="btn bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-600 border-none "
            to="/crown"
          >
            Click Here{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
