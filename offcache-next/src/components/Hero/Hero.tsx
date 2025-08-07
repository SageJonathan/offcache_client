"use client";
import { useState, useEffect } from "react";
// Styles imported globally in _app.tsx

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const connectionSlides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % connectionSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [connectionSlides.length]);

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Human Connections,
            <span className="hero__title-highlight"> Not Just Networking</span>
          </h1>

          <p className="hero__subtitle">
            Tired of awkward coffee chats and LinkedIn spam? We're building a
            platform that matches you monthly with someone who shares your love
            for hiking, meditation, or personal growth.
          </p>

          <div className="hero__cta">
            <button className="hero__cta-primary">Join Waitlist</button>
            <button className="hero__cta-secondary">
              <span>Learn More</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>Free to join</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>No commitment</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>Quality over quantity</span>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">On waitlist</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">12</span>
              <span className="hero__stat-label">Cities planned</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">Q3 2025</span>
              <span className="hero__stat-label">Launch date</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__slideshow">
            <div className="hero__slideshow-container">
              {connectionSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`hero__slide ${
                    index === currentSlide ? "hero__slide--active" : ""
                  }`}
                >
                  <div className="hero__slide-content">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="hero__slide-photo"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="hero__slideshow-indicators">
              {connectionSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`hero__indicator ${
                    index === currentSlide ? "hero__indicator--active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
