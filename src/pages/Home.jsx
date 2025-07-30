import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroBg from '../assets/header-bg.jpg';
import aboutImg from '../assets/org1.jpg';
import eventImg from '../assets/WhatsApp Image 2025-07-11 at 04.46.09_3914af17.jpg';
import newsImg1 from '../assets/cb1.jpg';
import newsImg2 from '../assets/cb2.jpg';
import newsImg3 from '../assets/cb3.jpg';
import eventImg2 from "../assets/bloodbg.jpg";
import eventImg3 from '../assets/odonate.jpg';
import logo from '../assets/logo.jpg';
import slideImg1 from '../assets/org1.jpg';
import slideImg2 from '../assets/cb1.jpg';
import slideImg3 from '../assets/bdonate.jpg';
import slideImg4 from '../assets/bloodbg.jpg';
import './Home.css';

const slideData = [
  {
    image: newsImg1,
    title: 'Leadership Training',
    subtitle: 'Empowering Workers Through Unity',
    description: 'Workers Leadership with the Secretary General for Gold and Diamond Mines and Energy workers Union of Liberia; Bargaining Agent for Bea Mountain Mining Corporation workers Macauley Gedeo, Jr.',
    buttonText: 'Meet Our Team',
    buttonLink: '/about'
  },
  {
    image: newsImg2,
    title: 'CBA Signing Process',
    subtitle: 'Advocating for Workers Rights',
    description: 'Bea Mountain mining corporation lawyer Cllr. Kunkun Teh Gold and Diamond miners and Energy workers Union of Liberia Secretary General Macauley Gedeo, Jr.',
    buttonText: 'Learn More',
    buttonLink: '/sectors'
  },
  {
    image: newsImg3,
    title: 'CBA Exchange Process',
    subtitle: 'Building Capacity & Knowledge',
    description: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
    buttonText: 'Join Programs',
    buttonLink: '/programs'
  },
  {
    image: eventImg,
    title: 'Union Education Training',
    subtitle: 'Supporting Vulnerable Groups',
    description: 'Capacity development and union education for all GODIMEWUL members.',
    buttonText: 'Get Involved',
    buttonLink: '/contact'
  }
];

const news = [
  {
    title: 'Leadership Training',
    date: 'May 2025',
    excerpt: 'Workers Leadership with the Secretary General for Gold and Diamond Mines and Energy workers Union of Liberia; Bargaining Agent for Bea Mountain Mining Corporation workers Macauley Gedeo, Jr.',
    images: [newsImg1, newsImg2, newsImg3],
  },
  {
    title: 'CBA Siting Process',
    date: 'May 2025',
    excerpt: 'Bea Mountain mining corporation lawyer Cllr. Kunkun Teh Gold and Diamond miners and Energy workers Union of Liberia Secretary General Macauley Gedeo, Jr.',
    images: [newsImg2, newsImg1],
  },
  {
    title: 'CBA Signing Process & Exchange',
    date: 'May 2025',
    excerpt: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
    images: [newsImg3],
  },
];

const events = [
  {
    date: 'July 2025',
    title: 'Union Education Training',
    desc: 'Capacity development and union education for all GODIMEWUL members.',
    images: [eventImg, eventImg2],
  },
  {
    date: 'August 2025',
    title: 'Advocacy & Policy Workshop',
    desc: 'Workshop on lobbying for policies that defend workers\' rights and interests.',
    images: [eventImg2, eventImg3, eventImg],
  },
  {
    date: 'September 2025',
    title: 'Exchange Program Launch',
    desc: 'New exchange program for knowledge sharing with international partners.',
    images: [eventImg3],
  },
];

