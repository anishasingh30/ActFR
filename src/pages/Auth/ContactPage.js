import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <div className="contact-container">
        {/* Left Card: Talk to Sales */}
        <div className="contact-card">
          <h2>Talk to a member of our Sign Language Team</h2>
          <p>
            Need help finding the right sign language program or pricing? Our
            experts can guide you in selecting the best fit for your needs.
          </p>
          <Link to="/lessons" className="contact-button">
            Contact Support Team
          </Link>
        </div>

        {/* Right Card: Product & Support */}
        <div className="contact-card">
          <h2>Account support help you for more</h2>
          <p>
            Our help center is always open for signers. If you can’t find the
            answer you need, we’re here to assist you. Thank you for visiting
            our website, and we hope to see you soon.
          </p>
          <Link to="/lessons" className="contact-button">
            Go to the help centre
          </Link>
        </div>
      </div>

      {/* Offices Around the World */}
      <section className="offices-section">
        <h2>Our offices around the world</h2>
        <div className="offices-grid">
          <div>
            <h3>Global HQ – MAP</h3>
            <p>
              123 Sign Lane
              <br />
              Deaf City, SC 91015
              <br />
              signlanguage.global
            </p>
          </div>
          <div>
            <h3>Australia – MAP</h3>
            <p>
              56 Aussie Signs Ave
              <br />
              Melbourne, VIC 3000
              <br />
              signlanguage.com/au
            </p>
          </div>
          <div>
            <h3>Brazil – MAP</h3>
            <p>
              Av. Libras 100
              <br />
              São Paulo, SP 01000
              <br />
              signlanguage.com/br
            </p>
          </div>
          <div>
            <h3>Canada – MAP</h3>
            <p>
              987 Maple Deaf Rd
              <br />
              Toronto, ON A1B 2C3
              <br />
              signlanguage.com/ca
            </p>
          </div>
          <div>
            <h3>Germany – MAP</h3>
            <p>
              Neue Zeichenstraße 7<br />
              Berlin, 10115
              <br />
              signlanguage.de
            </p>
          </div>
          <div>
            <h3>India – MAP</h3>
            <p>
              45 Sign Nagar
              <br />
              New Delhi, 110001
              <br />
              signlanguage.in
            </p>
          </div>
          <div>
            <h3>Global HQ – MAP</h3>
            <p>
              123 Sign Lane
              <br />
              Deaf City, SC 91015
              <br />
              signlanguage.global
            </p>
          </div>
          <div>
            <h3>Australia – MAP</h3>
            <p>
              56 Aussie Signs Ave
              <br />
              Melbourne, VIC 3000
              <br />
              signlanguage.com/au
            </p>
          </div>
          <div>
            <h3>Brazil – MAP</h3>
            <p>
              Av. Libras 100
              <br />
              São Paulo, SP 01000
              <br />
              signlanguage.com/br
            </p>
          </div>
          <div>
            <h3>Canada – MAP</h3>
            <p>
              987 Maple Deaf Rd
              <br />
              Toronto, ON A1B 2C3
              <br />
              signlanguage.com/ca
            </p>
          </div>
          <div>
            <h3>Germany – MAP</h3>
            <p>
              Neue Zeichenstraße 7<br />
              Berlin, 10115
              <br />
              signlanguage.de
            </p>
          </div>
          <div>
            <h3>India – MAP</h3>
            <p>
              45 Sign Nagar
              <br />
              New Delhi, 110001
              <br />
              signlanguage.in
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
