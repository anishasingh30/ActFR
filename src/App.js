import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from './pages/Auth/HomePage';
import Footer from "./pages/Auth/Footer";
import AboutPage from "./pages/Auth/AboutPage";
import LessonPage from "./pages/Lessons/LessonPage";
import AllCareersPage from "./pages/Lessons/AllCareersPage";
import SignLangQuizCategories from "./pages/Dashboard/SignLangQuizCategories";
import ContactPage from './pages/Auth/ContactPage';
import Profile from './components/Auth/profile';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/lessons" element={<LessonPage />} />
          <Route path="/lesson/all" element={<AllCareersPage />} />
          <Route path="/quiz-categories" element={<SignLangQuizCategories />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<profile />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
