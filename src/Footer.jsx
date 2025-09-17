import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowUp } from 'react-icons/fa';
import logo from './assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:goldanddiamond2008@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About GODIMEWUL', url: '/about' },
    { name: 'Our Sectors', url: '/sectors' },
    { name: 'Programs', url: '/programs' },
    { name: 'Members', url: '/members' },
    { name: 'Our Partners', url: '/partners' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'News & Media', url: '/media' }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Monrovia, Liberia', url: '#' },
    { icon: FaPhone, text: '(+231) 776397408', url: 'tel:+231776397408' },
    { icon: FaPhone, text: '(+231) 880958085', url: 'tel:+231880958085' },
    { icon: FaEnvelope, text: 'goldanddiamond2008@gmail.com', url: 'mailto:goldanddiamond2008@gmail.com' },
    { icon: FaClock, text: 'Mon-Fri 8:00 AM - 4:00 PM', url: '#' }
  ];

  return (
    <footer className="footer-modern">
      {/* Main Footer Content */}
      <div className="footer-main">
    <Container>
          <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="g-4">
              {/* Company Info */}
              <Col lg={4} md={6}>
                <motion.div variants={itemVariants} className="footer-section">
                  <div className="footer-logo mb-3">
                    <img src={logo} alt="GODIMEWUL Logo" className="footer-logo-img" />
                    <h4 className="footer-title">GODIMEWUL</h4>
                  </div>
                  <p className="footer-description">
                    Gold and Diamond Mines and Energy Workers Union of Liberia (GODIMEWUL) 
                    is dedicated to protecting workers' rights and improving working conditions 
                    through unity, advocacy, and capacity development.
                  </p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
        </Col>

              {/* Quick Links */}
              <Col lg={2} md={6}>
                <motion.div variants={itemVariants} className="footer-section">
                  <h5 className="footer-heading">Quick Links</h5>
                  <ul className="footer-links">
                    {quickLinks.map((link, index) => (
                      <motion.li key={index} variants={itemVariants}>
                        <a href={link.url} className="footer-link">
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
          </ul>
                </motion.div>
              </Col>

              {/* Contact Info */}
              <Col lg={3} md={6}>
                <motion.div variants={itemVariants} className="footer-section">
                  <h5 className="footer-heading">Contact Info</h5>
                  <div className="contact-info">
                    {contactInfo.map((contact, index) => (
                      <motion.div key={index} className="contact-item" variants={itemVariants}>
                        <contact.icon className="contact-icon" />
                        <a href={contact.url} className="contact-link">
                          {contact.text}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
        </Col>

              {/* Newsletter */}
              <Col lg={3} md={6}>
                <motion.div variants={itemVariants} className="footer-section">
                  <h5 className="footer-heading">Stay Updated</h5>
                  <p className="newsletter-text">
                    Subscribe to our newsletter for the latest updates on workers' rights and union activities.
                  </p>
                  <Form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="newsletter-input"
                        required
                      />
                      <Button 
                        type="submit" 
                        className="newsletter-btn"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                      </Button>
                    </InputGroup>
                  </Form>
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="subscription-success"
                    >
                      Thank you for subscribing!
                    </motion.div>
                  )}
                </motion.div>
        </Col>
      </Row>
          </motion.div>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.p 
                className="copyright-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                &copy; {new Date().getFullYear()} GODIMEWUL. All Rights Reserved.
              </motion.p>
            </Col>
            <Col md={6} className="text-md-end">
              <motion.div
                className="footer-bottom-links"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="footer-established">
                  Established: October 24, 2018
                </span>
              </motion.div>
        </Col>
      </Row>
    </Container>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp />
      </motion.button>
  </footer>
);
};

export default Footer; 