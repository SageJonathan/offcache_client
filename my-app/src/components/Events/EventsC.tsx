import { useState, useEffect } from "react";
import "./events.scss";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  province: string;
  country: string;
  price: number;
  capacity: number;
  registered: number;
  image: string;
  category: string;
  organizer: string;
}

const EventsC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [userLocation, setUserLocation] = useState("");

  // Mock events data
  const mockEvents: Event[] = [
    {
      id: "1",
      title: "Tech Networking Mixer",
      description:
        "Connect with fellow tech professionals over drinks and appetizers. Perfect for expanding your professional network.",
      date: "2024-02-15",
      time: "18:00",
      location: "Downtown Tech Hub",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      price: 25,
      capacity: 50,
      registered: 32,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      category: "Networking",
      organizer: "Tech Community BC",
    },
    {
      id: "2",
      title: "Mountain Hiking Adventure",
      description:
        "Join us for a challenging hike with breathtaking views. All skill levels welcome.",
      date: "2024-02-20",
      time: "08:00",
      location: "Grouse Mountain",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      price: 15,
      capacity: 30,
      registered: 18,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "Outdoor",
      organizer: "Adventure Club",
    },
    {
      id: "3",
      title: "Startup Pitch Night",
      description:
        "Watch innovative startups pitch their ideas and network with entrepreneurs and investors.",
      date: "2024-02-25",
      time: "19:00",
      location: "Innovation Center",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      price: 35,
      capacity: 100,
      registered: 67,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      category: "Business",
      organizer: "Startup Vancouver",
    },
    {
      id: "4",
      title: "Yoga & Meditation Retreat",
      description:
        "A peaceful day of yoga, meditation, and mindfulness in a serene setting.",
      date: "2024-03-01",
      time: "09:00",
      location: "Serenity Spa",
      city: "Victoria",
      province: "BC",
      country: "Canada",
      price: 45,
      capacity: 25,
      registered: 12,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      category: "Wellness",
      organizer: "Mindful Living",
    },
    {
      id: "5",
      title: "Board Game Night",
      description:
        "Strategic board games, casual conversation, and lots of fun. All games provided.",
      date: "2024-02-18",
      time: "19:30",
      location: "Game Cafe",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      price: 10,
      capacity: 40,
      registered: 28,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      category: "Social",
      organizer: "Game Enthusiasts",
    },
    {
      id: "6",
      title: "Photography Workshop",
      description:
        "Learn photography techniques from professionals. Bring your camera or use provided equipment.",
      date: "2024-03-05",
      time: "14:00",
      location: "Stanley Park",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      price: 60,
      capacity: 20,
      registered: 15,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      category: "Learning",
      organizer: "Photo Masters",
    },
  ];

  const categories = [
    "All",
    "Networking",
    "Outdoor",
    "Business",
    "Wellness",
    "Social",
    "Learning",
  ];
  const locations = [
    "All",
    "Vancouver",
    "Victoria",
    "Kelowna",
    "Toronto",
    "Montreal",
  ];

  useEffect(() => {
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);

    // Set default location to Vancouver for demo purposes
    // In production, this would use geolocation or user preferences
    setUserLocation("Vancouver");
    setSelectedLocation("Vancouver");
  }, []);

  useEffect(() => {
    filterEvents();
  }, [searchTerm, selectedLocation, selectedCategory, events]);

  const filterEvents = () => {
    let filtered = events;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.organizer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by location
    if (selectedLocation && selectedLocation !== "All") {
      filtered = filtered.filter((event) => event.city === selectedLocation);
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(
        (event) => event.category === selectedCategory
      );
    }

    setFilteredEvents(filtered);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getAvailabilityColor = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return "red";
    if (percentage >= 75) return "orange";
    return "green";
  };

  return (
    <div className="events">
      <div className="events__container">
        <div className="events__header">
          <h1 className="events__title">Discover Events</h1>
          <p className="events__subtitle">
            Find exciting events in your area and connect with like-minded
            people
          </p>
        </div>

        <div className="events__filters">
          <div className="events__search">
            <input
              type="text"
              placeholder="Search events, organizers, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="events__search-input"
            />
          </div>

          <div className="events__filter-row">
            <div className="events__filter-group">
              <label className="events__filter-label">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="events__filter-select"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="events__filter-group">
              <label className="events__filter-label">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="events__filter-select"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="events__content">
          {filteredEvents.length === 0 ? (
            <div className="events__empty">
              <h3>No events found</h3>
              <p>Try adjusting your search criteria or location</p>
            </div>
          ) : (
            <div className="events__grid">
              {filteredEvents.map((event) => (
                <div key={event.id} className="events__card">
                  <div className="events__card-image">
                    <img src={event.image} alt={event.title} />
                    <div className="events__card-category">
                      {event.category}
                    </div>
                  </div>

                  <div className="events__card-content">
                    <h3 className="events__card-title">{event.title}</h3>
                    <p className="events__card-description">
                      {event.description}
                    </p>

                    <div className="events__card-details">
                      <div className="events__card-info">
                        <span className="events__card-date">
                          📅 {formatDate(event.date)}
                        </span>
                        <span className="events__card-time">
                          🕒 {formatTime(event.time)}
                        </span>
                        <span className="events__card-location">
                          📍 {event.location}, {event.city}
                        </span>
                      </div>

                      <div className="events__card-meta">
                        <div className="events__card-price">${event.price}</div>
                        <div className="events__card-availability">
                          <span
                            className={`events__card-spots events__card-spots--${getAvailabilityColor(
                              event.registered,
                              event.capacity
                            )}`}
                          >
                            {event.capacity - event.registered} spots left
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="events__card-organizer">
                      Organized by {event.organizer}
                    </div>

                    <button className="events__card-btn">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsC;
