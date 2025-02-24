import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import petvideo from "../assets/images/petvideo.mp4";
import childimg1 from "../assets/images/childimg1.png";
import pet2 from "../assets/images/pet2.png";
import pet4 from "../assets/images/pet4.png";

const Petcare = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email');
      return;
    }
    // Handle form submission
  };

  return (
    <div>
      <Header/>
      
      {/* Video Banner Section */}
      <section className='relative py-16 h-screen'>
        <video 
          className="absolute top-0 left-0 w-full h-screen object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster={childimg1}
        >
          <source src={petvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </section>
        {/* About Us Section */}
        <div className="container mx-auto px-4 relative z-10 py-16 bg-gray-50">
          <div className="flex flex-wrap">
            {/* Left Column - Image */}
            <div className="col-6 relative">
              <img 
                src={pet2}
                alt="Happy Pug" 
                className="max-w-full rounded-lg absolute bottom-0"
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="col-6">
              <div className="bg-white shadow-lg bg-opacity-90 p-8 rounded-lg">
                <span className="accent2-text font-semibold text-lg">ABOUT US</span>
                <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mt-4 mb-6">
                  We Love to Take Care of Your Pets
                </h2>
                <p className="text-gray-700 mb-8">
                  Pawscare is the largest specialty pet retailer of services and solutions 
                  for the lifetime needs of pets. At Pawscare, we love pets, and we 
                  believe pets make us better people.
                </p>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <div className="flex items-center space-x-3">
                    <div className="accent2-bg  p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brown-800">Skilled Personal</span>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="flex items-center space-x-3">
                    <div className="accent2-bg  p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brown-800">Pets Care 24/7</span>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="flex items-center space-x-3">
                    <div className="accent2-bg  p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brown-800">Best Veterinars</span>
                  </div>
                  
                  {/* Feature 4 */}
                  <div className="flex items-center space-x-3">
                    <div className="accent2-bg p-2 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-brown-800">Quality Food</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className=" px-4 py-16 ">
          <div className="text-center mb-12">
            <span className="accent2-text font-semibold text-lg">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                What services do you offer for pets?
              </h3>
              <p className="text-gray-700 pl-8">
                We offer a comprehensive range of services including grooming, daycare, 
                boarding, veterinary care, training classes, and premium pet food and supplies.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                What are your operating hours?
              </h3>
              <p className="text-gray-700 pl-8">
                We are open 24/7 for pet boarding and emergency veterinary care. Regular services 
                are available Monday through Saturday, 8:00 AM to 8:00 PM.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                Do you provide emergency services?
              </h3>
              <p className="text-gray-700 pl-8">
                Yes, we have veterinarians on call 24/7 for emergency situations. Our emergency 
                contact number is available to all registered clients.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                What types of pets do you accommodate?
              </h3>
              <p className="text-gray-700 pl-8">
                We primarily care for dogs and cats, but also provide services for small pets 
                like rabbits, hamsters, and birds. Contact us for specific pet requirements.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                Do you offer pet pickup services?
              </h3>
              <p className="text-gray-700 pl-8">
                Yes, we offer pet pickup and drop-off services within a 10-mile radius of our 
                facility. Additional charges may apply based on distance.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-brown-800 mb-3 flex items-center">
                <span className="accent-text mr-3">Q.</span>
                What vaccinations are required?
              </h3>
              <p className="text-gray-700 pl-8">
                All pets must be up-to-date on core vaccinations. Dogs require DHPP, Rabies, 
                and Bordetella. Cats require FVRCP and Rabies. Proof of vaccination is required.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#FDF8F4]">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">            
              {/* Right Column - Subscribe Form */}
              <div className="col-5">
                <div className="text-center md:text-left">
                  <span className="accent2-text font-semibold text-lg">TESTIMONIALS</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-brown-800 mt-4 mb-8">
                    Subscribe for Newsletter
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email *"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent2"
                      />
                      {error && (
                        <div className="absolute -bottom-6 left-0 text-red-500 text-sm">
                          {error}
                        </div>
                      )}
                    </div>
                    
                    <button 
                      type="submit"
                      className="accent2-bg text-white font-semibold px-8 py-3 rounded-lg mt-8 hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      <span className="mr-2">SUBSCRIBE</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </form>
                  
                  <p className="text-gray-600 mt-8">
                    Stay always in touch! Subscribe to our newsletter.
                  </p>
                </div>
              </div>
               {/* Left Column - Image */}
               <div className="col-7 -mt-32">
                <img 
                  src={pet4}
                  alt="Cute pet with ball" 
                  className="max-w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      <Footer/>
    </div>
  )
}

export default Petcare
