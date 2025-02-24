import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wow.js"; // Import WOW.js
import "animate.css"; // Optional: Import animate.css for animations

const Banner = () => {
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

  return (
    <div className='py-32 md:py-48 lg:py-64 relative'>
      {/* Text content */}
      <div className="container mx-auto relative z-20 px-4 md:px-6">
        <div className="w-full md:w-3/4 lg:w-2/4">
          <h1 className="main-text font-bold text-3xl sm:text-4xl lg:text-5xl wow animate__animated animate__bounceIn" data-wow-duration="1s" data-wow-delay="0.5s">
            We Provide Best Care Service
            <p className="text-lg sm:text-xl text-dark py-2 sm:py-3 font-normal">
              Where Seniors, Pets, and Kids Find Love, Comfort, and Compassion.
            </p>
          </h1>
          <Link className="btn-main inline-block">
            <span>Learn More</span>
          </Link>
        </div>
      </div>

      {/* Background image */}
      <div className="bg-[url('assets/images/banner1.png')] bg-cover bg-no-repeat absolute inset-0 z-10"></div>

      {/* Shape */}
      <div className="shape absolute inset-0 z-0">
        <div className="circle1 h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] bg-cyan-700 rounded-full top-12 left-[57%] absolute"></div>
        <div className="circle2 h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px] bg-green-700 rounded-full top-24 left-[61%] absolute"></div>
        <div className="circle3 h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] bg-blue-500 rounded-full opacity-10 top-0 left-48 absolute zoom-fade"></div>
        <div className="circle4 h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[600px] lg:w-[600px] bg-green-500 rounded-full opacity-10 top-28 left-[50%] absolute zoom-fade"></div>
      </div>
    </div>
  );
};

export default Banner;
