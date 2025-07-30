import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaClock, FaBuilding } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const contactDetails = [
  { icon: <FaEnvelope style={{ color: '#C9A13B' }} />, label: 'Email', value: 'goldanddiamond2008@gmail.com' },
  { icon: <FaPhone style={{ color: '#C9A13B' }} />, label: 'Phone', value: '(+231) 776397408 / 880958085 / 776147982' },
  { icon: <FaClock style={{ color: '#C9A13B' }} />, label: 'Office Hours', value: 'Mon - Fri, 8:00 AM - 4:00 PM' },
  { icon: <FaBuilding style={{ color: '#C9A13B' }} />, label: 'Established', value: 'October 24, 2018' },
];

const Contact = () => (
  <Container className="py-5">
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center mb-4">
      <img src={logo} alt="GODIMEWUL Logo" style={{ height: 80, width: 80, borderRadius: '50%', border: '4px solid #C9A13B', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
    </motion.div>
    <Row>
      <Col md={6}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Contact GODIMEWUL</h2>
          <p className="mb-4 fs-5">We welcome your questions, feedback, and partnership inquiries. Please use the form or contact us directly.</p>
          <Card className="shadow-lg border-0 contact-card mb-4">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
                </Form.Group>
                <Button variant="" type="submit" style={{ background: '#C9A13B', color: '#fff', fontWeight: 700, border: 'none' }}>Send Message</Button>
              </Form>
            </Card.Body>
          </Card>
        </motion.div>
      </Col>
      <Col md={6} className="mt-4 mt-md-0">
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <h4 className="fw-bold mb-4" style={{ color: '#C9A13B' }}>Organization Contact</h4>
          {contactDetails.map((item, idx) => (
            <Card className="mb-3 shadow-sm border-0 contact-info-card" key={item.label} style={{ background: 'linear-gradient(135deg, #fff 0%, #C9A13B10 100%)', transition: 'all 0.3s' }}>
              <Card.Body className="d-flex align-items-center gap-3 p-3">
                <span>{item.icon}</span>
                <div>
                  <div className="fw-bold" style={{ color: '#C9A13B' }}>{item.label}</div>
                  <div className="text-muted small">{item.value}</div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </motion.div>
      </Col>
    </Row>
    <style>{`
      .contact-card:hover, .contact-info-card:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 8px 32px rgba(201,161,59,0.15);
      }
    `}</style>
  </Container>
);

export default Contact; 