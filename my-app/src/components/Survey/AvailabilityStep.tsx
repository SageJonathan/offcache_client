import React, { useState } from "react";
import { days, times } from "../../data/static/surveyData";

interface AvailabilityStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const AvailabilityStep: React.FC<AvailabilityStepProps> = ({
  data,
  onChange,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>("Monday");

  const handleDayAvailabilityChange = (day: string, timeSlot: string) => {
    const currentAvailability = data.availability || {};
    const dayAvailability = currentAvailability[day] || [];

    const updatedDayAvailability = dayAvailability.includes(timeSlot)
      ? dayAvailability.filter((time: string) => time !== timeSlot)
      : [...dayAvailability, timeSlot];

    onChange("availability", {
      ...currentAvailability,
      [day]: updatedDayAvailability,
    });
  };

  const isTimeSlotSelected = (day: string, timeSlot: string) => {
    const dayAvailability = data.availability?.[day] || [];
    return dayAvailability.includes(timeSlot);
  };

  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Your Availability</h2>
      <p className="survey__step-subtitle">
        Select your preferred time slots for each day. This helps us match you
        with people who have similar schedules.
      </p>

      <div className="survey__availability-container">
        <div className="survey__day-selector">
          {days.map((day) => (
            <button
              key={day}
              className={`survey__day-button ${
                selectedDay === day ? "survey__day-button--active" : ""
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="survey__time-slots">
          <h3 className="survey__time-title">{selectedDay} Availability</h3>
          <div className="survey__time-grid">
            {times.map((timeSlot) => (
              <label
                key={timeSlot}
                className={`survey__time-checkbox ${
                  isTimeSlotSelected(selectedDay, timeSlot)
                    ? "survey__time-checkbox--selected"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={isTimeSlotSelected(selectedDay, timeSlot)}
                  onChange={() =>
                    handleDayAvailabilityChange(selectedDay, timeSlot)
                  }
                />
                <span className="survey__time-label">{timeSlot}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="survey__availability-summary">
          <h4 className="survey__summary-title">Your Weekly Availability</h4>
          <div className="survey__summary-grid">
            {days.map((day) => {
              const daySlots = data.availability?.[day] || [];
              return (
                <div key={day} className="survey__summary-day">
                  <span className="survey__summary-day-name">{day}</span>
                  <span className="survey__summary-slots">
                    {daySlots.length > 0
                      ? `${daySlots.length} time slot${
                          daySlots.length !== 1 ? "s" : ""
                        }`
                      : "Not available"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStep;
