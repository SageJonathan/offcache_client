import React, { useState, useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const connectionSlides = [
    {
      id: 1,
      title: "Hiking Together",
      description: "Sarah & Marcus exploring mountain trails",
      image: "🏔️",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 2,
      title: "Meditation Session",
      description: "Alex & Sarah finding peace in mindfulness",
      image: "🧘‍♀️",
      color: "from-purple-400 to-indigo-600",
    },
    {
      id: 3,
      title: "Forest Walk",
      description: "Marcus & Alex connecting through nature",
      image: "🌿",
      color: "from-amber-400 to-orange-600",
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
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Featured in TechCrunch • 2,847+ humans connected
          </div>

          <h1 className="hero__title">
            Human Connections,
            <span className="hero__title-highlight"> Not Just Networking</span>
          </h1>

          <p className="hero__subtitle">
            Tired of awkward coffee chats and LinkedIn spam? We match you
            monthly with someone who shares your love for hiking, meditation, or
            personal growth. Real conversations happen through shared
            experiences.
          </p>

          <div className="hero__cta">
            <button className="hero__cta-primary">Start Free Trial</button>
            <button className="hero__cta-secondary">
              <span>See Sample Matches</span>
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
              <span>14-day free trial</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>Cancel anytime</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">✓</span>
              <span>Vetted members only</span>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">94%</span>
              <span className="hero__stat-label">
                Say they found real friends
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">156</span>
              <span className="hero__stat-label">Cities worldwide</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">2.8k+</span>
              <span className="hero__stat-label">Humans connected</span>
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
                    <div className="hero__slide-image">{slide.image}</div>
                    <div className="hero__slide-info">
                      <h3 className="hero__slide-title">{slide.title}</h3>
                      <p className="hero__slide-description">
                        {slide.description}
                      </p>
                    </div>
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
