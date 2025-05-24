import { useCart } from "../Cart_details/Cart_items";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


// create a function called 'paymentpage' for payments
const PaymentPage = () => {

  const { cartItems, totalPrice, removeItem } = useCart();
  
  // check the payment method for online or cod(cash on delivery)
   const [paymentMethod, setPaymentMethod] = useState("online");
   const navigate = useNavigate();

  const SHIPPING_FEE = 5.0;
  const COD_FEE = 2.6;

  // calculate the total fees
  const codCharge = paymentMethod === "cod" ? COD_FEE : 0;
  const finalAmount = totalPrice + SHIPPING_FEE + codCharge;


    
  const placeOrder = () => {
    const address = localStorage.getItem("deliveryAddress");
    console.log("Order Placed:", 
      { cartItems, address, paymentMethod, finalAmount });

    cartItems.forEach((item) => removeItem(item.id));
    localStorage.removeItem("deliveryAddress");


  // navigate them to success page after the used complete the payment
    navigate("/success");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
    <h2 className="text-2xl font-bold text-center mb-6">
        Pay Your Order</h2>

    <div className="bg-white shadow-md rounded p-4">


      {cartItems.map((item) => (
    <div key={item.id} className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
              <img src={item.image}
           className="w-14 h-14 object-cover rounded"
              />
              <div>
              
                <p className="text-sm text-gray-500">Qty {item.quantity}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">

                ${(item.price * item.quantity).toFixed(2)}

              </p>
              {item.quantity > 1 && (

                <p className="text-sm text-gray-500">

                  ${item.price.toFixed(2)} each
                </p>
              )}
      </div>
       </div>
    ))}

        <hr className="my-4" />

        {/* Add the subtotal, shipping charges and cod fees */}

   <div className="flex justify-between mb-2">
    <span className="text-gray-700">Subtotal</span>
    <span>${totalPrice.toFixed(2)}</span>
        </div>
      <div className="flex justify-between mb-2">

      <span className="text-gray-700">Shipping</span>
          <span>${SHIPPING_FEE.toFixed(2)}</span>
        </div>


    {paymentMethod === "cod" && (
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Cash on Delivery Fee</span>
            <span>${COD_FEE.toFixed(2)}</span>
          </div>
        )}

     <hr className="my-4" />


      {/* Total amount */}
      <div className="flex justify-between font-bold text-lg">
        <span>Total Due</span>
      <span>${finalAmount.toFixed(2)}</span>
      </div>
      </div>
      

      {/* select the payment method */}
  <div className="mt-6">
        <h3 className="font-semibold mb-2">Select Payment Method</h3>
    <div className="flex space-x-4">


          {/* Use radio method to select the cash on delivey of online payment */}
          <label className="flex items-center space-x-1">
       <input type="radio"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            <span>Online</span>
         </label>


          <label className="flex items-center space-x-1">
        <input  type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            
            <span>Cash on Delivery (+${COD_FEE.toFixed(2)})</span>
    </label>


  </div>
      </div>

    <button
        onClick={placeOrder}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded">
        Place Order
  </button>
</div>
  );
};

export default PaymentPage;
