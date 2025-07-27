import React, { useState, useEffect } from "react";
import "./testimonials.scss";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah",
      role: "Product Manager at Stripe",
      quote:
        "I was matched with Marcus who loves hiking as much as I do. We've explored 3 different trails together and have the most meaningful conversations while walking. It's so much better than awkward coffee chats! We're planning a weekend backpacking trip next month.",
      avatar: "S",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Marcus",
      role: "Engineering Lead at Airbnb",
      quote:
        "The platform connected me with Alex who's exploring mindfulness and philosophy. We meet weekly for meditation sessions and have deep conversations about personal growth. I've learned so much about myself through these connections. It's exactly what I was looking for.",
      avatar: "M",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Alex",
      role: "Founder of Tech Startup",
      quote:
        "Instead of networking events, I get to climb mountains with my matches. The shared experience of being outdoors and pushing our limits creates such authentic connections. I've found 2 co-founders and 3 advisors through this platform. It's changed everything.",
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
          <h2 className="testimonials__title">Real Stories from Real Humans</h2>
          <p className="testimonials__subtitle">
            See how our members are building authentic connections through
            shared experiences
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
