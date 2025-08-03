import React, { useState } from "react";
import "./addEvent.scss";

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  country: string;
  province: string;
  city: string;
  location: string;
  googleMapsLink: string;
  category: string;
  maxAttendees: string;
  image: string;
  price: string;
  organizer: string;
  paymentLink: string;
}

const AddEvent = () => {
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    date: "",
    time: "",
    timezone: "",
    country: "",
    province: "",
    city: "",
    location: "",
    googleMapsLink: "",
    category: "",
    maxAttendees: "",
    image: "",
    price: "",
    organizer: "",
    paymentLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    "Outdoor",
    "Wellness",
    "Social",
    "Technology",
    "Arts & Culture",
    "Food & Drink",
    "Sports",
    "Education",
  ];

  const timezones = [
    "PST",
    "MST",
    "CST",
    "EST",
    "AST",
    "NST",
    "UTC",
    "GMT",
    "CET",
    "JST",
    "AEST",
  ];

  const countries = [
    "Canada",
    "United States",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other",
  ];

  const provinces = {
    Canada: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
    "United States": [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  };

  const handleInputChange = (field: keyof EventFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Event data:", formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        timezone: "",
        country: "",
        province: "",
        city: "",
        location: "",
        googleMapsLink: "",
        category: "",
        maxAttendees: "",
        image: "",
        price: "",
        organizer: "",
        paymentLink: "",
      });
      setSubmitSuccess(false);
    }, 2000);
  };

  return (
    <div className="add-event">
      <div className="add-event__header">
        <h2 className="add-event__title">Add New Event</h2>
        <p className="add-event__subtitle">
          Create a new community event for members to join
        </p>
      </div>

      {submitSuccess && (
        <div className="add-event__success">
          <span className="add-event__success-icon">✅</span>
          <span className="add-event__success-text">
            Event created successfully!
          </span>
        </div>
      )}

      <form className="add-event__form" onSubmit={handleSubmit}>
        <div className="add-event__form-grid">
          {/* Basic Information */}
          <div className="add-event__section">
            <h3 className="add-event__section-title">Basic Information</h3>

            <div className="add-event__field">
              <label htmlFor="title" className="add-event__label">
                Event Title *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="add-event__input"
                placeholder="Enter event title"
                required
              />
            </div>

            <div className="add-event__field">
              <label htmlFor="description" className="add-event__label">
                Description *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="add-event__textarea"
                placeholder="Describe the event details, activities, and what attendees can expect"
                rows={4}
                required
              />
            </div>

            <div className="add-event__field-row">
              <div className="add-event__field">
                <label htmlFor="category" className="add-event__label">
                  Category *
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) =>
                    handleInputChange("category", e.target.value)
                  }
                  className="add-event__select"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="add-event__field">
                <label htmlFor="organizer" className="add-event__label">
                  Organizer *
                </label>
                <input
                  type="text"
                  id="organizer"
                  value={formData.organizer}
                  onChange={(e) =>
                    handleInputChange("organizer", e.target.value)
                  }
                  className="add-event__input"
                  placeholder="Event organizer name"
                  required
                />
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="add-event__section">
            <h3 className="add-event__section-title">Date & Time</h3>

            <div className="add-event__field-row">
              <div className="add-event__field">
                <label htmlFor="date" className="add-event__label">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="add-event__input"
                  required
                />
              </div>

              <div className="add-event__field">
                <label htmlFor="time" className="add-event__label">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="add-event__input"
                  required
                />
              </div>
            </div>

            <div className="add-event__field">
              <label htmlFor="timezone" className="add-event__label">
                Timezone *
              </label>
              <select
                id="timezone"
                value={formData.timezone}
                onChange={(e) => handleInputChange("timezone", e.target.value)}
                className="add-event__select"
                required
              >
                <option value="">Select timezone</option>
                {timezones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location & Capacity */}
          <div className="add-event__section">
            <h3 className="add-event__section-title">Location & Capacity</h3>

            <div className="add-event__field-row">
              <div className="add-event__field">
                <label htmlFor="country" className="add-event__label">
                  Country *
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => {
                    handleInputChange("country", e.target.value);
                    handleInputChange("province", ""); // Reset province when country changes
                  }}
                  className="add-event__select"
                  required
                >
                  <option value="">Select country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="add-event__field">
                <label htmlFor="province" className="add-event__label">
                  Province/State *
                </label>
                <select
                  id="province"
                  value={formData.province}
                  onChange={(e) =>
                    handleInputChange("province", e.target.value)
                  }
                  className="add-event__select"
                  required
                  disabled={!formData.country}
                >
                  <option value="">Select province/state</option>
                  {formData.country &&
                    provinces[formData.country as keyof typeof provinces]?.map(
                      (province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      )
                    )}
                </select>
              </div>
            </div>

            <div className="add-event__field">
              <label htmlFor="city" className="add-event__label">
                City *
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="add-event__input"
                placeholder="Enter city name"
                required
              />
            </div>

            <div className="add-event__field">
              <label htmlFor="location" className="add-event__label">
                Venue *
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="add-event__input"
                placeholder="Event venue name"
                required
              />
            </div>

            <div className="add-event__field">
              <label htmlFor="googleMapsLink" className="add-event__label">
                Google Maps Link
              </label>
              <input
                type="url"
                id="googleMapsLink"
                value={formData.googleMapsLink}
                onChange={(e) =>
                  handleInputChange("googleMapsLink", e.target.value)
                }
                className="add-event__input"
                placeholder="https://maps.google.com/..."
              />
            </div>

            <div className="add-event__field-row">
              <div className="add-event__field">
                <label htmlFor="maxAttendees" className="add-event__label">
                  Max Attendees
                </label>
                <input
                  type="number"
                  id="maxAttendees"
                  value={formData.maxAttendees}
                  onChange={(e) =>
                    handleInputChange("maxAttendees", e.target.value)
                  }
                  className="add-event__input"
                  placeholder="Maximum number of attendees"
                  min="1"
                />
              </div>

              <div className="add-event__field">
                <label htmlFor="price" className="add-event__label">
                  Price (CAD)
                </label>
                <input
                  type="number"
                  id="price"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="add-event__input"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            <div className="add-event__field">
              <label htmlFor="paymentLink" className="add-event__label">
                Payment Link
              </label>
              <input
                type="url"
                id="paymentLink"
                value={formData.paymentLink}
                onChange={(e) =>
                  handleInputChange("paymentLink", e.target.value)
                }
                className="add-event__input"
                placeholder="https://example.com/payment"
              />
            </div>
          </div>

          {/* Media */}
          <div className="add-event__section">
            <h3 className="add-event__section-title">Event Image</h3>

            <div className="add-event__field">
              <label htmlFor="image" className="add-event__label">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                className="add-event__input"
                placeholder="https://example.com/event-image.jpg"
              />
            </div>
          </div>
        </div>

        <div className="add-event__actions">
          <button
            type="submit"
            className="add-event__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Event..." : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
