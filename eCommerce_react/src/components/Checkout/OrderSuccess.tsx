import { Link } from "react-router-dom";

const OrderSuccess = () => {
    return (
      <div className="p-4 text-center">
      <h2 className="text-2xl font-bold text-green-600">Order Placed!</h2>
        <p className="mt-2">Thank you for your purchase.</p>

        <div>
        <Link to="/">
            <button className="bg-primary text-white px-4 py-2 mt-8 rounded
             hover:bg-secondary transition">
              Click here to explore the shop
            </button>
          </Link>
        </div>
      </div>
      
    );
  };
  
  export default OrderSuccess;
  