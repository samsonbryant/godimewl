import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaBullseye, FaLightbulb, FaIndustry, FaEnvelope, FaPhone, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp, FaUser, FaCrown, FaStar } from 'react-icons/fa';
import aboutImg from '../assets/org1.jpg';
import logo from '../assets/logo.jpg';
import newsImg1 from '../assets/cb1.jpg';
import newsImg2 from '../assets/cb2.jpg';
import newsImg3 from '../assets/cb3.jpg';
import adolphusImg from '../assets/adolphus.jpg';
import danielCooperImg from '../assets/daniel _ooper.jpg';
import jereleneKarpahImg from '../assets/Jerelene_karpah.jpg';
import macauleyGedeoImg from '../assets/macauley_gedeo.jpg';
import placeholderImg from '../assets/WhatsApp Image 2025-07-11 at 04.46.09_3914af17.jpg';

const aboutDetails = [
  {
    icon: <FaBullseye size={28} style={{ color: '#C9A13B' }} />, title: 'Mission',
    desc: 'To represent workers in Liberia, within its scopes through unity, advocacy, and capacity development to achieve decent work and equality for social justice.'
  },
  {
    icon: <FaLightbulb size={28} style={{ color: '#C9A13B' }} />, title: 'Vision',
    desc: 'Through teamwork to enhance the organisation\'s performance, and improve the quality of life for workers and other vulnerable groups through organising, education, collective bargaining, tripartite social dialogue, lobbying for policies which defend their rights and interests and promoting diversity.'
  },
  {
    icon: <FaHandshake size={28} style={{ color: '#C9A13B' }} />, title: 'Partners',
    desc: 'Liberia Labour Congress, International Labour Organization (ILO), ITUC-Africa, and others.'
  },
  {
    icon: <FaIndustry size={28} style={{ color: '#C9A13B' }} />, title: 'Sectors',
    desc: 'Gold & Diamond, Iron Ore Mining, Manufacturing, Energy & Communication, Gas & Oil, Industries, Construction, Formal & Informal, and General Construction Workers.'
  }
];

