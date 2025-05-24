import { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

type Props = {
  onLogin: (id: string) => void
}


// Create a function "Login"
function Login({ onLogin }: Props) {
  const [emailVal, setEmailVal] = useState("")
  const [pass, setPass] = useState("")
  const nav = useNavigate()


  // Create a login const to check that the user already register
  const doLogin = async () => {
    try {
      const r = await axios.post("http://localhost:4000/api/auth/login", {
        email: emailVal,
        password: pass,})


      // If succussfully navigate to "Home page"
      localStorage.setItem("token", r.data.token)
      onLogin(r.data.userId)
      toast.success("Logged in successfully! Welcome Abroad 🎉", {
        icon: false, })
      nav("/")}
      
      
      catch (e: any) {
      console.log("oops", e.response?.data || e.message)
      toast.error("Login failed. Please check your credentials.") }}

  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
           <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
         <div className="space-y-4">

          {/* check email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
          />

          {/* check password */}
          <input
             type="password"
            placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        <button
            onClick={doLogin}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary"
               >
            Login
            </button>
          </div>

        {/*If they not already reagister,  Navigate to signup page */}
        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </p>
          </div>
      </div>
      )}

export default Login
