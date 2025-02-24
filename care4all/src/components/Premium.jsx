import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./footer/Footer";

export default function Premium() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [zip, setZip] = useState("");

  return (
  <>
    <Header/>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6">
      {/* Sidebar Progress */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <div className="border-l-4 border-blue-500 pl-2 mb-2">
          <p>
            Only paying members can fully see and respond to your applications.
            By submitting this form, you agree that your credit card will be
            charged $6.99, plus applicable sales tax. You also agree that your
            subscription will automatically renew and you authorize us to charge
            your credit card $10.99 monthly, plus any applicable sales tax,
            unless you downgrade or close your Care.com account before the
            renewal date via your Account Settings. Once charged, all purchases,
            including renewals, are non-refundable.
          </p>
        </div>
      </div>

      {/* Checkout Form */}
      <div className="w-full md:w-2/4 bg-white p-6 mx-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-gray-600 mb-4">Enter your payment information</p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Name on Card"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3"
        />
        <input
          type="text"
          placeholder="Credit card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3"
        />
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Expiration date"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-1/2 p-3 border rounded-lg mb-3"
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-1/2 p-3 border rounded-lg mb-3"
          />
        </div>
        <input
          type="text"
          placeholder="Billing Zip Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full p-3 border rounded-lg mb-3"
        />
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-3">ORDER SUMMARY</h3>
        <p className="flex justify-between">
          <span>1-Month Membership:</span> <span>$10.99</span>
        </p>
        <p className="flex justify-between text-green-500">
          <span>$4.00 Discount</span> <span>- $4.00</span>
        </p>
        <p className="flex justify-between">
          <span>Estimated Sales Tax (0%)</span> <span>$0.00</span>
        </p>
        <hr className="my-2" />
        <p className="flex justify-between text-xl font-bold">
          <span>Today's Total:</span> <span>$6.99</span>
        </p>
        <p className="text-blue-600 text-sm mt-1 cursor-pointer">
          $4 discount applies to first month only.
        </p>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="text-gray-500">Go back</button>
          <button className="btns border-2 border-green-700 accent-text px-6 py-2 rounded-lg  transition">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
}
