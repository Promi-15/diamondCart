
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonials";


const Home = () => {
  return (
    <div>
      <div className="bg-blue-50 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-16 rounded-xl mt-5 ">
        <div className="md:w-1/2 space-y-10 mb-5">
          <h2 className="text-2xl font-medium">Latest Trending</h2>
          <h1 className="text-5xl font-bold">Diamond Collections</h1>
          <p className="text-sm ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            eligendi iste sit, unde, quos doloribus, nihil veniam quaerat odio
            optio reiciendis maxime nostrum hic officia Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Expedita quas ducimus adipisci
            pariatur deserunt. Enim!
          </p>
          <button className="btn btn-ghost bg-blue-400  ">Shop Now</button>
        </div>
        <div className="">
          <img
            src="/public/img1.jpg"
            className="w-96 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
      </div>
      <Products />
      <Blog></Blog>
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Home;
