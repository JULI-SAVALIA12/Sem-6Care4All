import React, { useState } from "react";
import { FaBook, FaClock, FaChalkboardTeacher } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function PersonalTutorFindJob() {
  const [availability, setAvailability] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [experience, setExperience] = useState("");

  const toggleSubject = (subject) => {
    setSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  return (
   <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
        <FaChalkboardTeacher className="text-indigo-500 mr-2" />
        Find a Tutoring Job
      </h1>
      <p className="text-gray-700 text-lg mb-6">Answer a few questions to find the best tutoring opportunities.</p>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        {/* Question 1: Availability */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            When are you available to tutor?
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
            <option value="evenings">Evenings</option>
          </select>
        </div>

        {/* Question 2: Subjects */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaBook className="mr-2 text-green-500" />
            What subjects can you tutor?
          </label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {["Math", "Science", "English", "History", "Physics", "Music"].map((subject) => (
              <button
                key={subject}
                onClick={() => toggleSubject(subject)}
                className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                  subjects.includes(subject)
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-gray-100 text-gray-800 border-gray-300"
                } transition duration-300`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: Experience */}
        <div className="mb-4">
          <label className="text-lg font-semibold text-gray-800 flex items-center">
            <FaChalkboardTeacher className="mr-2 text-indigo-500" />
            How many years of tutoring experience do you have?
          </label>
          <input
            type="number"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter years of experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button className="accent2-text btns border-2 border-green-700 text-lg font-semibold px-6 py-3 rounded-full w-full mt-6 hover:bg-indigo-600 transition">
          Find Jobs
        </button>
      </div>
    </div>
    <Footer/>
   </>
  );
}
