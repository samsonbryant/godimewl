import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroBg from '../assets/header-bg.jpg';
import aboutImg from '../assets/org1.jpg';
import macauleyGedeoImg from '../assets/macauley_gedeo.jpg';
import eventImg from '../assets/WhatsApp Image 2025-07-11 at 04.46.09_3914af17.jpg';
import newsImg1 from '../assets/cb1.jpg';
import newsImg2 from '../assets/cb2.jpg';
import newsImg3 from '../assets/cb3.jpg';
import eventImg2 from "../assets/bloodbg.jpg";
import eventImg3 from '../assets/odonate.jpg';
import logo from '../assets/logo.jpg';
import slideImg1 from '../assets/org1.jpg';
import slideImg2 from '../assets/cb1.jpg';
import slideImg3 from '../assets/odonate.jpg';
import slideImg4 from '../assets/bloodbg.jpg';

// Import new news images
import bmmcLocalLeadership from '../assets/bmmc_local_leadership.jpg';
import cbaDelegation from '../assets/CBA_delegation_with_mother_union_secretary_general_Macauley_GedeoJr.jpg';
import secretaryGeneralLawyer from '../assets/SG_and_Bea_mountain_Lawyer.jpg';
import afterCbaSigning from '../assets/after_cba_signing_process.jpg';
import ministerLabour from '../assets/minister_of_labour_liberia.jpg';
import pastPresentLeadership from '../assets/cba-exchange_process.jpg';
import cbaSampleViews from '../assets/cba-exchange_process_2.jpg';
import leadershipElectMeeting from '../assets/cba-exchange_process_4.jpg';
import newlyElectedChairman from '../assets/local_leadership_training.jpg';
import sinohdroWorkersLeadership from '../assets/sinohdro_workers_local_leadership.jpg';
import sinohdroWorkersLeadership1 from '../assets/sinohdro_workers_local_leadership_1.jpg';
import certificationOfLeaders from '../assets/certification_of_leaders.jpg';
import certificationOfLeaders4 from '../assets/certification_of_leaders_4.jpg';
import certificationOfLeaders5 from '../assets/certification_of_leaders_5.jpg';
import certificationOfLeaders12 from '../assets/certification_of_leaders_12.jpg';

// Import LTC mobile second CBA images
import ltcMobileSecondCba1 from '../assets/ltc_mobile_second_cba_1.jpg';
import ltcMobileSecondCba2 from '../assets/ltc_mobile_second_cba_2.jpg';
import ltcMobileSecondCba4 from '../assets/ltc_mobile_second_cba_4.jpg';
import ltcMobileSecondCba from '../assets/ltc_mobile_second_cba.jpg';

// Import Programs and Events images
import unionEducationTraining1 from '../assets/Union-education-training-1.jpg';
import unionEducationTraining2 from '../assets/Union-Education-Training-2.jpg';
import advocacyWorkshop1 from '../assets/advocacy-and-policy-workshop-1.jpg';
import advocacyWorkshop2 from '../assets/advocacy-and-policy-workshop-2.jpg';
import advocacyWorkshop3 from '../assets/advocacy-and-policy-workshop-3.jpg';
import advocacyWorkshop4 from '../assets/advocacy-and-policy-workshop-4.jpg';
import './Home.css';

const slideData = [
  {
    image: newsImg1,
    title: 'CBA Signing Process with Ministry of Labour',
    subtitle: 'Secretary General Macauley Gedeo, Jr. and Ministry of Labour Cooper Kraah',
    description: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
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
    title: 'After CBA Signing Process',
    subtitle: 'Post-CBA signing process documentation and celebration of successful agreement completion.',
    description: 'Capacity development and union education for all GODIMEWUL members.',
    buttonText: 'Get Involved',
    buttonLink: '/contact'
  }
];

