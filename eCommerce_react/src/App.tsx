import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";


import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import function from all typesript file run the program
import Navbar from "./components/Home_page/navbar";
import ProductsNavbar from "./components/Home_page/Top_bar";
import Sliding from "./components/Home_page/Sliding_home";
import Product from "./components/Home_page/Men_wear";
import Banner from "./components/Home_page/banner";
import TopProduct from "./components/Home_page/Top_products";
import Footer from "./components/Home_page/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Register";
import AllDresses from "./components/Dress/All_products";
import Cart from "./components/Cart/cart";
import DressDetails from "./components/Dress/DressDetails";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import OrderSuccess from "./components/Checkout/OrderSuccess";
import CheckoutForm from "./components/Cart/CheckoutForm";
import { CartProvider } from "./components/Cart_details/Cart_items";

// create a function home page 
function HomePage() {
  return (
       <div>
      <ProductsNavbar />
      <Sliding />
      <TopProduct />
      <Banner />
      <Product />
      <Footer />
       </div> );
}


//  create a route function to navigate any page
function App() {
  const [userId, setUserId] = useState<string | null>(null);
  return (
    <Router>
        <CartProvider userId={userId}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top_rated" element={<TopProduct />} />
          <Route path="/all_dress" element={<AllDresses />} />
          <Route path="/dress/:id" element={<DressDetails />} />
          <Route path="/cart_items" element={<Cart />} />
          <Route path="/checkout_payment" element={<CheckoutPage />} />
          <Route path="/checkout_form" element={<CheckoutForm 
           onSubmit={(address) => console.log("Address submitted:", address)} />}/>

            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/login"element={<Login onLogin={(id) => setUserId(id)} />}/>
            <Route path="/signup" element={<Signup onSignup={setUserId} />} />
          </Routes>
         <ToastContainer position="top-center" autoClose={3000} />
           </CartProvider>
    </Router>
  );
}

export default App;
