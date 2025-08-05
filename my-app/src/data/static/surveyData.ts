export const locationData = {
  Canada: {
    "British Columbia": ["Vancouver", "Kelowna", "Victoria"],
    Alberta: ["Calgary", "Edmonton"],
  },
};

export const physicalActivities = [
  { key: "basketball", name: "Basketball", icon: "🏀" },
  { key: "climbing", name: "Climbing", icon: "🧗‍♂️" },
  { key: "cycling", name: "Cycling", icon: "🚴‍♂️" },
  { key: "gym", name: "Gym / Weight Training", icon: "🏋️‍♂️" },
  { key: "hiking", name: "Hiking", icon: "🥾" },
  { key: "martialArts", name: "Martial Arts", icon: "🥋" },
  { key: "meditation", name: "Meditation", icon: "🧘‍♂️" },
  { key: "pickleball", name: "Pickleball", icon: "🏓" },
  { key: "running", name: "Running", icon: "🏃‍♂️" },
  { key: "skiing", name: "Skiing", icon: "⛷️" },
  { key: "snowboarding", name: "Snowboarding", icon: "🏂" },
  { key: "soccer", name: "Soccer", icon: "⚽" },
  { key: "swimming", name: "Swimming", icon: "🏊‍♂️" },
  { key: "tennis", name: "Tennis", icon: "🎾" },
  { key: "yoga", name: "Yoga", icon: "🧘‍♀️" },
  { key: "dance", name: "Dance", icon: "💃" },
  { key: "volleyball", name: "Volleyball", icon: "🏐" },
  { key: "golf", name: "Golf", icon: "⛳" },
  { key: "surfing", name: "Surfing", icon: "🏄‍♂️" },
  { key: "paddleboarding", name: "Paddleboarding", icon: "🏄‍♀️" },
  { key: "badminton", name: "Badminton", icon: "🏸" },
  { key: "rowing", name: "Rowing", icon: "🚣‍♂️" },
  { key: "ultimate", name: "Ultimate Frisbee", icon: "🥏" },
];

export const mentalActivities = [
  { key: "reading", name: "Reading", icon: "📚" },
  { key: "writing", name: "Writing", icon: "✍️" },
  { key: "gaming", name: "Gaming", icon: "🎮" },
  { key: "chess", name: "Chess", icon: "♟️" },
  { key: "puzzles", name: "Puzzles", icon: "🧩" },
  { key: "art", name: "Art", icon: "🎨" },
  { key: "music", name: "Music", icon: "🎵" },
  { key: "cooking", name: "Cooking", icon: "👨‍🍳" },
  { key: "photography", name: "Photography", icon: "📸" },
  { key: "languages", name: "Languages", icon: "🗣️" },
  { key: "theatre", name: "Improv / Theatre Games", icon: "🎭" },
  { key: "boardGames", name: "Board Games", icon: "🎲" },
];

export const careerInterests = [
  { key: "ai", name: "AI & Machine Learning", icon: "🤖" },
  { key: "blockchain", name: "Blockchain/Crypto", icon: "₿" },
  { key: "dataScience", name: "Data Science", icon: "📊" },
  { key: "webDev", name: "Web Development", icon: "🌐" },
  { key: "mobileDev", name: "Mobile Development", icon: "📱" },
  { key: "cybersecurity", name: "Cybersecurity", icon: "🔒" },
  { key: "startups", name: "Startups & Entrepreneurship", icon: "🚀" },
  { key: "investing", name: "Investing & Finance", icon: "📈" },
  { key: "quantum", name: "Quantum Computing", icon: "⚛️" },
  { key: "robotics", name: "Robotics", icon: "🤖" },
  { key: "vr", name: "VR/AR", icon: "🥽" },
];

export const allActivities = [
  // Physical activities
  { key: "basketball", name: "Basketball", icon: "🏀", type: "physical" },
  { key: "climbing", name: "Climbing", icon: "🧗‍♂️", type: "physical" },
  { key: "cycling", name: "Cycling", icon: "🚴‍♂️", type: "physical" },
  { key: "gym", name: "Gym / Weight Training", icon: "🏋️‍♂️", type: "physical" },
  { key: "hiking", name: "Hiking", icon: "🥾", type: "physical" },
  { key: "martialArts", name: "Martial Arts", icon: "🥋", type: "physical" },
  { key: "meditation", name: "Meditation", icon: "🧘‍♂️", type: "physical" },
  { key: "pickleball", name: "Pickleball", icon: "🏓", type: "physical" },
  { key: "running", name: "Running", icon: "🏃‍♂️", type: "physical" },
  { key: "skiing", name: "Skiing", icon: "⛷️", type: "physical" },
  { key: "snowboarding", name: "Snowboarding", icon: "🏂", type: "physical" },
  { key: "soccer", name: "Soccer", icon: "⚽", type: "physical" },
  { key: "swimming", name: "Swimming", icon: "🏊‍♂️", type: "physical" },
  { key: "tennis", name: "Tennis", icon: "🎾", type: "physical" },
  { key: "yoga", name: "Yoga", icon: "🧘‍♀️", type: "physical" },
  { key: "dance", name: "Dance", icon: "💃", type: "physical" },

  // Mental activities
  { key: "reading", name: "Reading", icon: "📚", type: "mental" },
  { key: "writing", name: "Writing", icon: "✍️", type: "mental" },
  { key: "coding", name: "Coding/Programming", icon: "💻", type: "mental" },
  { key: "gaming", name: "Gaming", icon: "🎮", type: "mental" },
  { key: "chess", name: "Chess", icon: "♟️", type: "mental" },
  { key: "puzzles", name: "Puzzles", icon: "🧩", type: "mental" },
  { key: "art", name: "Art", icon: "🎨", type: "mental" },
  { key: "music", name: "Music", icon: "🎵", type: "mental" },
  { key: "cooking", name: "Cooking", icon: "👨‍🍳", type: "mental" },
  { key: "photography", name: "Photography", icon: "📸", type: "mental" },
  { key: "languages", name: "Languages", icon: "🗣️", type: "mental" },
  {
    key: "theatre",
    name: "Improv / Theatre Games",
    icon: "🎭",
    type: "mental",
  },
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const times = [
  "Early Morning (6AM-9AM)",
  "Late Morning (9AM-12PM)",
  "Early Afternoon (12PM-3PM)",
  "Late Afternoon (3PM-6PM)",
  "Early Evening (6PM-8PM)",
  "Late Evening (8PM-10PM)",
  "Night (10PM-12AM)",
  "Anytime",
];
