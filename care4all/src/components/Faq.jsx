import React, { useState } from 'react';
import childimg4 from '../assets/images/childimg4.png'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Why do we have to go to school?",
      answer: "It is a long established fact that a reader will be distracted by the read content of a page when looking at its layout. Many desktop publish packages and web page editors now use Loremdefault model."
    },
    {
      question: "What subjects will I learn in school?",
      answer: "Students learn core subjects like Mathematics, Science, English, and Social Studies, along with specialized subjects based on their grade level and interests. The curriculum is designed to provide a well-rounded education."
    },
    {
      question: "How do you ensure children's safety?",
      answer: "We maintain strict security protocols, trained staff, and modern surveillance systems. Regular safety drills and detailed emergency procedures ensure your child's wellbeing throughout their time with us."
    },
    {
      question: "What are your teaching methods?",
      answer: "We employ a blend of traditional and modern teaching methods, incorporating technology, hands-on activities, and personalized learning approaches to ensure each child reaches their full potential."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Column - Image */}
          <div className="col-6">
            <img 
              src={childimg4}
              alt="FAQ illustration" 
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          {/* Right Column - FAQ Content */}
          <div className="col-6">
            <div className="mb-8">
              <h4 className="accent-text font-medium mb-2">Some FAQ</h4>
              <h2 className="text-4xl font-bold mb-4">Empowering Children Through Education Playful Mind</h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <span className={`accent-text transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 py-4 bg-white transition-all duration-300 ${
                      activeIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq; 