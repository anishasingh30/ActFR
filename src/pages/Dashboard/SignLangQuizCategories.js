// src/pages/SignLangQuizCategories.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/SignLangQuizCategories.css";

const SignLangQuizCategories = () => {
  // Example categories
  const categories = [
    {
      id: "alphabet",
      name: "Alphabet",
      iconUrl: "/assets/alphabet_imresizer.png",
    },
    {
      id: "numbers",
      name: "Numbers",
      iconUrl: "/assets/number-blocks_imresizer.png",
    },
    {
      id: "phrases",
      name: "Basic Phrases",
      iconUrl: "/assets/proofreading_imresizer.png",
    },
    {
      id: "grammar",
      name: "Grammar",
      iconUrl: "/assets/tagline_imresizer.png",
    },
    {
      id: "culture",
      name: "Culture & Traditions",
      iconUrl: "/assets/cultural_imresizer.png",
    },
    {
      id: "fingerspelling",
      name: "Fingerspelling",
      iconUrl: "/assets/magic_imresizer.png",
    },
    {
      id: "conversation",
      name: "Daily Conversations",
      iconUrl: "/assets/talking.png",
    },
    { id: "gestures", name: "Common Gestures", iconUrl: "/assets/loyalty.png" },
    {
      id: "expressions",
      name: "Facial Expressions",
      iconUrl: "/assets/facial-expression.png",
    },
    {
      id: "technology",
      name: "Technology & Innovation",
      iconUrl: "/assets/technology.png",
    },
    {
      id: "health",
      name: "Health & Well-being",
      iconUrl: "/assets/healthcare.png",
    },
    {
      id: "environment",
      name: "Sustainability & Environment",
      iconUrl: "/assets/save-the-planet.png",
    },
    {
      id: "education",
      name: "Education & Learning",
      iconUrl: "/assets/education.png",
    },
    {
      id: "sports",
      name: "Sports & Activities",
      iconUrl: "/assets/sports.png",
    },
    {
      id: "travel",
      name: "Travel & Navigation",
      iconUrl: "/assets/travel.png",
    },
    {
      id: "emotions",
      name: "Expressing Emotions",
      iconUrl: "/assets/express.png",
    },
    {
      id: "jobs",
      name: "Occupations & Jobs",
      iconUrl: "/assets/occupation.png",
    },
    { id: "food", name: "Food & Dining", iconUrl: "/assets/diet.png" },
    { id: "music", name: "Music & Arts", iconUrl: "/assets/listen.png" },
    {
      id: "safety",
      name: "Emergency & Safety",
      iconUrl: "/assets/emergency-call.png",
    },
    {
      id: "family",
      name: "Family & Relationships",
      iconUrl: "/assets/family.png",
    },
    { id: "weather", name: "Weather & Seasons", iconUrl: "/assets/cloudy.png" },
    {
      id: "animals",
      name: "Animals & Nature",
      iconUrl: "/assets/wild-animals.png",
    },
    {
      id: "transport",
      name: "Transportation",
      iconUrl: "/assets/transportation.png",
    },
    {
      id: "shopping",
      name: "Shopping & Money",
      iconUrl: "/assets/shopping-cart.png",
    },
    {
      id: "directions",
      name: "Directions & Locations",
      iconUrl: "/assets/direction.png",
    },
    { id: "time", name: "Time & Dates", iconUrl: "/assets/schedule.png" },
    {
      id: "science",
      name: "Science & Space",
      iconUrl: "/assets/laboratory.png",
    },
    {
      id: "government",
      name: "Government & Law",
      iconUrl: "/assets/hands.png",
    },
    {
      id: "friendship",
      name: "Friendship & Social Life",
      iconUrl: "/assets/friendship.png",
    },
    {
      id: "festivals",
      name: "Festivals & Celebrations",
      iconUrl: "/assets/decoration.png",
    },
    {
      id: "entertainment",
      name: "Entertainment & Media",
      iconUrl: "/assets/cinema.png",
    },
    {
      id: "body",
      name: "Human Body & Health",
      iconUrl: "/assets/endocrine-system.png",
    },
    {
      id: "hobbies",
      name: "Hobbies & Interests",
      iconUrl: "/assets/mental-health.png",
    },
    {
      id: "spirituality",
      name: "Spirituality & Beliefs",
      iconUrl: "/assets/pray.png",
    },
  ];

  return (
    <div className={`quiz-categories-page `}>
      <header className="quiz-header">
        <div className="header-left">
          <h1>Test Your Knowledge!</h1>
          <p>Select a Sign Language Category</p>
        </div>
      </header>

      <div className="categories-grid">
        {categories.map((cat) => (
          <Link key={cat.id} to={`/quiz/${cat.id}`} className="category-box">
            <img src={cat.iconUrl} alt={cat.name} className="category-icon" />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignLangQuizCategories;
