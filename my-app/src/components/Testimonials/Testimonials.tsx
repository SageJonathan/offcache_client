import React, { useState, useEffect } from "react";
import "./testimonials.scss";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah",
      role: "Beta Tester",
      quote:
        "I was part of the early testing group and the concept is exactly what I've been looking for. Instead of awkward networking events, I got matched with someone who loves hiking as much as I do. The shared experience made conversation flow naturally.",
      avatar: "S",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Marcus",
      role: "Early Access Member",
      quote:
        "The platform's focus on shared interests rather than job titles is refreshing. I was matched with someone exploring mindfulness and we've had the most meaningful conversations about personal growth. Can't wait for the full launch!",
      avatar: "M",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Alex",
      role: "Founding Member",
      quote:
        "I've been part of the development process and the attention to quality over quantity is what sets this apart. The curated matching based on shared activities creates authentic connections that traditional networking just can't match.",
      avatar: "A",
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
          <h2 className="testimonials__title">What Our Beta Testers Say</h2>
          <p className="testimonials__subtitle">
            Early feedback from our founding members
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
