import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import senior2 from "../assets/images/senior2.jpg";
import about1 from "../assets/images/about1.jpg";
import senior3 from "../assets/images/senior3.jpg";
import senior4 from "../assets/images/senior3.jpg";
import senior5 from "../assets/images/senior3.jpg";
const Seniorcare = () => {
    const blogs = [
        {
          date: "FEBRUARY 12, 2022",
          title: "Top 5 Tips for Wellson During the Holidays",
          description: "Proactively envisioned multimedia based expertise and cross-media growth...",
          image: {senior4},
          link: "#"
        },
        {
          date: "FEBRUARY 13, 2022",
          title: "Wellson a Checklists for the New Year",
          description: "Proactively envisioned multimedia based expertise and cross-media growth...",
          image: "/path-to-image2.jpg",
          link: "#"
        },
        {
          date: "FEBRUARY 14, 2022",
          title: "Our Experts Answer Your Questions About Dementia Care",
          description: "Proactively envisioned multimedia based expertise and cross-media growth...",
          image: "/path-to-image3.jpg",
          link: "#"
        }
      ];
    
  return (
    <>
      <Header />
      {/* banner */}
      <section className=' py-32 bg-contain bg-[url("../src/assets/images/senior1.png")] bg-no-repeat h-screen'>
        <div className="container mx-auto">
          <h2 className="text-6xl w-2/3 leading-relaxed ms-auto ps-5 font-bold">
            <span className="accent2-text">Senior Care,</span> Respite and
            Advanced Care Needs
          </h2>
          <p className="w-2/3 pe-24 text-center ms-auto">
            The care you need in the place you want. Discover the difference
            Visiting Angels will make in the life of your loved one.
          </p>
        </div>
      </section>
      {/* care */}
      <section className="py-32 px-6 bg-white flex flex-col md:flex-row items-center gap-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            {/* Content Section */}
          <div className="col-6">
            <h4 className="accent2-text text-sm font-semibold uppercase">
              Welcome to Care Giver
            </h4>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              We Provide the Best Elder Care Service
            </h2>
            <p className="text-gray-600 mt-4">
              The best way to provide the highest quality level of care requires
              an initial meeting where family and/or client meet with a visiting
              coordinator. This meeting includes a detailed review of care
              needed and schedule.
            </p>
            <p className="text-gray-600 mt-2">
              The best way to provide the highest quality level of care requires
              an initial meeting where family and/or client meet with a visiting
              coordinator. This meeting includes a detailed review of care
              needed and schedule.
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                ✅ Your Better Living Our Priority
              </li>
              <li className="flex items-center gap-2">
                ✅ # Elder Care Firm In Locality
              </li>
            </ul>

            {/* Button */}
            <button className="mt-6 btns accent2-text border-2 border-green-700 px-6 py-3 rounded-lg shadow-md transition">
              Know More →
            </button>
          </div>
          {/* Images Section */}
          <div className="col-5 relative">
            <img
              src={senior2}
              alt="Elderly woman with caregiver"
              className="rounded-lg shadow-md"
            />
            <img
              src={about1}
              alt="Holding hands"
              className="shadow-md w-2/3 mx-auto absolute bottom-0 border-8 border-white rounded-lg"
            />
          </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 bg-[#0A2A5E] text-white flex flex-col md:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={senior3}
            alt="Caregiver helping an elderly woman"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-10 w-12 h-12 bg-green-500 rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="md:w-1/2">
        <h4 className="text-green-400 text-sm font-semibold uppercase">Know About Us</h4>
        <h2 className="text-3xl font-bold mt-2">
          How Do Home Healthcare & Home Care Work Together?
        </h2>
        <p className="mt-4 text-gray-300">
          If you or your loved one is in need of caregiving services, we encourage you to
          reach out for a complimentary evaluation so we can customize an appropriate
          plan of care.
        </p>

        <p className="mt-2 text-gray-300">
          <a href="#" className="underline text-white font-semibold">Contact us</a> for more information.
        </p>
      </div>
    </section>
    <section className="py-12 px-6 bg-[#FCF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h4 className="accent-text text-sm font-semibold uppercase">Community Reviews</h4>
          <a href="#" className="accent-text font-semibold underline">View All Blogs</a>
        </div>
        <h2 className="text-3xl font-bold mb-6">Latest Articles & Blogs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="accent-text text-xs font-semibold">{blog.date}</p>
                <h3 className="text-lg font-bold mt-1">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
                <a href={blog.link} className="text-blue-600 font-semibold mt-3 block">Continue Reading ...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Seniorcare;
