import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import "../styles/style.scss";
import about1 from "../assets/images/about1.jpg";
import signature from "../assets/images/about2.png";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import juli from "../assets/images/juli.jpg";
import ankita from "../assets/images/ankita.jpg";
import krishna from "../assets/images/krishna.jpg";
import pet1 from "../assets/images/pet1.jpg";
import { Link } from "react-router-dom";
const Aboutus = () => {
  return (
    <div>
      <section className='bg-[url("assets/images/tutor.jpg")] bg-cover bg-no-repeat pb-44'>
        <Header />
        <div className="h-44 w-full text-center py-16 font-bold text-3xl px-6 bg-white/50 backdrop-blur-[5px] mx-auto mt-20">
          Learn About-Us
        </div>
      </section>

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="accent-text text-xl font-medium mb-4">
            WELCOME TO CARE4ALL
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 main-text">
            Compassionate Care for Every Stage of Life
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Override the digital divide with additional clickthroughs from
            DevOps. Nanotechnology immersion along the information highway will
            close the loop on focusing solely on the bottom line digital divide
            with additional clickthroughs immersion along.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-lg p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Skilled Nursing
            </h3>
            <p className="text-gray-600 mb-6">
              We've helped thousands of old people to make better their living
              and for good health.
            </p>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
              KNOW MORE
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-red-50 rounded-lg p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Home Care Visit
            </h3>
            <p className="text-gray-600 mb-6">
              We've helped thousands of old people to make better their living
              and for good health.
            </p>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              KNOW MORE
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Accommodation
            </h3>
            <p className="text-gray-600 mb-6">
              We've helped thousands of old people to make better their living
              and for good health.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="flex flex-wrap col-12 justify-between items-center">
          {/* Image Column */}
          <div className="col-4">
            <img
              src={about1}
              alt="Caring hands"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>

          {/* Mission Text Column */}
          <div className="col-5">
            <h2 className="text-2xl font-bold text-navy-900 leading-tight">
              Our mission is to provide the best services for your life better
            </h2>
          </div>

          {/* Signature Column */}
          <div className="col-2">
            <img
              src={signature}
              alt="Signature"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="accent-text text-xl font-medium mb-4">MEET THE</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 main-text">
            FOUNDERS OF CARE4ALL
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Our dedicated team of developers worked together to create Care4All,
            bringing expertise in React, Tailwind CSS, and responsive design.
          </p>
        </div>

        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
              <img
                src={juli}
                alt="Team Member 1"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-navy-900">Savalia Juli</h3>
              <p className="text-blue-600 mb-2">Frontend Developer</p>
              <p className="text-gray-600 text-sm mb-4">
                React & UI/UX Specialist
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <FaGithub />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <CiLinkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
              <img
                src={krishna}
                alt="Team Member 2"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-navy-900">
                Makvana Krishna
              </h3>
              <p className="text-blue-600 mb-2">Backend Developer</p>
              <p className="text-gray-600 text-sm mb-4">
                API & Database Expert
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <FaGithub />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <CiLinkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
              <img
                src={ankita}
                alt="Team Member 3"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-navy-900">
                Prajapati Ankita
              </h3>
              <p className="text-blue-600 mb-2">Frontend Developer</p>
              <p className="text-gray-600 text-sm mb-4">Technical Lead</p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <FaGithub />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <CiLinkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-2">
              <img
                src="path_to_team_member4_image.jpg"
                alt="Team Member 4"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-navy-900">
                Shyora Jaimini
              </h3>
              <p className="text-blue-600 mb-2">Frontend Developer</p>
              <p className="text-gray-600 text-sm mb-4">
                UI Components Specialist
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <FaGithub />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <CiLinkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* saftey */}
      <div className="pb-28 pt-24">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="col-6">
              <img
                src={pet1}
                alt="Safety"
                className="w-full h-auto [clip-path:polygon(0%_0%,75%_0%,100%_50%,75%_100%,0%_100%)]"
              />
            </div>
            <div className="col-6 ps-4">
              <div className="">
                <h2 className="text-4xl font-bold text-navy-900 mb-6 main-text">
                  Find{" "}
                  <span className="bg-blue-200 text-white rounded-lg p-2 leading-loose">
                    peace of mind
                  </span>{" "}
                  with safety resources.
                </h2>
                  <h2 className="text-xl font-bold text-navy-900 mb-6">
                    Our Safety Pledge means we're dedicated to you and your
                    safety.
                  </h2>

                      {/* Safety Points */}
                     <ul className="m-0 p-0">
                      <li className="pb-3">1. &nbsp; All caregivers you can hire are background-checked.</li>
                      <li className="pb-3">2. &nbsp; Supplemental Background Check reports available for purchase.</li>
                      <li className="pb-3">3. &nbsp; Dedicated safety team reviews all job posts and caregiver profiles.</li>
                      <li className="pb-3">4. &nbsp; Learn more with dozens of articles and resources in our <u>trust and safety center</u>.</li>
                     </ul>
                    </div>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
