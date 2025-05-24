import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormFields = {
  onSubmit: (address: string) => void;
};


// add the neccassary delivery details
const CheckoutForm = ({ onSubmit }: FormFields) => {
  const [fullName, FullName] = useState("");
  const [email, Email] = useState("");
  const [confirmEmail, ConfirmEmail] = useState("");
  const [streetAddress, StreetAddress] = useState("");
  const [postalCode, PostalCode] = useState("");
  const [city, City] = useState("");
  const [province, Province] = useState("");
  const [country, Country] = useState("India");

  const navigate = useNavigate();

  const SubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // validate the email
    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }

  //  fill the neccassary details to continue payment
    if (!fullName || !email || !streetAddress || !postalCode || !city ) {
      alert("Please fill in all required fields.");
      return;
    }

    const address = `${fullName}, ${streetAddress}, 
    ${city}, ${province}, ${postalCode}, ${country}`;
    onSubmit(address);

    navigate("/checkout_payment");
  };

  return (


    <form onSubmit={SubmitForm} className="max-w-lg mx-auto
       p-4 space-y-4
     bg-white rounded shadow">
        <h3 className="text-lg
      font-bold text-center">Delivery Details</h3>


 <div>
  <label className="block font-semibold">Email *</label>
    <input type="email"
      className="w-full border border-gray-300 rounded p-2"
      required  value={email}
      onChange={(e) => Email(e.target.value)} />
        </div>


      <div>
        <label className="block font-semibold">
          Confirm Email *</label>
        <input type="email" className="w-full border border-gray-300 rounded p-2"
          required
          value={confirmEmail}
          onChange={(e) => ConfirmEmail(e.target.value)}
        />


        {/* check the email same as above */}
        {email && confirmEmail && email !== confirmEmail && (
          <p className="text-red-500 text-sm mt-1">
            Emails do not match.</p>
    )}
</div>


      <div>
        <label className="block font-semibold">Country *</label>
          <select
          className="w-full border border-gray-300 rounded p-2"
          value={country}
          onChange={(e) => Country(e.target.value)}>


          <option value="India">India</option>
          <option value="United Arab Emirates">UAE</option>
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
        </select>
      </div>

    <div>
          <label className="block font-semibold">Full Name *</label>
         <input type="text"
          className="w-full border border-gray-300 rounded p-2"
          required  value={fullName}
          onChange={(e) => FullName(e.target.value)} />
      </div>


      <div>
        <label className="block font-semibold">
          Street Address *</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2"
          required
          value={streetAddress}
          onChange={(e) => StreetAddress(e.target.value)} />
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div>
      <label className="block font-semibold">Postal Code *</label>
            <input type="text"
            className="w-full border border-gray-300 rounded p-2"
            required
            value={postalCode}
            onChange={(e) => PostalCode(e.target.value)}/>
        </div>

        <div>
          <label className="block font-semibold">City *</label>
          <input type="text"
            className="w-full border border-gray-300 rounded p-2"
            required
            value={city}
            onChange={(e) => City(e.target.value)}
          />
           </div>
                 </div>

            <div>
        <label className="block font-semibold">Province *</label>
    <input
          type="text" className="w-full border border-gray-300 rounded p-2"
          required
          value={province}
          onChange={(e) => Province(e.target.value)}/>
            </div>

{/* continue to payment navigation */}
    <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
        Continue to Payment
    </button>
    </form> );
};

export default CheckoutForm;