// Leadership and Team Data
const leadershipData = [
  {
    id: 1,
    name: 'Winston W. Wreh, Sr.',
    position: 'President General',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Winston W. Wreh, Sr. serves as the President General of GODIMEWUL, leading the organization with over 15 years of experience in labor rights advocacy and union leadership. He has been instrumental in negotiating collective bargaining agreements and advancing workers\' rights across Liberia\'s mining and energy sectors.',
    email: 'winston.wreh@godimewul.org',
    phone: '+231 886880068/776147982',
    social: {
      linkedin: 'https://www.linkedin.com/in/winston-wreh-jr-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/winston.wreh.549',
      twitter: 'https://twitter.com/winstonwreh',
      whatsapp: '+231886880068'
    },
    featured: true,
    department: 'Executive Leadership'
  },
  {
    id: 2,
    name: 'Macauley Gedeo, Jr.',
    position: 'Secretary General',
    image: macauleyGedeoImg, // Found matching image
    bio: 'Macauley Gedeo, Jr. serves as the Secretary General of GODIMEWUL, leading the organization with over 15 years of experience in labor rights advocacy and union leadership. He has been instrumental in negotiating collective bargaining agreements and advancing workers\' rights across Liberia\'s mining and energy sectors.',
    email: 'macauley.gedeo@godimewul.org',
    phone: '+231 776397408',
    social: {
      linkedin: 'https://www.linkedin.com/in/macauley-gedeo-jr-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/macauley.gedeo.5',
      twitter: 'https://twitter.com/macauleygedeo',
      whatsapp: '+231776397408'
    },
    featured: true,
    department: 'Executive Leadership'
  },
  {
    id: 3,
    name: 'Samuel S. Sambola',
    position: 'Deputy Secretary General',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Samuel S. Sambola serves as the Deputy Secretary General of GODIMEWUL, leading the organization with over 15 years of experience in labor rights advocacy and union leadership. He has been instrumental in negotiating collective bargaining agreements and advancing workers\' rights across Liberia\'s mining and energy sectors.',
    email: 'samuel.sambola@godimewul.org',
    phone: '+231 886210334/07773533445',
    social: {
      linkedin: 'https://www.linkedin.com/in/samuel-sambola-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/samuel.sambola.5',
      twitter: 'https://twitter.com/samuelsambola',
      whatsapp: '+231886210334'
    },
    featured: true,
    department: 'Executive Leadership'
  },
  {
    id: 4,
    name: 'Adolphus D. Dopoh',
    position: 'Education Director',
    image: adolphusImg, // Found matching image
    bio: 'Adolphus D. Dopoh serves as the Education Director of GODIMEWUL, leading the organization with over 15 years of experience in labor rights advocacy and union leadership. He has been instrumental in negotiating collective bargaining agreements and advancing workers\' rights across Liberia\'s mining and energy sectors.',
    email: 'adolphus.dopoh@godimewul.org',
    phone: '+231 886430158/0776430158',
    social: {
      linkedin: 'https://www.linkedin.com/in/adolphus-dopoh-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/adolphus.dopoh.5',
      twitter: 'https://twitter.com/adolphusdopoh',
      whatsapp: '+231886430158'
    },
    featured: false,
    department: 'Programs & Education'
  },
  {
    id: 5,
    name: 'Audrey Tulay',
    position: 'Administrative  Assistant',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Audrey Tulay provides administrative guidance and support for the organization. She has been instrumental in coordinating internal operations and ensuring smooth functioning of the organization.',
    email: 'audrey.tulay@godimewul.org',
    phone: '+231 881554501/0770410976',
    social: {
      linkedin: 'https://www.linkedin.com/in/audrey-tulay-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/audrey.tulay.5',
      twitter: 'https://twitter.com/audreytulay',
      whatsapp: '+231881554501'
    },
    featured: false,
    department: 'Administrative'
  },
  {
    id: 6,
    name: 'Wesley N. Saylee',
    position: 'Grievance-Chair',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Wesley N. Saylee serves as the Grievance-Chair of GODIMEWUL, leading the organization with over 15 years of experience in labor rights advocacy and union leadership. He has been instrumental in negotiating collective bargaining agreements and advancing workers\' rights across Liberia\'s mining and energy sectors.',
    email: 'wesley.saylee@godimewul.org',
    phone: '+231 886968388/0777968388',
    social: {
      linkedin: 'https://www.linkedin.com/in/wesley-saylee-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/wesley.saylee.5',
      twitter: 'https://twitter.com/wesley_saylee',
      whatsapp: '+231886968388'
    },
    featured: false,
    department: 'Grievance'
  },
  {
    id: 7,
    name: 'Romeo Wreh',
    position: 'Office Assistant',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Romeo Wreh coordinates office activities and ensures effective representation of workers across all sectors. He maintains strong relationships with union members and local chapters.',
    email: 'romeo.wreh@godimewul.org',
    phone: '+231 880784877/0777800181',
    social: {
      linkedin: 'https://www.linkedin.com/in/romeo-wreh-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/romeo.wreh.5',
      twitter: 'https://twitter.com/romeowreh',
      whatsapp: '+231880784877'
    },
    featured: false,
    department: 'Administrative'
  },
  {
    id: 8,
    name: 'Daniel Cooper',
    position: 'Maintenance',
    image: danielCooperImg, // Found matching image
    bio: 'Daniel Cooper Coordinates maintenance activities and ensures effective representation of workers across all sectors. He maintains strong relationships with union members and local chapters.',
    email: 'daniel.cooper@godimewul.org',
    phone: '+231 776147983/0776147983',
    social: {
      linkedin: 'https://www.linkedin.com/in/daniel-cooper-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/daniel.cooper.5',
      twitter: 'https://twitter.com/danielcooper',
      whatsapp: '+231776147983'
    },
    featured: false,
    department: 'Maintenance'
  },
  {
    id: 9,
    name: 'Jerelene T. Karpeh ',
    position: 'Cleaner',
    image: jereleneKarpahImg, // Found matching image
    bio: 'Jerelene T. Karpeh coordinates cleaning activities and ensures effective representation of workers across all sectors. She maintains strong relationships with union members and local chapters.',
    email: 'jerelene.karpeh@godimewul.org',
    phone: '+231 779377970',
    social: {
      linkedin: 'https://www.linkedin.com/in/jerelene-karpeh-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/jerelene.karpeh.5',
      twitter: 'https://twitter.com/jerelene_karpeh',
      whatsapp: '+231779377970'
    },
    featured: false,
    department: 'Cleaner'
  },
  {
    id: 10,
    name: 'Julius B. Nugba',
    position: 'Organizer(Bomi)',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Julius B. Nugba coordinates organizing activities and ensures effective representation of workers across all sectors. He maintains strong relationships with union members and local chapters.',
    email: 'julius.nugba@godimewul.org',
    phone: '+231 776147983/0776147983',
    social: {
      linkedin: 'https://www.linkedin.com/in/julius-nugba-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/julius.nugba.5',
      twitter: 'https://twitter.com/julius_nugba',
      whatsapp: '+231776147983'
    },
    featured: false,
    department: 'Cleaner'
  },
  {
    id: 11,
    name: 'Garrison N. Nebo',
    position: 'Driver',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Garrison N. Nebo coordinates driving activities and ensures effective representation of workers across all sectors. He maintains strong relationships with union members and local chapters.',
    email: 'garrison.nebo@godimewul.org',
    phone: '+231 886699188/0776699188',
    social: {
      linkedin: 'https://www.linkedin.com/in/garrison-nebo-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/garrison.nebo.5',
      twitter: 'https://twitter.com/garrisonnebo',
      whatsapp: '+231886699188'
    },
    featured: false,
      department: 'Driver'
  },
  {
    id: 12,
    name: 'Stephen Diggs',
    position: 'Organizer(Cape Mount)',
    image: placeholderImg, // No specific image found, use placeholder
    bio: 'Stephen Diggs coordinates organizing activities and ensures effective representation of workers across all sectors. He maintains strong relationships with union members and local chapters.',
    email: 'stephen.diggs@godimewul.org',
    phone: '+231886910045/0777259443',
    social: {
      linkedin: 'https://www.linkedin.com/in/stephen-diggs-1b1b1b1b1b/',
      facebook: 'https://www.facebook.com/stephen.diggs.5',
      twitter: 'https://twitter.com/stephendiggs',
      whatsapp: '+231886910045'
    },
    featured: false,
      department: 'Organizer'
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: leadershipData.length },
    { id: 'Executive Leadership', name: 'Executive Leadership', count: leadershipData.filter(item => item.department === 'Executive Leadership').length },
    { id: 'Programs & Education', name: 'Programs & Education', count: leadershipData.filter(item => item.department === 'Programs & Education').length },
    { id: 'Legal Affairs', name: 'Legal Affairs', count: leadershipData.filter(item => item.department === 'Legal Affairs').length },
    { id: 'Communications', name: 'Communications', count: leadershipData.filter(item => item.department === 'Communications').length },
    { id: 'Membership Services', name: 'Membership Services', count: leadershipData.filter(item => item.department === 'Membership Services').length }
  ];

  const filteredLeadership = leadershipData.filter(member => 
    selectedDepartment === 'all' || member.department === selectedDepartment
  );

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  const handleContact = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace('+', '')}`, '_blank');
        break;
      default:
        window.open(value, '_blank');
    }
  };

  return (
    <div className="about-page">
  <Container className="py-5">
        {/* Logo and Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-5"
        >
          <img 
            src={logo} 
            alt="GODIMEWUL Logo" 
            style={{ 
              height: 100, 
              width: 100, 
              borderRadius: '50%', 
              border: '4px solid #C9A13B', 
              background: '#fff', 
              boxShadow: '0 2px 12px rgba(0,0,0,0.10)' 
            }} 
          />
        </motion.div>

        {/* About Section */}
        <Row className="align-items-center mb-5">
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
              <h2 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>About GODIMEWUL</h2>
        <p className="fs-5 text-dark mb-3">
          <strong>Gold and Diamond Mines and Energy Workers Union of Liberia (GODIMEWUL)</strong> is a registered trade union organization in Liberia, accredited by the Ministry of Labour as a Bargaining Agent for workers within the Mining, Energy, Communication, Construction, and industries sectors.
        </p>
        <p className="fs-5 text-dark mb-3">
          <strong>Established:</strong> October 24, 2018
        </p>
            </motion.div>
          </Col>
        </Row>

        {/* Mission, Vision, etc. Cards */}
        <Row>
          {aboutDetails.map((item, idx) => (
            <Col md={6} className="mb-4" key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-100 shadow-lg border-0 about-card" style={{ background: 'linear-gradient(135deg, #fff 0%, #C9A13B10 100%)', transition: 'all 0.3s' }}>
                  <Card.Body className="d-flex align-items-start gap-3 p-4">
                    <div>{item.icon}</div>
                    <div>
                      <Card.Title className="fw-bold mb-2" style={{ color: '#C9A13B' }}>{item.title}</Card.Title>
                      <Card.Text className="text-muted mb-0">{item.desc}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Leadership Section */}
        <section className="leadership-section mt-5 pt-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <h2 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>
              <FaCrown className="me-3" />
              Our Leadership Team
            </h2>
            <p className="fs-5 text-muted">
              Meet the dedicated professionals who lead GODIMEWUL in advancing workers' rights and improving working conditions across Liberia.
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="department-filter mb-4"
          >
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept.id}
                  variant={selectedDepartment === dept.id ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept.id)}
                  className="department-btn"
                  style={{ 
                    background: selectedDepartment === dept.id ? '#C9A13B' : 'transparent',
                    borderColor: '#C9A13B',
                    color: selectedDepartment === dept.id ? 'white' : '#C9A13B'
                  }}
                >
                  {dept.name} ({dept.count})
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Leadership Grid */}
          <Row className="g-4">
            {filteredLeadership.map((member, idx) => (
              <Col lg={4} md={6} key={member.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card 
                    className="h-100 leadership-card shadow-lg border-0"
                    onClick={() => handleMemberClick(member)}
                  >
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={member.image} 
                        className="leadership-image"
                        style={{ height: 250, objectFit: 'cover' }}
                      />
                      {member.featured && (
                        <div className="featured-badge">
                          <FaStar />
                        </div>
                      )}
                      <div className="department-badge">
                        {member.department}
                      </div>
                    </div>
                    <Card.Body className="text-center p-4">
                      <Card.Title className="fw-bold mb-1" style={{ color: '#C9A13B' }}>
                        {member.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-3">
                        {member.position}
                      </Card.Subtitle>
                      <p className="text-muted small mb-3">
                        {member.bio.substring(0, 120)}...
                      </p>
                      <div className="social-links">
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('email', member.email);
                          }}
                          className="social-btn"
                        >
                          <FaEnvelope />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-success"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('phone', member.phone);
                          }}
                          className="social-btn"
                        >
                          <FaPhone />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-info"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContact('whatsapp', member.social.whatsapp);
                          }}
                          className="social-btn"
                        >
                          <FaWhatsapp />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Leadership Modal */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          size="lg"
          centered
          className="leadership-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedMember?.name}
              {selectedMember?.featured && <FaStar className="ms-2 text-warning" />}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedMember && (
              <div className="modal-content">
                <Row>
                  <Col md={4}>
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="img-fluid rounded mb-3"
                      style={{ width: '100%', height: 200, objectFit: 'cover' }}
                    />
                  </Col>
                  <Col md={8}>
                    <h5 className="text-primary mb-2">{selectedMember.position}</h5>
                    <p className="text-muted mb-3">{selectedMember.department}</p>
                    <p className="mb-3">{selectedMember.bio}</p>
                    <div className="contact-info">
                      <div className="contact-item">
                        <FaEnvelope className="me-2" />
                        <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
                      </div>
                      <div className="contact-item">
                        <FaPhone className="me-2" />
                        <a href={`tel:${selectedMember.phone}`}>{selectedMember.phone}</a>
                      </div>
                    </div>
      </Col>
    </Row>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="social-buttons">
              <Button
                variant="outline-primary"
                onClick={() => selectedMember && handleContact('linkedin', selectedMember.social.linkedin)}
              >
                <FaLinkedin /> LinkedIn
              </Button>
              <Button
                variant="outline-primary"
                onClick={() => selectedMember && handleContact('facebook', selectedMember.social.facebook)}
              >
                <FaFacebook /> Facebook
              </Button>
              <Button
                variant="outline-info"
                onClick={() => selectedMember && handleContact('twitter', selectedMember.social.twitter)}
              >
                <FaTwitter /> Twitter
              </Button>
            </div>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
  </Container>

      <style>{`
        .about-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 32px rgba(201,161,59,0.15);
        }
        
        .leadership-card {
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 15px;
          overflow: hidden;
        }
        
        .leadership-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(201,161,59,0.2);
        }
        
        .leadership-image {
          transition: transform 0.3s ease;
        }
        
        .leadership-card:hover .leadership-image {
          transform: scale(1.05);
        }
        
        .featured-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #ffc107;
          color: #000;
          padding: 5px 8px;
          border-radius: 20px;
          font-size: 0.8rem;
        }
        
        .department-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(201,161,59,0.9);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        
        .social-links {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }
        
        .social-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          transform: scale(1.1);
        }
        
        .department-btn {
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .department-btn:hover {
          transform: translateY(-2px);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .contact-item a {
          color: #C9A13B;
          text-decoration: none;
        }
        
        .contact-item a:hover {
          text-decoration: underline;
        }
        
        .social-buttons {
          display: flex;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .department-filter {
            flex-direction: column;
            align-items: center;
          }
          
          .social-buttons {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default About; 