const news = [
  {
    title: 'LTC mobile second CBA',
    date: 'July 2025',
    excerpt: 'LTC mobile second Collective Bargaining Agreement signing ceremony and process documentation.',
    images: [ltcMobileSecondCba, ltcMobileSecondCba1, ltcMobileSecondCba2, ltcMobileSecondCba4],
  },
  {
    title: 'Opening ceremony',
    date: 'July 2025',
    excerpt: 'Official opening ceremony event with key stakeholders and union leadership.',
    images: [ltcMobileSecondCba1, ltcMobileSecondCba2], // Using LTC images as placeholder for opening ceremony
  },
  {
    title: 'BMMC Workers Interaction',
    date: 'May 2025',
    excerpt: 'Interaction between BMMC workers',
    images: [bmmcLocalLeadership],
  },
  {
    title: 'CBA Delegation with Mother Union Secretary General Macauley Gedeo, Jr.',
    date: 'May 2025',
    excerpt: 'Collective Bargaining Agreement delegation meeting with the Mother Union Secretary General Macauley Gedeo, Jr.',
    images: [cbaDelegation],
  },
  {
    title: 'Secretary General and Bea Mountain Lawyer Kunkunyor Teh and Macauley Gedeo, Jr.',
    date: 'May 2025',
    excerpt: 'Meeting between the Secretary General and Bea Mountain lawyer Kunkunyor Teh with Macauley Gedeo, Jr.',
    images: [secretaryGeneralLawyer],
  },
  {
    title: 'After CBA Signing Process',
    date: 'May 2025',
    excerpt: 'Post-CBA signing process documentation and celebration of successful agreement completion.',
    images: [afterCbaSigning],
  },
  {
    title: 'Minister of Labour - Liberia, Cllr. Cooper Krah',
    date: 'May 2025',
    excerpt: 'Official meeting with the Minister of Labour of Liberia, Cllr. Cooper Krah, to discuss workers\' rights and labor policies.',
    images: [ministerLabour],
  },
  {
    title: 'CBA Exchange Process',
    date: 'May 2025',
    excerpt: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu.',
    images: [pastPresentLeadership],
  },
  {
    title: 'CBA Sample Views with workers',
    date: 'May 2025',
    excerpt: 'Presentation and discussion of CBA sample views with workers to ensure transparency and understanding.',
    images: [cbaSampleViews],
  },
  {
    title: 'Leadership Elect meeting with Management',
    date: 'May 2025',
    excerpt: 'Meeting between newly elected leadership and management to establish working relationships and discuss future collaboration.',
    images: [leadershipElectMeeting],
  },
  {
    title: 'Newly elected chairman BMMC/CMC, Chairman Paul Wah',
    date: 'May 2025',
    excerpt: 'Introduction and official recognition of the newly elected chairman for BMMC/CMC, Chairman Paul Wah.',
    images: [newlyElectedChairman],
  },
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
  {
    title: 'Sinohydro Workers Local Leadership Training',
    date: 'June 2025',
    excerpt: 'Local leadership training session for Sinohydro workers to enhance their organizational and leadership skills.',
    images: [sinohdroWorkersLeadership, sinohdroWorkersLeadership1],
  },
  {
    title: 'Certification of Leaders',
    date: 'June 2025',
    excerpt: 'Certification ceremony for leaders of the organization.',
    images: [certificationOfLeaders, certificationOfLeaders4, certificationOfLeaders5, certificationOfLeaders12],
  },
];

