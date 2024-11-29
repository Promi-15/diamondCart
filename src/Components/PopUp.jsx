
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useCartStore } from "../store";

const PopUp = () => {
    const { removeCartItem } = useCartStore();
    //const items = JSON.parse(localStorage.getItem("cart")) || [];
    const [items, setItems] = useState([]);

    useEffect(() => {
      try {
        const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
        setItems(storedItems);
      } catch (error) {
        console.error("Failed to parse cart data:", error);
        localStorage.setItem("cart", JSON.stringify([])); 
      }
    }, []);
  
    const handleDelete = (itemId) => {
      const AfterDeleteArray = items.filter((i) => i.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(AfterDeleteArray));
        setItems(AfterDeleteArray);
        removeCartItem()
        
    };
  
    return (
        <div className="mt-5">
             <div className="min-h-full lg:w-96   bg-gray-400 rounded-md   backdrop-blur-sm bg-opacity-10  p-3 ">
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <ul key={index} className="mb-4 border-b pb-2">
                <div className="flex items-center gap-4 justify-between ">
                 
                  
                    <p className="font-bold">{item.jewelry_name}</p>
                    <RxCross1
                    className="cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  />
                 
                  
                </div>
              </ul>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
     </div>
    );
  };
  
  export default PopUp;
  