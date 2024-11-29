
import { useCartStore } from "../store";

const PCard = ({ jwel }) => {
  const { id, jewelry_name, category, image, short_details, price, ratings } =
    jwel;
  // const [cart, setCart] = useState([])
  // useEffect(() => {
  //   const cartList = JSON.parse(localStorage.getItem("cart"))
  //   if (cartList) {
  //     setCart(cartList)
  //   }
  // },[])
  const { addToCart } = useCartStore();

 
  return (
    <div className=" bg-base-100 w-72  shadow-xl p-4 flex flex-col justify-center border-2 rounded-xl">
      <figure className="  ">
        <img
          className="h-32 object-cover rounded-lg w-full"
          src={image}
          alt={jewelry_name}
        />
      </figure>
      <div
        className="h-full w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 mt-3 space-y-2
"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-center font-bold">{jewelry_name}</h2>
          <p className="border border-blue-400 py-[2px] px-1 text-xs rounded-md text-blue-400">{ category }</p>
        </div>
        <p className="text-sm">{short_details}</p>
        
        <div className="space-y-1">
          <p className="text-sm">
            <span className="font-semibold">Price :</span> ${price}
          </p>
          <p className="text-sm">
            {" "}
            <span className="font-semibold">Ratings : </span>
            {ratings}
          </p>
        </div>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              // local storage cart: []  othoba nai
              const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
              const NewCart = [...existingCart, jwel];
              localStorage.setItem("cart", JSON.stringify(NewCart));
              addToCart();
            }}
            className="bg-sky-300 px-4 py-2 text-sm rounded-md w-full hover:bg-blue-400 hover:text-white transition shadow-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PCard;

