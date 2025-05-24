import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

type Signupcheck = {
  onSignup: (userId: string) => void; 
};


// Create a function called Signup
function Signup({ onSignup }: Signupcheck) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (): Promise<void> => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        username,
        email,
        password,
      });
      
      // token used for check the user id
      const { token, userId } = res.data;

      localStorage.setItem("token", token);

      // If the user  regigistered Successfully navigate to "Home" page
      onSignup(userId);

      toast.success("Registered successfully!", { icon: false });

      navigate("/");

      // If registration failed
    } catch (err: any) {
      console.error("Signup failed:", err.response?.data || err.message);
      toast.error("Signup failed. Please try again."); }};

  return (
        <div className="min-h-screen flex items-center
         justify-center bg-gray-100 px-4">
         <div className="w-full max-w-md
          bg-white p-8 rounded-2xl shadow-md">
           <h2 className="text-2xl font-bold mb-6 
           text-center">Sign Up</h2>
          <div className="space-y-4">


          <input type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>


             <input type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required/>


          <input type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}required/>
          
          
             <button
              onClick={handleSignup}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary">
              Sign Up
             </button>
               </div>


            <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
      <Link to="/login" className="text-green-600 hover:underline">
            Login
      </Link>
        </p>
        </div>
            </div>)
  ;}

export default Signup
