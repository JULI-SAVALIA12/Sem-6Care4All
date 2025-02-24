import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function FindJobChild2() {
  const [count, setCount] = useState(1);
  const [selectedAges, setSelectedAges] = useState([]);
  const [hourlyRate, setHourlyRate] = useState(17);

  const ageGroups = ["0 - 11 mos", "1 - 3 yrs", "4 - 5 yrs", "6 - 11 yrs", "12+ yrs"];

  const toggleAgeSelection = (age) => {
    setSelectedAges((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age]
    );
  };

  return (
   <>
    <Header/>
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Who would you like to care for?</h2>
      <p className="text-lg mb-2">I'm comfortable caring for:</p>
      <div className="flex items-center space-x-4 mb-4">
        <button 
          className="px-4 py-2 bg-gray-300 rounded-full text-xl"
          onClick={() => setCount((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button 
          className="px-4 py-2 bg-gray-300 rounded-full text-xl"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <p className="text-lg">Child</p>
      
      <h3 className="text-lg font-semibold mt-6">Ages</h3>
      <p className="text-sm text-gray-500 mb-3">Select all that apply</p>
      <div className="flex flex-wrap gap-3">
        {ageGroups.map((age) => (
          <button
            key={age}
            className={`px-4 py-2 border rounded-full ${selectedAges.includes(age) ? "bg-blue-500 text-white" : "bg-white"}`}
            onClick={() => toggleAgeSelection(age)}
          >
            {age}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">My hourly rate</h3>
      <div className="flex items-center space-x-3 mt-2">
        <span className="text-2xl font-bold text-blue-600">${hourlyRate}</span>
        <span className="text-gray-500">/hr</span>
      </div>
      <input 
        type="range" 
        min="10" max="50" 
        value={hourlyRate} 
        onChange={(e) => setHourlyRate(e.target.value)} 
        className="w-64 mt-2"
      />
      
      <button className="mt-6 px-6 py-3 btns border-2 border-green-700 accent-text text-lg rounded-lg hover:bg-red-600">
        Next
      </button>
    </div>
    <Footer/>
   </>
  );
}
