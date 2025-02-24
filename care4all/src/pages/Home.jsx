import React, { useState } from "react";
import "../styles/style.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import hairbrushIcon from "../assets/images/hairbrush.png";
import nursinghome from "../assets/images/nursing-home.png";
import medicine from "../assets/images/medicine.png";
import Helping from "../assets/images/social-care.png";
import Grocery from "../assets/images/grocery.png";
import handshake from "../assets/images/handshake.png";
import Service from "../components/services/Service";
import { FaShieldAlt, FaWalking } from "react-icons/fa";
import healthcare from "../assets/images/healthcare.jpg";
import phone from "../assets/images/phone.webp";
import Footer from "../components/footer/Footer";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";

const Home = () => {
  const [activeTab, setActiveTab] = useState("care");

  return (
    <div className="main-bg">
      <Header />
      <Banner />
      <Service />
      {/* find area find job and find diagnosis */}
      <section className="px-4 border-b-8 py-40 bg-[url('assets/images/tab-bg.webp')] bg-fixed bg-center bg-[rgba(0,0,0,0.6)] bg-blend-multiply bg-cover bg-no-repeat">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-wrap">
            <div className="col-6">
              <h2 className="text-white text-4xl text-center font-bold">
                <span className="block mb-6 primarylight-bg py-4 rounded-2xl">
                  Connecting families with{" "}
                </span>
                <span className="block primarylight-bg py-4 rounded-2xl">
                  quality, local caregivers
                </span>
              </h2>
            </div>
            <div className="col-5 bg-white border-2 rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-8 mb-6 relative">
                {/* Animated Underline */}
                <div
                  className="absolute bottom-0 h-0.5 primary-bg transition-all duration-300"
                  style={{
                    left:
                      activeTab === "care"
                        ? "0"
                        : activeTab === "job"
                        ? `${
                            document.querySelector("button:nth-child(2)")
                              ?.offsetLeft
                          }px`
                        : `${
                            document.querySelector("button:nth-child(3)")
                              ?.offsetLeft
                          }px`,
                    width: `${
                      document.querySelector(
                        `button:nth-child(${
                          activeTab === "care" ? 1 : activeTab === "job" ? 2 : 3
                        })`
                      )?.offsetWidth
                    }px`,
                  }}
                />

                {/* Tab Buttons */}
                <button
                  className={`pb-2 text-lg font-medium relative ${
                    activeTab === "care" ? "accent-text" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("care")}
                >
                  Find care
                </button>

                <button
                  className={`pb-2 text-lg font-medium relative ${
                    activeTab === "job" ? "accent-text" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("job")}
                >
                  Find a job
                </button>

                <button
                  className={`pb-2 text-lg font-medium relative ${
                    activeTab === "diagnosis" ? "accent-text" : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("diagnosis")}
                >
                  Find diagnosis
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="w-full p-3 border rounded-lg pl-10"
                />
              </div>

              {/* Search Button */}
              <button className="w-full accent-bg text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 border-b-8 py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h5 className="accent-text font-medium mb-4">OUR BENEFITS</h5>
            <h4 className="main-text text-7xl md:text-4xl font-bold mb-6">
              What is Home Care... In Home Care Services For Everyone.
            </h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how professional Wellson approach caring for your loved
              one in order to engage
            </p>
          </div>

          <div className="flex flex-wrap col-12">
            {/* Benefit Card 1 */}
            <div className="col-4 justify-content-between items-center p-6 transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={hairbrushIcon} alt="hairbrush" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Personal Grooming Like Bathing or Getting Dressed
              </h3>
            </div>

            {/* Benefit Card 2 */}
            <div className="col-4 border-x-2 border-b-2 justify-content-between items-center p-6  transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={nursinghome} alt="hairbrush" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Helping a Person with Dementia by Grounding and Orienting Them
              </h3>
            </div>

            {/* Benefit Card 3 */}
            <div className="col-4 justify-content-between items-center p-6  transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={medicine} alt="medicine" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Take Care of Medication Reminders
              </h3>
            </div>

            {/* Benefit Card 4 */}
            <div className="col-4 border-t-2 justify-content-between items-center p-6  transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={Helping} alt="helping" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Moving Around. Getting in and out of the Bed or Shower
              </h3>
            </div>

            {/* Benefit Card 5 */}
            <div className="col-4 border-x-2  justify-content-between items-center p-6  transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={Grocery} alt="grocery" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Errands Like Grocery Shopping and Picking up Prescriptions
              </h3>
            </div>

            {/* Benefit Card 6 */}
            <div className="col-4 border-t-2 justify-content-between items-center p-6  transition-all hover:shadow-lg flex flex-wrap">
              <div className="w-16 h-16 accent2-text mb-4">
                <img src={handshake} alt="handshake" className="" />
              </div>
              <h3 className="text-lg w-2/3 mb-3 inline accent2-text">
                Keeping Them Safe and Comfortable
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare section */}
      <section className="py-20 bg-white justify-between border-b-8">
        <div className="container py-5">
          <div className="flex flex-wrap">
            {/* Left Content Column */}
            <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
              <div className="pe-lg-4">
                {/* Vision Label */}
                <p className="text-success fw-medium mb-3">
                  OUR VISION FOR LONG TERM
                </p>

                {/* Main Heading */}
                <h1 className="text-navy-900 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  How Do Home Healthcare & Home Care Work Together?
                </h1>

                {/* Main Content */}
                <p className="text-gray-700 mb-4">
                  We often find ourselves working side-by-side with home
                  healthcare providers in order to deliver the best possible
                  caregiving services to fit each client's needs. For example,
                  the our agency may change your loved one's prescription or
                  recommend a therapy regimen. Our Wellson are there with your
                  family member day in and day out to make sure they take those
                  medicines and stick.
                </p>

                {/* Call to Action */}
                <p className="text-navy-900 font-medium mb-5">
                  If you or your loved one is in need of caregiving services, we
                  encourage you to reach out for a complimentary evaluation so
                  we can customize an appropriate plan of care. Contact us for
                  more information.
                </p>

                {/* Features */}
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <FaShieldAlt className="text-success fs-1 me-3" />
                      <div>
                        <h3 className="h5 mb-0">Safety & Security</h3>
                        <p className="mb-0">Guarantee</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <FaWalking className="text-success fs-1 me-3" />
                      <div>
                        <h3 className="h5 mb-0">Restore Style</h3>
                        <p className="mb-0">Living</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="col-lg-5 col-md-12">
              <div className="position-relative flex justify-end">
                <img
                  src={healthcare}
                  alt="Healthcare provider with patient"
                  className="img-fluid rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* <Testimonials /> */}
            <TestimonialSlider/>

      {/* find care easier */}
      <section className="bg-white py-20 overflow-hidden border-b-8">
        <div className="">
          <div className="flex flex-wrap col-12 justify-between">
            {/* left */}
              <div className="col-6">
                  <img src={phone} alt="" className="h-100 rounded-3xl w-100" />
              </div>
              {/* right */}
              <div className="col-6 px-5 pe-3">
                  <h2 className="text-[#223645] text-4xl font-bold mb-12">
                      We make <br/>
                      finding care easier
                  </h2>

                  {/* Step 1 */}
                  <div className="mb-10">
                      <div className="flex items-center gap-4 mb-3">
                          <span className="text-[#2E7BEF] text-4xl font-bold">1</span>
                          <h3 className="text-[#223645] text-2xl font-bold">Tell us what you need</h3>
                      </div>
                      <p className="text-gray-600 text-lg">
                          Share your care needs and start reviewing profiles.
                      </p>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-10">
                      <div className="flex items-center gap-4 mb-3">
                          <span className="text-[#2E7BEF] text-4xl font-bold">2</span>
                          <h3 className="text-[#223645] text-2xl font-bold">Choose your caregiver</h3>
                      </div>
                      <p className="text-gray-600 text-lg">
                          Start a conversation and hire the caregiver that's right for you.
                      </p>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-10">
                      <div className="flex items-center gap-4 mb-3">
                          <span className="text-[#2E7BEF] text-4xl font-bold">3</span>
                          <h3 className="text-[#223645] text-2xl font-bold">Get 24/7 support</h3>
                      </div>
                      <p className="text-gray-600 text-lg">
                          Chat with a live agent in an average of 1 minute or less.
                      </p>
                  </div>

                  <button className="bg-[#223645] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#1a2832] transition-colors">
                      Get started
                  </button>
              </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
