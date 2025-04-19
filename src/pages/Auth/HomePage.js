import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/HomePage.css";
import ThemeToggle from "../../components/UI/ThemeToggle";

const HomePage = () => {
  const [theme, setTheme] = useState("light");

  // Form state
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("myself");
  const [workExp, setWorkExp] = useState("");

  // Countdown state
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  // Target date/time: 12th March (Year can be adjusted)
  const targetDate = new Date("2025-08-12T00:00:00");

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        // If we've passed the date, set all to zero
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        clearInterval(interval);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(String(d).padStart(2, "0"));
        setHours(String(h).padStart(2, "0"));
        setMinutes(String(m).padStart(2, "0"));
        setSeconds(String(s).padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Handle theme
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  // Submit form data to the backend
  const handleSubmitApplication = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3006/api/applications",
        {
          countryCode,
          phone,
          inquiry,
          workExp,
        }
      );
      alert("Application submitted successfully!");
      // Reset form fields
      setPhone("");
      setInquiry("myself");
      setWorkExp("");
    } catch (err) {
      alert("Error submitting application: " + err.message);
    }
  };

  return (
    <div className={`homepage-container ${theme}`}>
      {/* SIDE NAV */}
      <aside className="side-nav">
        <nav className="side-nav-menu">
          <Link to="/" className="side-nav-item">
            🏠 Home
          </Link>
          <Link to="/about" className="side-nav-item">
            👥 About
          </Link>
          <Link to="/lessons" className="side-nav-item">
            📚 Lessons
          </Link>
          <Link to="/quiz-categories" className="side-nav-item">
            ❓ Quiz
          </Link>
          <Link to="/contact" className="side-nav-item">
            📞 Contact Us
          </Link>
          {/* <Link to="/register" className="side-nav-item">
            📝 Register
          </Link> */}
          <Link to="/profile" className="side-nav-item">
            👤Profile
          </Link>
        </nav>
        <ThemeToggle />
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Courses YOU Need, Taught by the Best Instructors in the World.
            </h1>
            <p>
              Improve your sign language skills with interactive courses, taught
              by leading experts in the field. Start your journey today!
            </p>
          </div>
        </section>

        {/* BRAND-STORY SECTION */}
        <section className="brand-story-section">
          <div className="brand-story-content">
            <h2>Sign Language’s Ancient Roots</h2>
            <p>
              Sign language has a rich heritage spanning centuries, used to
              break communication barriers and unite diverse communities.
              Inspired by ancient gestures and cultural practices, our platform
              aims to keep the essence of sign language alive, while adapting to
              modern needs.
            </p>
            <p>
              We craft high-performance lessons that combine contemporary
              educational techniques with the timeless beauty of sign language,
              transforming how you communicate.
            </p>
            <Link to="/about" className="read-more-link">
              Read more about us
            </Link>
          </div>
        </section>

        {/* WHY JOIN THIS PROGRAM SECTION */}
        <section className="why-join-section">
          <h2 className="why-join-title">Why Join This Program?</h2>
          <div className="why-join-content">
            {/* Left side: 4 benefit cards */}
            <div className="why-join-left">
              <div className="why-join-cards">
                <div className="why-join-card">
                  <h3>Purdue’s Global Advantage</h3>
                  <p>
                    Learn from world-class Deaf educators recognized for
                    innovative sign language instruction.
                  </p>
                </div>
                <div className="why-join-card">
                  <h3>Applied Learning</h3>
                  <p>
                    Gain hands-on experience with real-life sign language
                    scenarios, guided by interactive videos and practice
                    sessions.
                  </p>
                </div>
                <div className="why-join-card">
                  <h3>Official Partner: Meta</h3>
                  <p>
                    Access specialized sign language tools endorsed by leading
                    tech giants, bridging communication gaps online.
                  </p>
                </div>
                <div className="why-join-card">
                  <h3>ChatGPT Generative AI Tools</h3>
                  <p>
                    Harness AI-driven suggestions for sign translations, grammar
                    corrections, and more.
                  </p>
                </div>
              </div>
              <div className="learn-btn-container">
                <Link to="/lessons" className="learn-btn">
                  Learn Now
                </Link>
              </div>
            </div>

            {/* Right side: admission countdown + form */}
            <div className="why-join-right">
              <div className="admission-deadline">
                <h3>Admission Closes on 12th March</h3>
                <div className="countdown">
                  <div className="time-box">
                    <span>{days}</span>
                    <small>Days</small>
                  </div>
                  <div className="time-box">
                    <span>{hours}</span>
                    <small>Hours</small>
                  </div>
                  <div className="time-box">
                    <span>{minutes}</span>
                    <small>Minutes</small>
                  </div>
                  <div className="time-box">
                    <span>{seconds}</span>
                    <small>Seconds</small>
                  </div>
                </div>
              </div>

              <div className="inquiry-form">
                <div className="phone-row">
                  <label htmlFor="country-code">IN</label>
                  <select
                    id="country-code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="inquiry-type">
                  <label>
                    <input
                      type="radio"
                      name="inquiry"
                      value="myself"
                      checked={inquiry === "myself"}
                      onChange={(e) => setInquiry(e.target.value)}
                    />
                    Myself
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="inquiry"
                      value="myCompany"
                      checked={inquiry === "myCompany"}
                      onChange={(e) => setInquiry(e.target.value)}
                    />
                    My Company
                  </label>
                </div>

                <p>
                  Work Exp (years)?
                  <input
                    type="text"
                    className="work-exp-input"
                    value={workExp}
                    onChange={(e) => setWorkExp(e.target.value)}
                  />
                </p>
                {/* Submit your application button */}
                <button onClick={handleSubmitApplication} className="cta-btn">
                  Submit Your Application
                </button>
              </div>

              <div className="corporate-training">
                <h4>Corporate Training</h4>
                <Link to="/contact" className="contact-us-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUIZ SECTION (NEW) */}
        <section className="quiz-section">
          <h2 className="quiz-title">Ready to Test Your Knowledge?</h2>
          <p>Challenge yourself with our Sign Language Quizzes!</p>
          <div className="quiz-box-grid">
            <div className="quiz-box">
              <img src="/assets/alphabet_imresizer.png" alt="Alphabet Quiz" />
              <h3>Alphabet Quiz</h3>
            </div>
            <div className="quiz-box">
              <img
                src="/assets/number-blocks_imresizer.png"
                alt="Numbers Quiz"
              />
              <h3>Numbers Quiz</h3>
            </div>
            <div className="quiz-box">
              <img
                src="/assets/tagline_imresizer.png"
                alt="Basic Phrases Quiz"
              />
              <h3>Basic Phrases Quiz</h3>
            </div>
            <div className="quiz-box">
              <img
                src="/assets/proofreading_imresizer.png"
                alt="Grammar Quiz"
              />
              <h3>Grammar Quiz</h3>
            </div>
            <div className="quiz-box">
              <img src="/assets/cultural_imresizer.png" alt="Numbers Quiz" />
              <h3>Culture & Traditions Quiz</h3>
            </div>
            <div className="quiz-box">
              <img src="/assets/magic_imresizer.png" alt="Basic Phrases Quiz" />
              <h3>Fingerspelling Quiz</h3>
            </div>
            <div className="quiz-box">
              <img src="/assets/talking.png" alt="Grammar Quiz" />
              <h3>Daily Conversation Quiz</h3>
            </div>
            <div className="quiz-box">
              <img src="/assets/loyalty.png" alt="Alphabet Quiz" />
              <h3>Common Gestures Quiz</h3>
            </div>
          </div>
          <div className="quiz-explore-container">
            <Link to="/quiz-categories" className="quiz-explore-btn">
              Explore More
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
