import "./aboutC.scss";

const AboutC = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero-content">
          <h2 className="about__section-title">
            The Problem with Traditional Networking
          </h2>
          <p className="about__story-text">
            Endless coffee meetings. Forced conversations. Business cards that
            go straight to the trash. You're tired of networking that feels like
            work.
          </p>
          <p className="about__story-text">
            We built OffCache because real connections happen when you're doing
            something together—not sitting across from each other with elevator
            pitches.
          </p>
        </div>
      </div>

      <div className="about__container">
        <section className="about__what-we-do">
          <div className="about__section-header">
            <h2 className="about__section-title">Why You'll Love This</h2>
            <p className="about__section-subtitle">
              We're not just another networking app. We're your gateway to
              extraordinary experiences and genuine connections.
            </p>
          </div>

          <div className="about__features-content">
            <div className="about__feature-item">
              <div className="about__feature-content">
                <div className="about__feature-text">
                  <h3 className="about__feature-title">
                    🎯 Monthly Magic Matches
                  </h3>
                  <p className="about__feature-description">
                    Every month, we match you with someone in your city who
                    shares your values and interests—using a smart algorithm
                    designed to prioritize compatibility, not just proximity.{" "}
                  </p>{" "}
                  <p className="about__feature-description">
                    {" "}
                    You'll meet for a specific activity you both enjoy, like
                    hiking, meditation, or checking out a local event. It's not
                    about random coffee chats or awkward intros—it's about
                    building real connection through something you'd actually
                    want to do.
                  </p>
                </div>
                <div className="about__feature-image">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                    alt="People connecting through shared activities"
                  />
                </div>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-content">
                <div className="about__feature-text">
                  <h3 className="about__feature-title">
                    🌟 Epic Adventures Await
                  </h3>
                  <p className="about__feature-description">
                    In addition to your regular matches, we host optional events
                    that help you connect even more deeply—with everything from
                    casual game cafés to outdoor adventures and cozy dinners.
                    Events are priced separately but kept affordable, and
                    there's something for everyone—introverts, extroverts,
                    creatives, and explorers alike.{" "}
                  </p>{" "}
                  <p className="about__feature-description">
                    Each gathering includes a friendly facilitator (who's also a
                    skilled photographer!), so you can relax, connect, and even
                    come away with great memories captured. We design our events
                    around what you want—always listening, always evolving.
                  </p>
                </div>
                <div className="about__feature-image">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                    alt="Adventure activities and outdoor experiences"
                  />
                </div>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-content">
                <div className="about__feature-text">
                  <h3 className="about__feature-title">
                    🛡️ Trust & Safety First
                  </h3>
                  <p className="about__feature-description">
                    Your privacy and safety are non-negotiable. Our thorough
                    verification process ensures you're connecting with real,
                    vetted people who are just as committed to building
                    meaningful relationships as you are.{" "}
                  </p>{" "}
                  <p className="about__feature-description">
                    No catfishing, no fake profiles—just genuine humans.
                  </p>
                </div>
                <div className="about__feature-image">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                    alt="Safe and verified community"
                  />
                </div>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-content">
                <div className="about__feature-text">
                  <h3 className="about__feature-title">
                    🚀 Starting in Western Canada, Growing Worldwide
                  </h3>
                  <p className="about__feature-description">
                    We're launching in the stunning landscapes of Western
                    Canada, where adventure meets community. But this is just
                    the beginning—we're expanding across Canada, the USA, and
                    Europe.{" "}
                  </p>{" "}
                  <p className="about__feature-description">
                    Get in early and be part of something extraordinary from day
                    one.
                  </p>
                </div>
                <div className="about__feature-image">
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
                    alt="Western Canada landscapes and community"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about__join">
          <div className="about__join-content">
            <h2 className="about__join-title">Ready to Connect?</h2>
            <p className="about__join-subtitle">
              Join the waitlist and be among the first to experience meaningful
              connections through shared experiences.
            </p>
            <button className="about__join-button">Join Waitlist</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutC;
