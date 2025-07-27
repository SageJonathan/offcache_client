import React, { useState, useEffect } from "react";
import "./testimonials.scss";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager, Stripe",
      quote:
        "OffCache introduced me to people I actually want to stay in touch with. It's not about collecting business cards—it's about building real relationships.",
      avatar: "SC",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Lead, Airbnb",
      quote:
        "The monthly events are incredible. I've found mentors, collaborators, and friends—all through genuine conversations about shared interests.",
      avatar: "MR",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Alex Thompson",
      role: "Founder, Tech Startup",
      quote:
        "Finally, a networking platform that focuses on who I am as a person, not just my job title. The matches are spot-on every time.",
      avatar: "AT",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">What Our Members Say</h2>
          <p className="testimonials__subtitle">
            Real connections, real stories
          </p>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`testimonials__indicator ${
                  index === activeTestimonial
                    ? "testimonials__indicator--active"
                    : ""
                }`}
              />
            ))}
          </div>

          <div className="testimonials__carousel">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonials__testimonial ${
                  index === activeTestimonial
                    ? "testimonials__testimonial--active"
                    : ""
                }`}
              >
                <div className="testimonials__testimonial-content">
                  <div className="testimonials__testimonial-header">
                    <div
                      className={`testimonials__testimonial-avatar testimonials__testimonial-avatar--${
                        index + 1
                      }`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div className="testimonials__testimonial-info">
                      <h4 className="testimonials__testimonial-name">
                        {testimonial.name}
                      </h4>
                      <p className="testimonials__testimonial-role">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <blockquote className="testimonials__testimonial-quote">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
