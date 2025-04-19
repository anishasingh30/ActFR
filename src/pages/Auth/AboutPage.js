import React from "react";
import "../../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="animated-heading">Calling All Makers</h1>
        <p className="subtitle">
          ActAware is a platform dedicated to making sign language learning
          accessible, engaging, and impactful. Our mission is to bridge the
          communication gap between the deaf and hearing communities by
          providing interactive tutorials, AI-powered practice tools, and
          community-driven learning experiences. With a focus on inclusivity, we
          offer courses tailored to different skill levels, a comprehensive sign
          language dictionary, and real-time gesture recognition for effective
          learning. ActAware also aligns with global goals by promoting
          awareness and inclusivity, empowering individuals to contribute to a
          more accessible world. Join us in fostering a society where
          communication knows no barriers. We’re looking for creative innovators
          who share our passion for AI, technology, and sign language. Makers
          who love to build things with their own hands and challenge the status
          quo.
        </p>
        <div className="illustration"></div>
      </section>

      {/* Join Us Section */}
      <section className="join-section">
        <h2>Join Us</h2>
        <p>
          Ready to be part of a community that pushes boundaries, embraces
          innovation, and transforms sign language learning? We can’t wait to
          see what you’ll create.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
