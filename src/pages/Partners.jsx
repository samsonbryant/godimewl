import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaGlobe, FaBalanceScale, FaIndustry, FaShieldAlt, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import './Partners.css';

// Import partner logos
import llcLogo from '../assets/Liberia Labour Congress.png';
import ministryOfLabourLogo from '../assets/Ministry of Labour Liberia.png';
import iloLogo from '../assets/ILO.png';

const partnersData = [
  {
    id: 1,
    name: 'Liberia Labour Congress',
    acronym: 'LLC',
    type: 'National Labour Organization',
    description: 'The Liberia Labour Congress (LLC) aims to promote workers\' rights and welfare in Liberia.',
    leadership: 'President General James T. Reeves',
    keyObjectives: [
      'Advocating for Workers\' Rights: Building workers\' capacity to advocate, organize, engage, and recruit, ensuring fair gain-sharing and protection of salaries and benefits.',
      'Fostering Collaboration: Encouraging cooperation among labour unions to strengthen the collective voice of workers.',
      'Enhancing Worker Empowerment: Providing education and training to union members, promoting a stable industrial relations environment, and adherence to international labour standards.',
      'Promoting Equitable Workforce: Working towards creating a more equitable and empowered workforce within Liberia, with a focus on social dialogue, decent work, and social protection.'
    ],
    ministryAlignment: [
      'Promoting Human Resource Development',
      'Improving Working Conditions',
      'Policy Development and Coordination',
      'Administering Labour Law',
      'Enhancing Productivity'
    ],
    icon: <FaUsers size={40} />,
    logo: llcLogo,
    color: '#28a745',
    website: 'https://www.ituc-africa.org/Liberia-Labour-Congress-LLC.html',
    established: '1960s'
  },
  {
    id: 2,
    name: 'Ministry of Labour',
    acronym: 'MOL',
    type: 'Government Institution',
    description: 'Created by an Act of the Legislature in 1981; the Ministry has the statutory responsibility to regulate the labour sector through development and implementation of policies for adherence to the Labour Laws of Liberia and international labour conventions.',
    responsibility: 'The Liberian Ministry of Labour is responsible for the promotion, administration, development, regulation, control of Decent Work Act and Labour Practices Law of the Republic of Liberia.',
    principalGoal: 'To assist the Government of Liberia through an effective system of labour administration, in the formulation and implementation of sound labour and employment policies by promoting a stable industrial relations environment through social dialogue; opportunities for employment creation and decent work; social protection and adherence to international labour standards.',
    objectives: [
      'Promote Human Resource Development',
      'Provide Leadership in Improving Working Conditions (Decent Work)',
      'Policy Development and Coordination',
      'Trade Union Education and Training',
      'Administration of Labour Law',
      'Enhancing Productivity',
      'Labour Market Information'
    ],
    icon: <FaBalanceScale size={40} />,
    logo: ministryOfLabourLogo,
    color: '#C9A13B',
    website: 'https://mol.gov.lr/',
    established: '1981'
  },
  {
    id: 3,
    name: 'International Labour Organization',
    acronym: 'ILO',
    type: 'UN Tripartite Agency',
    description: 'The International Labour Organization (ILO) is devoted to promoting social justice and internationally recognized human and labour rights, pursuing its founding mission that social justice is essential to universal and lasting peace.',
    uniqueFeature: 'The only tripartite U.N. agency, since 1919 the ILO brings together governments, employers and workers of 187 Member States, to set labour standards, develop policies and devise programmes promoting decent work for all women and men.',
    missionImpact: [
      'Set and promote standards and fundamental principles and rights at work',
      'Create greater opportunities for women and men to decent employment and income',
      'Enhance the coverage and effectiveness of social protection for all',
      'Strengthen tripartism and social dialogue'
    ],
    icon: <FaGlobe size={40} />,
    logo: iloLogo,
    color: '#0056b3',
    website: 'https://www.ilo.org',
    established: '1919',
    memberStates: '187'
  }
];

