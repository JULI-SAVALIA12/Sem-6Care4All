import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineSecurity } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineSupportAgent } from "react-icons/md";

const testimonials = [
  {
    name: 'Alice W.',
    location: 'Hodgenville, KY 42748',
    rating: 8,
    feedback:
      'Alice treated my mother as if she were her own! She helped our family in ways we didnt even know we needed. I would recommend her to anyone.',
    image: '/client1.png',
  },
  {
    name: 'Taylor R.',
    location: 'New York, NY 10001',
    rating: 10,
    feedback:
      'Taylor was amazing! She was so great with my kids and went above and beyond to ensure their safety. Highly recommended!',
    image: '/client(2).png',
  },
  {
    name: 'Lisa B.',
    location: 'San Francisco, CA 94131',
    rating: 9,
    feedback:
      'Lisa provided exceptional care and was very professional. She exceeded all our expectations!',
    image: '/client(3).png',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-20 px-5 rounded-3xl border-b-8 bg-white">
      <div className="flex flex-wrao items-center">
        {/* Left Content */}
        <div className="col-md-6 col-12 flex flex-col justify-center">
          <h2 className="text-4xl w-3/4 leading-relaxed font-bold mb-4">
            Don't just rely on a <span className='primarylight-bg neutral-text px-3 pb-2 rounded-md'>single</span> referral
          </h2>
          <p className="mb-4 text-lg">
            Tap into one of the largest online services for finding and managing care.
          </p>
          <ul className="m-0 p-0">
            <li className="flex items-center pb-4">
              <span className="text-4xl font-semibold mr-2 accent2-text"><MdOutlineSecurity/></span>
              100% of caregivers are background checked before you can hire.
            </li>
            <li className="flex items-center pb-4">
              <span className="text-4xl font-semibold mr-2 accent2-text"><ImProfile/></span>
              Transparent profiles, ratings, and reviews.
            </li>
            <li className="flex items-center pb-4">
              <span className="text-4xl font-semibold mr-2 accent2-text"><MdOutlineSupportAgent/></span>
              Dedicated safety and support teams.
            </li>
          </ul>
        </div>
        {/* Right Content */}
        <div className="col-md-6 col-12">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-5 border h-100 rounded-lg shadow-lg bg-white text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto rounded-full mb-4 w-24 h-24"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-yellow-500 font-semibold">
                  {`⭐`.repeat(testimonial.rating)} ({testimonial.rating})
                </p>
                <p className="text-gray-700 italic mt-3">{testimonial.feedback}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