const events = [
  {
    date: 'July 2025',
    title: 'LTC mobile second CBA',
    desc: 'LTC mobile second Collective Bargaining Agreement signing ceremony and process documentation.',
    images: [ltcMobileSecondCba, ltcMobileSecondCba1, ltcMobileSecondCba2, ltcMobileSecondCba4],
  },
  {
    date: 'July 2025',
    title: 'Opening ceremony',
    desc: 'Official opening ceremony event with key stakeholders and union leadership.',
    images: [ltcMobileSecondCba1, ltcMobileSecondCba2],
  },
  {
    date: 'April 2025',
    title: 'Union Education Training',
    desc: 'Capacity development and union education for all GODIMEWUL members.',
    images: [unionEducationTraining1, unionEducationTraining2],
  },
  {
    date: 'April 2025',
    title: 'Advocacy & Policy Workshop',
    desc: 'Workshop on lobbying for policies that defend workers\' rights and interests.',
    images: [advocacyWorkshop1, advocacyWorkshop2, advocacyWorkshop3, advocacyWorkshop4],
  },
  {
    date: 'April 2025',
    title: 'CBA Exchange Program Launch',
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
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3" style={{ width: '95%', maxWidth: '800px', zIndex: 2 }}>
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
                  <p className="lead mb-4 d-none d-md-block" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
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

    <section className="nlc-hero-section position-relative py-5" style={{ background: 'linear-gradient(135deg, #fff 0%, #C9A13B 100%)' }}>
      <div className="nlc-hero-bg" style={{ backgroundImage: `url(${heroBg})`, opacity: 0.15 }} />
      <div className="nlc-hero-overlay" />
      <Container className="h-100 position-relative z-2">
        <Row className="align-items-center justify-content-center h-100">
          <Col xs={12} md={12} className="text-center mb-4">
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
          <Col xs={12} md={10} lg={8} className="text-center">
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
    {/* Secretary General Welcome Message */}
    <section className="py-5 bg-white nlc-about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.img
              src={macauleyGedeoImg}
              alt="Secretary General Macauley Gedeo Jr"
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
              <h2 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Official Website of GODIMEWUL</h2>
              <p className="fs-6 text-dark mb-3" style={{ lineHeight: '1.6' }}>
                On behalf of <strong>GOLD AND DIAMOND MINES AND ENERGY WORKERS UNIONS OF LIBERIA</strong>, I am pleased to welcome you to our official website, a vital step forward in our ongoing efforts to modernize the delivery of labour-related services and to foster a more transparent and responsive institution.
              </p>
              <p className="fs-6 text-dark mb-3" style={{ lineHeight: '1.6' }}>
                GODIMEWUL plays a pivotal role in shaping the socio-economic landscape of the workers within Liberia. It is our mandate to promote decent work, safeguard the rights of workers, and ensure a balanced and just labour market that supports national development. As Secretary General, I remain committed to upholding the principles of equity, inclusion, and opportunity for all regardless of gender, age, background, or status.
              </p>
              <p className="fs-6 text-dark mb-4" style={{ lineHeight: '1.6' }}>
                This platform has been created not only as an information hub, but also as a bridge between GODIMEWUL and the Workers we serve. Here, you will find up-to-date policies, regulations, programs, and resources aimed at empowering both our workforce that depend on it. It is also a space for engagement, dialogue, and collaboration with local and international partners in the Trade union sectors.
              </p>
              <div className="mb-4">
                <p className="fs-6 text-dark mb-1"><strong>Mr. Macauley Gedeo Jr</strong></p>
                <p className="fs-6 text-muted mb-0" style={{ fontStyle: 'italic' }}>Secretary General</p>
              </div>
              <Button variant="outline-warning" size="lg" href="/about" style={{ borderColor: '#C9A13B', color: '#C9A13B' }}>Learn More</Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Mission, Vision & Background Section */}
    <section className="mission-vision-section">
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="h-100"
            >
              <Card className="mission-card h-100" style={{ borderTop: '4px solid #28a745' }}>
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <div className="mission-icon-wrapper" style={{ background: 'rgba(40, 167, 69, 0.1)' }}>
                      <i className="fas fa-bullseye mission-icon" style={{ color: '#28a745' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3 text-success">Our Mission</h4>
                  <p className="text-dark" style={{ lineHeight: '1.6' }}>
                    To represent workers in Liberia, within its scopes through unity, advocacy, and capacity development to achieve decent work and equality for social justice.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-100"
            >
              <Card className="mission-card h-100" style={{ borderTop: '4px solid #C9A13B' }}>
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <div className="mission-icon-wrapper" style={{ background: 'rgba(201, 161, 59, 0.1)' }}>
                      <i className="fas fa-eye mission-icon" style={{ color: '#C9A13B' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Our Vision</h4>
                  <p className="text-dark" style={{ lineHeight: '1.6' }}>
                    Through teamwork to enhance the organisation's performance, and improve the quality of life for workers and other vulnerable groups through organising, education, collective bargaining, tripartite social dialogue, lobbying for policies which defend their rights and interests and promoting diversity.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-100"
            >
              <Card className="mission-card h-100" style={{ borderTop: '4px solid #17a2b8' }}>
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <div className="mission-icon-wrapper" style={{ background: 'rgba(23, 162, 184, 0.1)' }}>
                      <i className="fas fa-history mission-icon" style={{ color: '#17a2b8' }}></i>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-3 text-info">Our Background</h4>
                  <p className="text-dark" style={{ lineHeight: '1.6' }}>
                    GODIMEWUL is a registered trade union organization in Liberia, accredited by the Ministry of Labour as a Bargaining Agent for workers within the Mining, Energy, Communication, Construction, and industries sectors. Established October 24, 2018. Member of the Liberia Labour Congress and partners with ILO, ITUC-Africa, and others.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-5"
        >
          <Button 
            variant="" 
            size="lg" 
            className="gradient-button px-5 py-3 shadow-lg" 
            href="/about"
          >
            Learn More About Us
          </Button>
        </motion.div>
      </Container>
    </section>
    {/* Latest News & Announcements */}
    <section className="news-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#C9A13B' }}>
            Latest News & Announcements
          </h2>
          <p className="lead text-muted">
            Stay updated with the latest developments and announcements from GODIMEWUL
          </p>
        </motion.div>

        <Row className="g-4">
          {news.slice(0, 6).map((item, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-100 news-card shadow-sm border-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={item.images[0]} 
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <Badge bg="warning" text="dark" className="px-2 py-1">
                        {item.date}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <Card.Title className="fw-bold mb-2" style={{ color: '#C9A13B', fontSize: '1.1rem' }}>
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1" style={{ fontSize: '0.9rem' }}>
                      {item.excerpt}
                    </Card.Text>
                    <Button 
                      variant="outline-warning" 
                      size="sm" 
                      className="mt-auto align-self-start"
                      style={{ borderColor: '#C9A13B', color: '#C9A13B' }}
                    >
                      Read More
                    </Button>
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