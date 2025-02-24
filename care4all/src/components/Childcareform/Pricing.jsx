import React from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
    <Header/>
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Premium Plan */}
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 w-80 shadow-lg relative">
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Best Value
          </span>
          <h2 className="text-xl font-semibold text-gray-900">Premium</h2>
          <p className="text-2xl font-bold mt-2">$6.99<span className="text-sm font-normal">/first mo*</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Includes background check for free</li>
            <li>✔ Rank higher in search results</li>
            <li>✔ Find and apply to jobs</li>
            <li>✔ See who’s viewed your profile</li>
            <li>✔ Be first to learn about new jobs</li>
          </ul>
          <Link to="/Premium" className="mt-6 px-4 mb-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Try Premium
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            *Renews at $10.99 per month. Recurring billing. Cancel anytime.
          </p>
        </div>

        {/* Basic Plan */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 w-80 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900">Basic</h2>
          <p className="text-2xl font-bold mt-2">$23.99<span className="text-sm font-normal">/yr*</span></p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Includes background check</li>
            <li>✔ Find and apply to jobs</li>
            <li>❌ Rank higher in search results</li>
            <li>❌ See who’s viewed your profile</li>
            <li>❌ Be first to learn about new jobs</li>
          </ul>
          <Link to="/Premium"  className="mt-6 px-4 w-full border border-gray-600 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition">
            Continue with Basic
          </Link>
          <p className="text-xs text-gray-500 mt-2">
            *Renews at $23.99 after 1 year. Recurs annually. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
