import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const members = [
  'Liberia Telecommunication Corporation (LTC-Mobile)',
  'Bea-Mountain Mining Corporation',
  'Sinohydro',
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const Members = () => (
  <Container className="py-5">
    <div className="text-center mb-4">
      <img src={logo} alt="GODIMEWUL Logo" style={{ height: 80, width: 80, borderRadius: '50%', border: '4px solid #C9A13B', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
    </div>
    <h2 className="mb-4 fw-bold text-center" style={{ color: '#C9A13B' }}>Our Members</h2>
    <Row>
      {members.map((member, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <motion.div
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="h-100 shadow-lg border-0 member-card" style={{ background: 'linear-gradient(135deg, #fff 0%, #C9A13B10 100%)', transition: 'all 0.3s' }}>
              <Card.Body className="text-center p-4">
                <Card.Title className="fw-bold mb-0" style={{ color: '#C9A13B' }}>{member}</Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
    <style>{`
      .member-card:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 8px 32px rgba(201,161,59,0.15);
      }
    `}</style>
  </Container>
);

export default Members; 