import React, { useState, useEffect } from "react";

export default function FindingMatches() {
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <h1 className="text-4xl font-bold accent2-text mb-6">Care4All</h1>

      {/* Information Text */}
      <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
        Did you know, 100% of caregivers you see on Care.com are background
        checked?
      </p>

      {/* Caregiver Profiles */}
      <div className="flex space-x-6 mb-4">
        {/* Profile 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Joanna R."
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <p className="font-semibold">Joanna R.</p>
          <div className="flex text-yellow-500">
            {"★★★★★"}
          </div>
        </div>

        {/* Profile 2 (Blurred) */}
        <div className="flex flex-col items-center opacity-50">
          <img
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="Lauren N."
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <p className="font-semibold">Lauren N.</p>
          <div className="flex text-gray-400">{"★★☆☆☆"}</div>
        </div>
      </div>

      {/* Finding Matches Message */}
      <p className="text-gray-600 mb-3">Sit tight, we're finding matches near you...</p>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
