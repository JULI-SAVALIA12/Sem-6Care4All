import React, { useState , useEffect } from "react";
import axios from "axios";
import "../../styles/style.css";
import WOW from "wow.js";
import "animate.css"; // Import Animate.css for animations
import { MdArrowForwardIos } from "react-icons/md";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const Service = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  
  const handleServiceClick = (icon) => {
    setSelectedService(icon);
    setOpen(true);
  };

  useEffect(() => {
    // Initialize WOW with configuration
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);


  useEffect(() => {
    const fetchdata = async () =>
    {
      const res = await axios.get("http://localhost/sem6/backend/FetchServices.php");
      console.log("Fetched Data:", res.data);
      setServices(res.data)
    };
    fetchdata();

  }, []);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  return (
    <div className="py-16 bg-gray-50 border-b-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Join 29 million families who've turned to Care
          </h2>
          <p className="text-lg text-gray-600">
            Background-checked care for all you love.
          </p>
        </div>

        {/* Services Cards */}
        <div className="d-flex flex-wrap col-12 justify-content-between">
    {Array.isArray(services) && services.length > 0 ? (
        services.map((service) => (
            <div key={service.id} className="col-12 col-sm-6 col-lg-4 mb-4 px-3  wow animate__animated animate__bounceIn" data-wow-duration="1s" data-wow-delay="0.5s" 
                onClick={() => handleServiceClick(service.icon)}>
                <div className="service-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-main-bg transition-all cursor-pointer text-center border-2 border-green-600">
                    <div className="icon-wrapper mb-4">
                        <img src={`http://localhost/sem6/care4all/src/assets/images/${service.icon}`} alt={service.service_name} className="text-6xl accent2-text mx-auto" height={64} width={64}/>
                    </div>
                    <h3 className="text-lg flex items-center justify-content-center font-semibold text-navy-900 mb-2">
                        {service.service_name} &nbsp; <MdArrowForwardIos/>
                    </h3>
                </div>
            </div>
        ))
    ) : (
        <div>No services available</div>
    )}
</div>
        {/* Modal Component */}
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setSelectedService(null);
          }}
          aria-labelledby="modal-title"
        >
          <Box sx={modalStyle} className="border-0 outline-none">
              <div className="text-9xl flex items-center justify-center mb-4 ">
                {selectedService}
              </div>
            <h2 className="text-xl font-semibold mb-6">I would like to:</h2>
            <div className="space-y-4">
              <Link to="/pincode"
                className="w-full block py-3 px-6 accent2-text rounded-full border-green-700 border-2  btns transition-colors"
                onClick={() => {/* Add find care logic */}}
              >
                Find care
              </Link>
              <Link to="/ServiceSelection"
                className="w-full block py-3 px-6 accent2-text rounded-full border-green-700 border-2 btns transition-colors"
                onClick={() => {/* Add find job logic */}}
              >
                Find a job
              </Link>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Service;