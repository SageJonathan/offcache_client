// Styles imported globally in _app.tsx

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share What Moves You",
      description:
        "Tell us about your love for movement—hiking, climbing, yoga—or your curiosity about philosophy, mindfulness, and personal growth. We focus on what makes you human.",
      icon: "🌱",
    },
    {
      number: "02",
      title: "Meet Someone Like You",
      description:
        "Every month, we introduce you to one person who shares your interests in movement or mental growth. Whether it's a fellow hiker or someone exploring the same questions.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Connect Through Experience",
      description:
        "Meet for a hike, join a meditation session, or attend our monthly community events like spa days and forest walks. Real connections happen through shared experiences.",
      icon: "🚀",
    },
  ];

  const differences = [
    {
      title: "Not LinkedIn",
      description:
        "No job titles or professional networking. We focus on who you are as a person, not what you do for work.",
      icon: "🚫",
    },
    {
      title: "Not a Dating App",
      description:
        "This is about building authentic friendships and meaningful connections, not romantic relationships.",
      icon: "💝",
    },
    {
      title: "You Focused",
      description:
        "We curate 1-on-1 matches based on shared interests, not large group events. Quality over quantity.",
      icon: "👥",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">How It Works</h2>
          <p className="how-it-works__subtitle">
            Simple, thoughtful, and designed for authentic human connections
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__step-icon">
                <span className="how-it-works__step-number">{step.number}</span>
                <div className="how-it-works__step-emoji">{step.icon}</div>
              </div>
              <div className="how-it-works__step-content">
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works__differences">
          <h3 className="how-it-works__differences-title">
            How We're Different
          </h3>
          <div className="how-it-works__differences-grid">
            {differences.map((difference, index) => (
              <div
                key={index}
                className={`how-it-works__difference ${
                  index === 2 ? "how-it-works__difference--full-width" : ""
                }`}
              >
                <div className="how-it-works__difference-icon">
                  {difference.icon}
                </div>
                <h4 className="how-it-works__difference-title">
                  {difference.title}
                </h4>
                <p className="how-it-works__difference-description">
                  {difference.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