const Home = () => (
  <>
    {/* Sliding Image Carousel */}
    <section className="hero-carousel-section position-relative" style={{ height: '70vh', minHeight: '500px' }}>
      <Carousel 
        interval={5000} 
        indicators={true} 
        controls={true}
        fade={true}
        className="h-100"
        style={{ height: '100%' }}
      >
        {slideData.map((slide, index) => (
          <Carousel.Item key={index} className="h-100">
            <div className="position-relative h-100">
              <img
                src={slide.image}
                alt={slide.title}
                className="d-block w-100 h-100"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
                }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ width: '90%', maxWidth: '800px', zIndex: 2 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    {slide.title}
                  </h1>
                  <h3 className="h4 mb-3 text-warning" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    {slide.subtitle}
                  </h3>
                  <p className="lead mb-4" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    {slide.description}
                  </p>
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="px-4 py-2 fw-bold"
                    href={slide.buttonLink}
                    style={{ 
                      background: '#C9A13B', 
                      border: 'none',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    {slide.buttonText}
                  </Button>
                </motion.div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>

    <section className="nlc-hero-section position-relative" style={{ background: 'linear-gradient(135deg, #fff 0%, #C9A13B 100%)' }}>
      <div className="nlc-hero-bg" style={{ backgroundImage: `url(${heroBg})`, opacity: 0.15 }} />
      <div className="nlc-hero-overlay" />
      <Container className="h-100 position-relative z-2">
        <Row className="align-items-center justify-content-center h-100">
          <Col md={12} className="text-center mb-4">
            <motion.img
              src={logo}
              alt="GODIMEWUL Logo"
              className="mb-3"
              style={{ height: 110, width: 110, borderRadius: '50%', border: '4px solid #C9A13B', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
          <Col md={10} lg={8} className="text-center">
            <motion.h1
              className="display-3 fw-bold mb-3 nlc-hero-title"
              style={{ color: '#222', textShadow: '0 2px 8px #fff' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Gold and Diamond Mines and Energy Workers Union of Liberia (GODIMEWUL)
            </motion.h1>
            <motion.p
              className="lead mb-4 fs-4"
              style={{ color: '#444' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Through teamwork to enhance the organisation's performance, and improve the quality of life for workers and other vulnerable groups through organising, education, collective bargaining, social dialogue, and lobbying for policies which defend their rights and interests.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Button variant="" size="lg" className="px-5 py-3 fs-5 shadow-lg nlc-hero-btn" style={{ background: '#C9A13B', color: '#fff', border: 'none', fontWeight: 700 }} href="/contact">
                Contact GODIMEWUL
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <motion.div
        className="nlc-scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      >
        <span className="scroll-arrow" />
      </motion.div>
    </section>
    <section className="py-5 bg-white nlc-about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.img
              src={aboutImg}
              alt="About GODIMEWUL"
              className="img-fluid rounded shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold mb-3 text-success">Welcome to GODIMEWUL</h2>
              <p className="fs-5 text-dark mb-3">
                <strong>Mission:</strong> To represent workers in Liberia, within its scopes through unity, advocacy, and capacity development to achieve decent work and equality for social justice.
              </p>
              <p className="fs-5 text-dark mb-3">
                <strong>Vision:</strong> Enhance the organisation's performance and improve the quality of life for workers and vulnerable groups through organizing, education, collective bargaining, social dialogue, and lobbying for policies which defend their rights and interests.
              </p>
              <p className="fs-6 text-dark mb-4">
                <strong>Background:</strong> GODIMEWUL is a registered trade union organization in Liberia, accredited by the Ministry of Labour as a Bargaining Agent for workers within the Mining, Energy, Communication, Construction, and industries sectors. Established October 24, 2018. Member of the Liberia Labour Congress and partners with ILO, ITUC-Africa, and others.
              </p>
              <Button variant="outline-success" size="lg" href="/about">Learn More</Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-5 bg-light nlc-news-section">
      <Container>
        <motion.h2
          className="mb-4 text-success fw-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest News & Announcements
        </motion.h2>
        <Row>
          {news.map((item, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <Card className="h-100 shadow-sm border-0">
                  {item.images && item.images.length > 0 && (
                    <Carousel interval={4000} indicators={item.images.length > 1} controls={item.images.length > 1} className="mb-2 nlc-news-carousel">
                      {item.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img src={img} alt={item.title + ' image ' + (i+1)} className="d-block w-100 rounded-top" style={{height: 180, objectFit: 'cover'}} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                  <Card.Body>
                    <Card.Title className="fw-bold text-success">{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
                    <Card.Text>{item.excerpt}</Card.Text>
                    <Button variant="success" size="sm">Read More</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <section className="py-5 bg-white nlc-events-section">
      <Container>
        <motion.h2
          className="mb-4 text-success fw-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Programs & Upcoming Events
        </motion.h2>
        <Row>
          {events.map((event, idx) => (
            <Col md={4} className="mb-4" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                <Card className="h-100 shadow-sm border-0 nlc-event-card">
                  {event.images && event.images.length > 0 && (
                    <Carousel interval={4000} indicators={event.images.length > 1} controls={event.images.length > 1} className="mb-2 nlc-news-carousel">
                      {event.images.map((img, i) => (
                        <Carousel.Item key={i}>
                          <img src={img} alt={event.title + ' image ' + (i+1)} className="d-block w-100 rounded-top" style={{height: 160, objectFit: 'cover'}} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted small">{event.date}</Card.Subtitle>
                    <Card.Title className="fw-bold text-success">{event.title}</Card.Title>
                    <Card.Text>{event.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </>
);

export default Home; 