import React, { useState } from "react";
import "./signIn.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in:", formData);
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__content">
          <div className="signin__header">
            <h1 className="signin__title">Welcome Back</h1>
            <p className="signin__subtitle">
              Sign in to continue your journey toward meaningful connections
            </p>
          </div>

          <form className="signin__form" onSubmit={handleSubmit}>
            <div className="signin__form-group">
              <label htmlFor="email" className="signin__label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="signin__input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="signin__form-group">
              <label htmlFor="password" className="signin__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="signin__input"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="signin__form-options">
              <label className="signin__checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="signin__checkbox"
                />
                <span className="signin__checkbox-text">Remember me</span>
              </label>
              <a href="#" className="signin__forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="signin__submit">
              Sign In
            </button>
          </form>

          <div className="signin__divider">
            <span className="signin__divider-text">or</span>
          </div>

          <div className="signin__social">
            <button className="signin__social-button signin__social-button--google">
              <svg className="signin__social-icon" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="signin__footer">
            <p className="signin__footer-text">
              Don't have an account?{" "}
              <a href="/signup" className="signin__footer-link">
                Sign up
              </a>
            </p>
          </div>
        </div>

        <div className="signin__image">
          <div className="signin__image-content">
            <h2 className="signin__image-title">Connect for Real</h2>
            <p className="signin__image-subtitle">
              Join thousands of people building meaningful connections through
              shared experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