const Partners = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="partners-hero-section py-5" style={{ background: 'linear-gradient(135deg, #C9A13B 0%, #B8952F 100%)' }}>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-4">
                  <FaHandshake size={60} className="text-white mb-3" />
                </div>
                <h1 className="display-4 fw-bold text-white mb-3">Our Partners</h1>
                <p className="lead text-white mb-4" style={{ fontSize: '1.2rem' }}>
                  GODIMEWUL works closely with key organizations to advance workers' rights, promote decent work, 
                  and strengthen the labour movement in Liberia and internationally.
                </p>
                <div className="partners-stats d-flex justify-content-center gap-4 flex-wrap mt-4">
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">3</h3>
                    <p className="text-white mb-0">Key Partners</p>
                  </div>
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">100+</h3>
                    <p className="text-white mb-0">Years Combined Experience</p>
                  </div>
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">187</h3>
                    <p className="text-white mb-0">ILO Member States</p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            {partnersData.map((partner, index) => (
              <Col lg={12} key={partner.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="partner-card border-0 shadow-lg h-100" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                    <div className="partner-header" style={{ background: `linear-gradient(135deg, ${partner.color} 0%, ${partner.color}dd 100%)`, padding: '2rem' }}>
                      <Row className="align-items-center">
                        <Col md={2} className="text-center mb-3 mb-md-0">
                          <div className="partner-logo-wrapper" style={{ background: 'rgba(255,255,255,0.9)', borderRadius: '15px', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', padding: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} Logo`}
                              style={{ 
                                maxWidth: '100%', 
                                maxHeight: '100%', 
                                objectFit: 'contain',
                                borderRadius: '8px'
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={8}>
                          <h2 className="fw-bold text-white mb-2">{partner.name}</h2>
                          <div className="d-flex flex-wrap gap-2 mb-2">
                            <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.9rem' }}>{partner.acronym}</span>
                            <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.9rem' }}>{partner.type}</span>
                            <span className="badge bg-light text-dark px-3 py-2" style={{ fontSize: '0.9rem' }}>Est. {partner.established}</span>
                          </div>
                          <p className="text-white mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            {partner.description}
                          </p>
                        </Col>
                        <Col md={2} className="text-center">
                          {partner.website !== '#' && (
                            <Button variant="light" size="sm" href={partner.website} target="_blank" className="fw-bold">
                              Visit Website
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </div>

                    <Card.Body className="p-4">
                      <Row>
                        {/* Left Column - Main Content */}
                        <Col lg={8}>
                          {partner.leadership && (
                            <div className="mb-4">
                              <h5 className="fw-bold mb-2" style={{ color: partner.color }}>
                                <FaUsers className="me-2" size={20} />
                                Leadership
                              </h5>
                              <p className="text-dark mb-0">{partner.leadership}</p>
                            </div>
                          )}

                          {partner.responsibility && (
                            <div className="mb-4">
                              <h5 className="fw-bold mb-2" style={{ color: partner.color }}>
                                <FaShieldAlt className="me-2" size={20} />
                                Responsibility
                              </h5>
                              <p className="text-dark mb-0" style={{ lineHeight: '1.6' }}>{partner.responsibility}</p>
                            </div>
                          )}

                          {partner.principalGoal && (
                            <div className="mb-4">
                              <h5 className="fw-bold mb-2" style={{ color: partner.color }}>
                                <FaChartLine className="me-2" size={20} />
                                Principal Goal
                              </h5>
                              <p className="text-dark mb-0" style={{ lineHeight: '1.6' }}>{partner.principalGoal}</p>
                            </div>
                          )}

                          {partner.uniqueFeature && (
                            <div className="mb-4">
                              <h5 className="fw-bold mb-2" style={{ color: partner.color }}>
                                <FaGlobe className="me-2" size={20} />
                                Unique Feature
                              </h5>
                              <p className="text-dark mb-0" style={{ lineHeight: '1.6' }}>{partner.uniqueFeature}</p>
                              {partner.memberStates && (
                                <p className="text-muted mt-2 mb-0">
                                  <strong>Member States:</strong> {partner.memberStates}
                                </p>
                              )}
                            </div>
                          )}
                        </Col>

                        {/* Right Column - Lists */}
                        <Col lg={4}>
                          {partner.keyObjectives && (
                            <div className="mb-4">
                              <h6 className="fw-bold mb-3" style={{ color: partner.color }}>
                                <FaIndustry className="me-2" size={16} />
                                Key Objectives
                              </h6>
                              <ul className="list-unstyled">
                                {partner.keyObjectives.map((objective, idx) => (
                                  <li key={idx} className="mb-2 d-flex">
                                    <span className="badge rounded-pill me-2 mt-1" style={{ background: partner.color, minWidth: '20px', height: '20px', fontSize: '10px' }}>{idx + 1}</span>
                                    <span className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {partner.objectives && (
                            <div className="mb-4">
                              <h6 className="fw-bold mb-3" style={{ color: partner.color }}>
                                <FaGraduationCap className="me-2" size={16} />
                                Objectives
                              </h6>
                              <ul className="list-unstyled">
                                {partner.objectives.map((objective, idx) => (
                                  <li key={idx} className="mb-2 d-flex">
                                    <span className="badge rounded-pill me-2 mt-1" style={{ background: partner.color, minWidth: '20px', height: '20px', fontSize: '10px' }}>{idx + 1}</span>
                                    <span className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{objective}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {partner.missionImpact && (
                            <div className="mb-4">
                              <h6 className="fw-bold mb-3" style={{ color: partner.color }}>
                                <FaChartLine className="me-2" size={16} />
                                Mission & Impact
                              </h6>
                              <ul className="list-unstyled">
                                {partner.missionImpact.map((impact, idx) => (
                                  <li key={idx} className="mb-2 d-flex">
                                    <span className="badge rounded-pill me-2 mt-1" style={{ background: partner.color, minWidth: '20px', height: '20px', fontSize: '10px' }}>{idx + 1}</span>
                                    <span className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{impact}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {partner.ministryAlignment && (
                            <div className="mb-4">
                              <h6 className="fw-bold mb-3" style={{ color: partner.color }}>
                                <FaBalanceScale className="me-2" size={16} />
                                Ministry Alignment
                              </h6>
                              <ul className="list-unstyled">
                                {partner.ministryAlignment.map((alignment, idx) => (
                                  <li key={idx} className="mb-2 d-flex">
                                    <span className="badge rounded-pill me-2 mt-1" style={{ background: partner.color, minWidth: '20px', height: '20px', fontSize: '10px' }}>{idx + 1}</span>
                                    <span className="text-dark" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{alignment}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#C9A13B' }}>
                  Strengthening Workers' Rights Through Partnership
                </h2>
                <p className="lead text-muted">
                  Our partnerships create a powerful network that advances decent work, 
                  promotes social justice, and strengthens the voice of workers across Liberia and beyond.
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaUsers size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Collective Voice</h5>
                <p className="text-muted">Strengthening workers' collective bargaining power through unified representation.</p>
              </motion.div>
            </Col>

            <Col md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #C9A13B 0%, #B8952F 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaGraduationCap size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Capacity Building</h5>
                <p className="text-muted">Providing education, training, and skill development opportunities for union members.</p>
              </motion.div>
            </Col>

            <Col md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #0056b3 0%, #007bff 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaBalanceScale size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Policy Advocacy</h5>
                <p className="text-muted">Influencing labour policies and legislation to protect and advance workers' rights.</p>
              </motion.div>
            </Col>

            <Col md={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaGlobe size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Global Standards</h5>
                <p className="text-muted">Ensuring adherence to international labour standards and best practices.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>
                  Join Our Partnership Network
                </h3>
                <p className="lead text-muted mb-4">
                  Interested in partnering with GODIMEWUL to advance workers' rights and promote decent work? 
                  We welcome collaboration with organizations that share our vision and values.
                </p>
                <Button 
                  variant="" 
                  size="lg" 
                  className="px-5 py-3 fw-bold shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #C9A13B 0%, #B8952F 100%)', 
                    color: '#fff', 
                    border: 'none',
                    borderRadius: '50px'
                  }}
                  href="/contact"
                >
                  Contact Us for Partnership
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Partners;
