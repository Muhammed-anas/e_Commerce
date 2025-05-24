import Logo from "../../assets/logo.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "../Cart_details/Cart_items";


// create function called Navbar
function Navbar() {

  // check if user is loggedin or logout
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { itemCount } = useCart();
  const navigate = useNavigate();


     // use token to get item from storage, to check the user is loggedin
      useEffect(() => {
      const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); }, 
    []);

    useEffect(() => {
      const interval = setInterval(() => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);}, 
      500);

      return () => clearInterval(interval);}, 
  []);

  const handleLogout = () => {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    toast.error("Logged out successfully!", { icon: false });

    setTimeout(() => {
      navigate("/");
    }, 1500); };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 
    dark:text-white duration-200 relative z-40">
        <div className="bg-cyan-300">
    <div className="container flex justify-between
     items-center">

      {/* navigate to home page use 'Link' method */}
          <Link to="/">
          <div className="logo-img">
          <span className="font-bold text-2xl sm-text-3xl flex gap-1">
            <img src={Logo} alt="logo" className="w-10 rounded-2xl" />
                shopfy
                </span>
               </div>
              </Link>

          <div className="flex justify-between items-center
           gap-1">
          <div className="relative hidden sm:block group">
          <input type="text"
           placeholder="search"
            className="w-[150px] sm:w-[100px] lg:w-[300px] 
            group-hover:sm:w-[150px] group-hover:lg:w-[500px]
               transition-all duration-300 rounded-full border
               border-gray-300 px-2 py-1 focus:outline-none
               focus:border-amber-50" />

               {/* use Icons */}
            <IoMdSearch className="text-gray-500 group-hover:text-primary
             absolute top-1/2 -translate-y-1/2 right-2" />
            </div>

            {/* chech the user is login */}
            {!isLoggedIn ? (
                 <Link to="/login">
            <button className="bg-gradient-to-r from-primary-to-secondary
                transition-all duration-200 text-white py-1 px-4 rounded-full
                  flex items-center gap-2">
                  
        <IoPersonCircle className="text-2xl text-white" />
        <span>Login</span>
                  </button>
              </Link>
              ) : (

                // if the user login then navbar show logout text and its functionality
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-primary-to-secondary transition-all
                 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
              >
                <IoPersonCircle className="text-2xl text-white" />
                <span>Logout</span>
              </button>
            )}

            {/* Cart Button */}
            <Link to="/cart_items" className="relative">
          <button className="bg-gradient-to-r from-primary-to-secondary
               transition-all
               duration-200 text-white py-1
                px-4 rounded-full flex items-center gap-2">

    {/* navigate to cart */}
    <FaCartShopping className="text-2xl text-white cursor-pointer" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600
               text-white rounded-full px-2 text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
               </div>
           </div>
    </div>  );
}

export default Navbar;
