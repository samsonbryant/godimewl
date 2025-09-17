import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUsers, FaIndustry, FaPhone, FaHammer, FaHardHat } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const members = [
  {
    id: 1,
    name: 'Liberia Telecommunication Corporation',
    shortName: 'LTC-Mobile',
    industry: 'Telecommunications',
    totalWorkers: '400+',
    description: 'Leading telecommunications company providing mobile and communication services across Liberia.',
    icon: <FaPhone size={40} />,
    color: '#007bff',
    sector: 'Communication'
  },
  {
    id: 2,
    name: 'Bea Mountain Mining Corporation',
    shortName: 'BMMC',
    industry: 'Gold Mining',
    totalWorkers: '4000+',
    description: 'Major gold mining operation contributing significantly to Liberia\'s mining sector and economic development.',
    icon: <FaHammer size={40} />,
    color: '#C9A13B',
    sector: 'Mining'
  },
  {
    id: 3,
    name: 'Sinohydro Corporation',
    shortName: 'Sinohydro',
    industry: 'Construction & Infrastructure',
    totalWorkers: '340+',
    description: 'International construction company specializing in infrastructure development and engineering projects.',
    icon: <FaHardHat size={40} />,
    color: '#28a745',
    sector: 'Construction'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' }
  })
};

const Members = () => {
  const totalWorkers = members.reduce((sum, member) => {
    const count = parseInt(member.totalWorkers.replace('+', ''));
    return sum + count;
  }, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #C9A13B 0%, #B8952F 100%)' }}>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-4">
                  <img src={logo} alt="GODIMEWUL Logo" style={{ height: 100, width: 100, borderRadius: '50%', border: '6px solid rgba(255,255,255,0.3)', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }} />
                </div>
                <h1 className="display-4 fw-bold text-white mb-3">Our Member Organizations</h1>
                <p className="lead text-white mb-4" style={{ fontSize: '1.2rem' }}>
                  GODIMEWUL proudly represents workers across various industries, ensuring their rights 
                  and advocating for better working conditions and fair treatment.
                </p>
                <div className="members-stats d-flex justify-content-center gap-4 flex-wrap mt-4">
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">{members.length}</h3>
                    <p className="text-white mb-0">Member Organizations</p>
                  </div>
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">{totalWorkers.toLocaleString()}+</h3>
                    <p className="text-white mb-0">Workers Represented</p>
                  </div>
                  <div className="stat-item text-center">
                    <h3 className="fw-bold text-white mb-1">3</h3>
                    <p className="text-white mb-0">Key Industries</p>
                  </div>
    </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Members Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
      {members.map((member, idx) => (
              <Col lg={4} md={6} key={member.id}>
          <motion.div
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
                  <Card className="h-100 shadow-lg border-0 member-card" style={{ borderRadius: '20px', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                    {/* Card Header */}
                    <div className="member-header p-4" style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}dd 100%)` }}>
                      <Row className="align-items-center">
                        <Col xs={3} className="text-center">
                          <div className="member-icon-wrapper" style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                            <div className="text-white">
                              {member.icon}
                            </div>
                          </div>
                        </Col>
                        <Col xs={9}>
                          <h5 className="fw-bold text-white mb-1">{member.shortName}</h5>
                          <Badge bg="light" text="dark" className="mb-2">{member.sector}</Badge>
                          <div className="d-flex align-items-center text-white">
                            <FaUsers className="me-2" size={16} />
                            <span className="fw-bold">{member.totalWorkers} Workers</span>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <Card.Body className="p-4">
                      <h6 className="fw-bold mb-2" style={{ color: member.color }}>
                        <FaIndustry className="me-2" size={16} />
                        {member.name}
                      </h6>
                      <p className="text-muted mb-3" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        {member.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted small">Industry: {member.industry}</span>
                        <Badge 
                          style={{ background: member.color }} 
                          className="px-3 py-2"
                        >
                          Active Member
                        </Badge>
                      </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
        </Container>
      </section>

      {/* Membership Benefits Section */}
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
                  Membership Benefits
                </h2>
                <p className="lead text-muted">
                  Our member organizations and their workers benefit from collective representation, 
                  advocacy, and support services that strengthen their position in the workplace.
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
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaUsers size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Collective Bargaining</h5>
                <p className="text-muted">Unified representation in negotiations for better wages, benefits, and working conditions.</p>
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
                  <FaIndustry size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Industry Advocacy</h5>
                <p className="text-muted">Representing member interests in policy discussions and industry-wide initiatives.</p>
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
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaHardHat size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Safety Standards</h5>
                <p className="text-muted">Ensuring workplace safety compliance and promoting best practices across all sectors.</p>
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
                <div className="benefit-icon mb-3" style={{ background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                  <FaHammer size={30} className="text-white" />
                </div>
                <h5 className="fw-bold mb-2">Worker Protection</h5>
                <p className="text-muted">Legal support and protection for workers facing workplace disputes or unfair treatment.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

    <style>{`
      .member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
        }
        
        .member-icon-wrapper {
          transition: transform 0.3s ease;
        }
        
        .member-card:hover .member-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .benefit-icon {
          transition: all 0.3s ease;
        }
        
        .benefit-icon:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        .stat-item {
          padding: 0 1rem;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .stat-item:last-child {
          border-right: none;
        }
        
        @media (max-width: 768px) {
          .stat-item {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            padding: 0.5rem 0;
            margin-bottom: 1rem;
          }
          
          .stat-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          
          .member-header .row > .col-xs-3,
          .member-header .row > .col-xs-9 {
            margin-bottom: 1rem;
          }
          
          .member-header {
            text-align: center;
          }
      }
    `}</style>
    </>
);
};

export default Members; 