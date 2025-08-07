"use client";
import React, { useState } from "react";
// Styles imported globally in _app.tsx

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  organizer: string;
  mediaCount: number;
}

interface MediaItem {
  id: number;
  title: string;
  description: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
  eventId: number;
  uploadedAt: string;
}

interface UploadFormData {
  title: string;
  description: string;
  type: "photo" | "video";
  url: string;
  thumbnail?: string;
}

const EventMedia = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Hiking Adventure at Mount Seymour",
      date: "2024-01-05",
      location: "Mount Seymour, Vancouver",
      category: "Outdoor",
      organizer: "Sarah Chen",
      mediaCount: 3,
    },
    {
      id: 2,
      title: "Meditation & Mindfulness Workshop",
      date: "2024-01-10",
      location: "Community Center, Vancouver",
      category: "Wellness",
      organizer: "Michael Park",
      mediaCount: 1,
    },
    {
      id: 3,
      title: "Coffee & Conversation",
      date: "2024-01-15",
      location: "Local Coffee Shop, Vancouver",
      category: "Social",
      organizer: "Emma Wilson",
      mediaCount: 2,
    },
    {
      id: 4,
      title: "Rock Climbing Session",
      date: "2024-01-20",
      location: "Climbing Gym, Vancouver",
      category: "Outdoor",
      organizer: "Alex Thompson",
      mediaCount: 0,
    },
  ]);

  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: 1,
      title: "Hiking Adventure Group Photo",
      description: "Amazing group photo from our Mount Seymour hiking event",
      type: "photo",
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=150&fit=crop",
      eventId: 1,
      uploadedAt: "2024-01-06T10:30:00Z",
    },
    {
      id: 2,
      title: "Meditation Workshop Highlights",
      description: "Peaceful moments from our mindfulness workshop",
      type: "video",
      url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
      eventId: 2,
      uploadedAt: "2024-01-11T14:20:00Z",
    },
    {
      id: 3,
      title: "Coffee Meetup Moments",
      description: "Great conversations and connections at our coffee meetup",
      type: "photo",
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=150&fit=crop",
      eventId: 3,
      uploadedAt: "2024-01-16T09:15:00Z",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [eventSearchTerm, setEventSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "photo" | "video">(
    "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getMediaTypeBadge = (type: string) => {
    switch (type) {
      case "photo":
        return (
          <span className="event-media__type event-media__type--photo">
            📸 Photo
          </span>
        );
      case "video":
        return (
          <span className="event-media__type event-media__type--video">
            🎥 Video
          </span>
        );
      default:
        return null;
    }
  };

  const handleDeleteMedia = (mediaId: number) => {
    setMediaItems((prev) => prev.filter((item) => item.id !== mediaId));
    setSelectedMedia(null);
  };

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleUploadSubmit = (formData: UploadFormData) => {
    if (!selectedEvent) return;

    const newMedia: MediaItem = {
      id: Date.now(), // Simple ID generation
      ...formData,
      eventId: selectedEvent.id,
      uploadedAt: new Date().toISOString(),
    };

    setMediaItems((prev) => [...prev, newMedia]);
    setShowUploadModal(false);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(eventSearchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(event.location.toLowerCase()) ||
      event.category.toLowerCase().includes(eventSearchTerm.toLowerCase())
  );

  const eventMedia = selectedEvent
    ? mediaItems.filter((item) => item.eventId === selectedEvent.id)
    : [];

  const filteredMedia = eventMedia.filter((item) => {
    const matchesType = filterType === "all" || item.type === filterType;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    setSearchTerm("");
    setFilterType("all");
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
    setEventSearchTerm("");
    setSearchTerm("");
    setFilterType("all");
  };

  return (
    <div className="event-media">
      <div className="event-media__header">
        <h2 className="event-media__title">Event Gallery</h2>
        <p className="event-media__subtitle">
          {selectedEvent
            ? `Add photos and videos to: ${selectedEvent.title}`
            : "Search for an event to add media to its gallery"}
        </p>
      </div>

      {!selectedEvent ? (
        // Event Selection View
        <div className="event-media__event-selection">
          <div className="event-media__search">
            <input
              type="text"
              placeholder="Search events by title, location, or category..."
              value={eventSearchTerm}
              onChange={(e) => setEventSearchTerm(e.target.value)}
              className="event-media__search-input"
            />
          </div>

          <div className="event-media__events-grid">
            {filteredEvents.length === 0 ? (
              <div className="event-media__empty">
                <span className="event-media__empty-icon">📅</span>
                <p className="event-media__empty-text">No events found</p>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-media__event-card"
                  onClick={() => handleEventSelect(event)}
                >
                  <div className="event-media__event-header">
                    <h3 className="event-media__event-title">{event.title}</h3>
                    <span className="event-media__event-category">
                      {event.category}
                    </span>
                  </div>

                  <div className="event-media__event-details">
                    <p className="event-media__event-location">
                      📍 {event.location}
                    </p>
                    <p className="event-media__event-date">
                      📅 {formatDate(event.date)}
                    </p>
                    <p className="event-media__event-organizer">
                      👤 {event.organizer}
                    </p>
                  </div>

                  <div className="event-media__event-footer">
                    <span className="event-media__media-count">
                      📸 {event.mediaCount} media items
                    </span>
                    <button className="event-media__select-event-btn">
                      Add Media →
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        // Media Management View
        <div className="event-media__media-management">
          <div className="event-media__event-info">
            <button
              className="event-media__back-button"
              onClick={handleBackToEvents}
            >
              ← Back to Events
            </button>
            <div className="event-media__selected-event">
              <h3 className="event-media__selected-event-title">
                {selectedEvent.title}
              </h3>
              <p className="event-media__selected-event-details">
                {formatDate(selectedEvent.date)} • {selectedEvent.location} •{" "}
                {selectedEvent.organizer}
              </p>
            </div>
          </div>

          <div className="event-media__filters">
            <div className="event-media__search">
              <input
                type="text"
                placeholder="Search media by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="event-media__search-input"
              />
            </div>

            <div className="event-media__filter-group">
              <div className="event-media__filter">
                <label className="event-media__filter-label">Type:</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="event-media__filter-select"
                >
                  <option value="all">All Media</option>
                  <option value="photo">Photos</option>
                  <option value="video">Videos</option>
                </select>
              </div>
            </div>

            <div className="event-media__stats">
              <span className="event-media__stat">
                Total: {eventMedia.length}
              </span>
              <span className="event-media__stat">
                Photos: {eventMedia.filter((m) => m.type === "photo").length}
              </span>
              <span className="event-media__stat">
                Videos: {eventMedia.filter((m) => m.type === "video").length}
              </span>
            </div>
          </div>

          <div className="event-media__upload">
            <button
              className="event-media__upload-button"
              onClick={handleUploadClick}
            >
              📤 Add Photos/Videos to Gallery
            </button>
          </div>

          <div className="event-media__grid">
            {filteredMedia.length === 0 ? (
              <div className="event-media__empty">
                <span className="event-media__empty-icon">📸</span>
                <p className="event-media__empty-text">
                  No media in this event's gallery yet
                </p>
                <p className="event-media__empty-subtext">
                  Add photos and videos to share with event participants
                </p>
              </div>
            ) : (
              filteredMedia.map((item) => (
                <div key={item.id} className="event-media__item">
                  <div className="event-media__item-header">
                    {getMediaTypeBadge(item.type)}
                  </div>

                  <div className="event-media__item-thumbnail">
                    {item.type === "photo" ? (
                      <img
                        src={item.thumbnail || item.url}
                        alt={item.title}
                        className="event-media__thumbnail"
                        onClick={() => setSelectedMedia(item)}
                      />
                    ) : (
                      <div
                        className="event-media__video-thumbnail"
                        onClick={() => setSelectedMedia(item)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="event-media__thumbnail"
                        />
                        <div className="event-media__play-button">▶️</div>
                      </div>
                    )}
                  </div>

                  <div className="event-media__item-content">
                    <h3 className="event-media__item-title">{item.title}</h3>
                    <p className="event-media__item-description">
                      {item.description}
                    </p>
                    <div className="event-media__item-meta">
                      <span className="event-media__upload-date">
                        {formatDate(item.uploadedAt)}
                      </span>
                    </div>
                  </div>

                  <div className="event-media__item-actions">
                    <button
                      className="event-media__action event-media__action--view"
                      onClick={() => setSelectedMedia(item)}
                    >
                      👁️ View
                    </button>
                    <button
                      className="event-media__action event-media__action--delete"
                      onClick={() => handleDeleteMedia(item.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {selectedMedia && (
        <div className="event-media__modal">
          <div
            className="event-media__modal-overlay"
            onClick={() => setSelectedMedia(null)}
          />
          <div className="event-media__modal-content">
            <div className="event-media__modal-header">
              <h3 className="event-media__modal-title">
                {selectedMedia.title}
              </h3>
              <button
                className="event-media__modal-close"
                onClick={() => setSelectedMedia(null)}
              >
                ×
              </button>
            </div>

            <div className="event-media__modal-body">
              <div className="event-media__modal-media">
                {selectedMedia.type === "photo" ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="event-media__modal-image"
                  />
                ) : (
                  <video
                    src={selectedMedia.url}
                    controls
                    className="event-media__modal-video"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="event-media__modal-info">
                <p className="event-media__modal-description">
                  {selectedMedia.description}
                </p>
                <div className="event-media__modal-details">
                  <p>
                    <strong>Event:</strong> {selectedEvent?.title}
                  </p>
                  <p>
                    <strong>Uploaded:</strong>{" "}
                    {formatDate(selectedMedia.uploadedAt)}
                  </p>
                  <p>
                    <strong>Type:</strong>{" "}
                    {getMediaTypeBadge(selectedMedia.type)}
                  </p>
                </div>
              </div>

              <div className="event-media__modal-actions">
                <button
                  className="event-media__modal-action event-media__modal-action--delete"
                  onClick={() => {
                    handleDeleteMedia(selectedMedia.id);
                    setSelectedMedia(null);
                  }}
                >
                  🗑️ Delete Media
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onSubmit={handleUploadSubmit}
        />
      )}
    </div>
  );
};

// Upload Modal Component
interface UploadModalProps {
  onClose: () => void;
  onSubmit: (data: UploadFormData) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UploadFormData>({
    title: "",
    description: "",
    type: "photo",
    url: "",
    thumbnail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.url) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof UploadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="event-media__modal">
      <div className="event-media__modal-overlay" onClick={onClose} />
      <div className="event-media__modal-content">
        <div className="event-media__modal-header">
          <h3 className="event-media__modal-title">Add Media to Gallery</h3>
          <button className="event-media__modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="event-media__modal-body">
          <form onSubmit={handleSubmit} className="event-media__upload-form">
            <div className="event-media__form-group">
              <label className="event-media__form-label">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="event-media__form-input"
                placeholder="Enter media title"
                required
              />
            </div>

            <div className="event-media__form-group">
              <label className="event-media__form-label">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                className="event-media__form-textarea"
                placeholder="Enter media description"
                rows={3}
              />
            </div>

            <div className="event-media__form-group">
              <label className="event-media__form-label">Type *</label>
              <select
                value={formData.type}
                onChange={(e) =>
                  handleInputChange("type", e.target.value as "photo" | "video")
                }
                className="event-media__form-select"
                required
              >
                <option value="photo">Photo</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div className="event-media__form-group">
              <label className="event-media__form-label">Media URL *</label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) => handleInputChange("url", e.target.value)}
                className="event-media__form-input"
                placeholder="https://example.com/media.jpg"
                required
              />
            </div>

            <div className="event-media__form-group">
              <label className="event-media__form-label">
                Thumbnail URL (optional)
              </label>
              <input
                type="url"
                value={formData.thumbnail}
                onChange={(e) => handleInputChange("thumbnail", e.target.value)}
                className="event-media__form-input"
                placeholder="https://example.com/thumbnail.jpg"
              />
            </div>

            <div className="event-media__modal-actions">
              <button
                type="button"
                className="event-media__modal-action event-media__modal-action--cancel"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="event-media__modal-action event-media__modal-action--submit"
              >
                Add Media
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventMedia;
