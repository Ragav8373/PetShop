import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
// import logo from "../../Assets/petlogo.png"; // Replace with your project logo

export default function Footer() {
  return (
    <footer className="footer-bg">
      <Container className="py-5">

        <Row className="gy-4">

          {/* Logo + About */}
          <Col md={4} sm={12}>
            {/* <img
              src={logo}
              alt="AI Pet Adoption"
              className="footer-logo mb-3"
            /> */}

            <p className="footer-about">
              AI Pet Adoption Portal — Helping pets find loving homes with
              AI-powered recommendations and personalized adoption guidance.
            </p>
          </Col>

          {/* Features / Services */}
          <Col md={2} sm={6} xs={6}>
            <h5 className="footer-title">Features</h5>
            <ul className="footer-list">
              <li>AI Pet Matching</li>
              <li>Pet Listings</li>
              <li>Adoption Booking</li>
              <li>Pet Care Tips</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col md={2} sm={6} xs={6}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/pets">Pets</a></li>
              <li><a href="/recommendations">AI Match</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} sm={12}>
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-contact">
              <li><FaPhoneAlt /> +91 98765 43210</li>
              <li><FaEnvelope /> support@aipetadoption.com</li>
              <li><FaMapMarkerAlt /> Sathyamangalam, Tamil Nadu, India</li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social mt-3">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTelegram /></a>
            </div>
          </Col>

        </Row>
      </Container>

      <div className="footer-bottom text-center py-3">
        © 2026 AI Pet Adoption Portal — All Rights Reserved
      </div>
    </footer>
  );
}
