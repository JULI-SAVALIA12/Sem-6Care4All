import React, { useState } from "react";
import { FaPaw, FaClock, FaCheckCircle } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function PetFindJob() {
  const [availability, setAvailability] = useState("");
  const [experience, setExperience] = useState("");
  const [services, setServices] = useState([]);

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
        <FaPaw className="text-orange-500 mr-2" />
        Find a Pet Care Job
      </h1>
      <p className="text-gray-700 text-lg mb-6">Answer a few questions to find the best pet care opportunities.</p>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {/* Question 1: Availability */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            When are you available to work?
          </label>
          <select
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="">Select availability</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
            <option value="weekends">Weekends Only</option>
            <option value="nights">Nights</option>
          </select>
        </div>

        {/* Question 2: Experience */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaCheckCircle className="mr-2 text-green-500" />
            How many years of pet care experience do you have?
          </label>
          <input
            type="number"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter years of experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        {/* Question 3: Services */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaPaw className="mr-2 text-orange-500" />
            What pet care services can you provide?
          </label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {["Dog Walking", "Pet Sitting", "Grooming", "Training", "Vet Visits", "Overnight Care"].map(
              (service) => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    services.includes(service)
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  } transition duration-300`}
                >
                  {service}
                </button>
              )
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button className="btns accent2-text border-2 border-green-700 text-lg font-semibold px-6 py-3 rounded-full w-full mt-6 hover:bg-orange-600 transition">
          Find Jobs
        </button>
      </div>
    </div>
        <Footer/>
    </>
  );
}
