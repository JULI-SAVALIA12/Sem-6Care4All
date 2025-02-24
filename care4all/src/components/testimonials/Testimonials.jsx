import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: "Daniel Clifford",
    designation: "Verified Graduate",
    img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg",
    title: "I received a job offer mid-course...",
    feedback: `I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here...`,
    bgColor: "bg-purple-600",
  },
  {
    name: "Jonathan Walters",
    designation: "Verified Graduate",
    img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg",
    title: "The team was very supportive...",
    feedback: `I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.`,
    bgColor: "bg-gray-700",
  },
  {
    name: "Kira Whittle",
    designation: "Verified Graduate",
    img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg",
    title: "Such a life-changing experience...",
    feedback: `Before joining the bootcamp, I’ve never written a line of code. I needed structure from professionals who can help me learn programming step by step.`,
    bgColor: "bg-white text-black",
  },
  {
    name: "Jeanette Harmon",
    designation: "Verified Graduate",
    img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg",
    title: "An overall wonderful experience",
    feedback: `Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.`,
    bgColor: "bg-white text-black",
  },
  {
    name: "Patrick Abrams",
    designation: "Verified Graduate",
    img: "https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg",
    title: "Awesome teaching support...",
    feedback: `The staff seem genuinely concerned about my progress. The program gave me the confidence to present myself as a capable junior developer.`,
    bgColor: "bg-gray-800",
  },
];

const Testimonials = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Graduates Say</h2>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className={`rounded-lg shadow-lg p-5 ${testimonial.bgColor}`}
              >
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.designation}</small>
                  </div>
                </div>
                <h4 className="fw-bold">{testimonial.title}</h4>
                <p>{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
