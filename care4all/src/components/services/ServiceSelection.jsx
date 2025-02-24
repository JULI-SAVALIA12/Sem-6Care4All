import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

export default function ServiceSelection() {
  const [selectedServices, setSelectedServices] = useState(["Child Care"]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: "Child Care", icon: "/child-care.png" },
    { name: "Pet Care", icon: "/pet-care.png" },
    { name: "Housekeeping", icon: "/housekeeping.png" },
    { name: "Senior Care", icon: "/senior-care.png" },
    { name: "Tutoring", icon: "/tutoring.png" },
    { name: "Physiotherapy", icon: "/physiotherapy.png" }
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleNextClick = () => {
    if (selectedServices.length === 1) {
      setShowModal(true);
    } else {
      navigate("/FindJobChild2");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Do you provide any other services?</h2>
        <div className="w-full max-w-md space-y-3">
          {services.map((service) => (
            <label
              key={service.name}
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-3">
                <img src={service.icon} alt={service.name} className="w-6 h-6" />
                <span className="text-lg font-medium">{service.name}</span>
              </div>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.name)}
                onChange={() => toggleService(service.name)}
                className="w-5 h-5 text-blue-500"
              />
            </label>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="mt-6 px-6 py-2 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600"
        >
          Next
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
              <p className="text-lg">Do you want to continue without selecting another service?</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-200"
                >
                  No, go back
                </button>
                <button
                  onClick={() => navigate("/FindJobChild2")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
