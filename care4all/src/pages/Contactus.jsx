import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/style.scss";
import housekeeping from "../assets/images/housekeeping.jpg";

const Contactus = () => {
  return (
    <div>
      <section className='bg-[url("assets/images/contactus.jpg")] bg-cover bg-no-repeat pb-44 bg-center'>
        <Header />
        <div className="h-44 w-full text-center py-16 font-bold text-3xl px-6 bg-white/50 backdrop-blur-[5px] mx-auto mt-20">
          Contact-Us
        </div>
      </section>
      {/* contact info section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-between items-center">
          <div className="col-lg-6 col-md-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-4xl font-bold accent2-text mb-6">GET IN TOUCH</h2>
              <h3 className="text-5xl font-bold primary-text mb-8">Stay Connected</h3>
              <p className="text-gray-600 mb-12">
                Ullamcorper malesuada proin libero nunc. Tempor commodo ullamcorper a lacus vestibulum sed.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#FFF6F0] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 accent2-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#4D4D4D] mb-1">Our Address</h4>
                    <p className="text-gray-600">92 Bowery St. NY 10013, USA</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#FFF6F0] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 accent2-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#4D4D4D] mb-1">Our Email</h4>
                    <p className="text-gray-600">pawscare@mail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#FFF6F0] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 accent2-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#4D4D4D] mb-1">Our Phone</h4>
                    <p className="text-gray-600">+1 800 555 805 35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={housekeeping} alt="housekeeping" className="w-100 h-[584px]"/>
          </div>
        </div>
      </div>
       {/* Message Box Section */}
       <div className="py-16">
          <div className="text-center mb-12">
            <h4 className="text-xl font-semibold accent2-text mb-4">GET IN TOUCH</h4>
            <h2 className="text-4xl font-bold primary-text">Drop A Message</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <textarea 
                rows="6" 
                placeholder="Your Message" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary resize-none"
              ></textarea>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btns border-2 border-green-600 accent2-text px-8 py-3 rounded-lg"
                >
                  SUbmit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Contactus;
