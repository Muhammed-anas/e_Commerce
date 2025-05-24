import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Cart_details/Cart_items";


// Create a function "Cart" add some  cart neccassary items
function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalPrice,
  } = useCart();


  // add navigate function to navigate to any page
  const navigate = useNavigate();

  return (
    <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
       


      {/* If cart items is empty , add a botton to explore the shop */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
             
             {/* Add link to "all_dress" page */}
             <Link to="/all_dress">
             <button className="bg-primary text-white px-4 py-2
              rounded hover:bg-secondary transition">
              Click here to explore the shop
            </button>
          </Link>
        </div>) : (

      <div className="space-y-6">
            {cartItems.map((item) => (
        <div key={item.id}  className="flex items-center justify-between
               border-b pb-4">
          <div className="flex items-center space-x-4">
              <img src={item.image} 
          className="w-20 h-20 object-cover rounded" />
        <div>
      <h3 className="font-semibold">
      </h3>
        <p className="text-sm text-gray-600">
          ${item.price}
          </p>

          {/* add + and - button increase or decrease the quantity of product */}
          <div className="flex items-center space-x-2 mt-2">
                    <button onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-lg">
                        -
                    </button>
                     <span className="min-w-[24px] text-center">
                      {item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded text-lg">
                      +
                    </button>
                  </div> </div>
            </div>



                {/* add remoove button to delete the product in the cart */}
                 <button onClick={() => removeItem(item.id)}
                className="text-red-600 hover:underline">
                Remove
                </button>
               </div> ))}

          <div className="text-right font-semibold text-xl mt-6">
            Total: ${totalPrice.toFixed(2)} 
      </div>
            

            {/* add a btton , for explore more items */}
        <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-600 text-white px-4 py-2
               rounded hover:bg-primary transition"
              onClick={() => navigate("/all_dress")} >
              Explore More Items
            </button>

            {/* this button used for the user , to continue the purchase  */}
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => navigate("/checkout_form")}
            >
              Proceed to Checkout
            </button>
        </div>
              </div> )}
</div> );}

export default Cart;
