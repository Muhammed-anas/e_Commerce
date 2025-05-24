import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useCart } from "../Cart_details/Cart_items";
import dressesData from "../../data/dresses";


type Dress = {
  id: number;
  price: number | string;
  image: string;
  rating: number | string;
};


// called the all dress datas from 'data/dresses' 
const dresses = dressesData as Dress[];

// created a function called DressDetails for view specific dress
function DressDetails() {

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [dress, setDress] = useState<Dress | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   
  // get the specific dress from dresses data , for the user who wish grab the dress
  useEffect(() => {
           const foundDress = dresses.find((d) => d.id === Number(id));
       setDress(foundDress);

       const token = localStorage.getItem("token");
       setIsLoggedIn(!!token);
        }, [id]);
      
      const AddToCart = () => {

        // only the login user can add item to cart
        if (!isLoggedIn) {
          toast.info("Please login to add items to your cart.");
          navigate("/login");
       return;
}
    
    if (dress) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: dress.id,
          price: Number(dress.price) || 0,
          image: dress.image,
    });
  }
   
    toast.success(`${quantity} item(s) added to cart!`);
    }
  };


  // handle function usef for who want them imediately without wanting them added to cart
  const BuyNow = () => {
    if (!isLoggedIn) {
      toast.info("Please login to continue.");
      navigate("/login");
      return;
    }
  

    // the method is used like 'added to cart'
    if (dress) {
      for (let i = 0; i < quantity; i++) {
       addToCart({
          id: dress.id,
          price: Number(dress.price) || 0,
          image: dress.image,
    });
  }
       toast.success(`${quantity} item(s) added to cart!`);
       navigate("/cart_items");
    }
  };
  
// check if the dress data is available for purchase
  if (!dress) {
    return <p className="text-center mt-10">Dress not found.</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br
     from-neutral-100 to-neutral-200 p-6">
  <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-5xl
   w-full gap-10">
    
    <img src={dress.image}
      alt={`Dress ${dress.id}`}
      className="w-full max-w-sm h-[400px] md:h-[500px] object-cover rounded-xl" />
    <div className=" lg:mt-32 md:mt-32 space-y-4">
      <p className="text-2xl font-bold text-pink-600">${dress.price}</p>
      <p className="text-gray-600 text-sm">
         Rating: {"⭐".repeat(Math.floor(Number(dress.rating)))} ({dress.rating})
      </p>

        <div className="flex items-center gap-3 mt-4">

          {/* add the quantity method for increase the quantity */}
        <label htmlFor="quantity" className="text-gray-700">
              Quantity:
          </label>
          <input  id="quantity" type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded px-3 py-1 w-20" />
          </div>

  <div>
      <div>

        {/* Now use click method to add or buy items */}
  <button onClick={AddToCart}
        className="mt-6 w-40 bg-primary text-white rounded-full
         hover:bg-secondary transition duration-200 py-3">
            Add to Cart
       </button>
    </div>

    <div>
        <button
        onClick={BuyNow}
        className="mt-6 w-40 bg-green-300 text-white rounded-full
             hover:bg-secondary transition duration-200 py-3"
              >
            Buy Now
    </button>

         </div>
  </div>  
      </div>
      </div>
  </div>
);
}

export default DressDetails;
