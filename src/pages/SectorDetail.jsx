import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaIndustry, FaGem, FaOilCan, FaBolt, FaTools, FaHardHat, FaUsers, FaBuilding } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const sectors = [
  {
    id: 'gold-diamond',
    title: 'Gold and Diamond Sectors',
    icon: FaGem,
    description: 'Representing workers in precious metal and gemstone mining operations across Liberia.',
    details: {
      overview: 'The Gold and Diamond sectors form the backbone of Liberia\'s mineral wealth, providing employment to thousands of workers in exploration, extraction, processing, and support services.',
      keyAreas: [
        'Underground and surface mining operations',
        'Mineral processing and refinement',
        'Environmental safety and compliance',
        'Equipment maintenance and operation',
        'Security and logistics support'
      ],
      challenges: [
        'Hazardous working conditions',
        'Long working hours in remote locations',
        'Health and safety risks',
        'Fair compensation and benefits',
        'Career development opportunities'
      ],
      achievements: [
        'Improved safety standards across major mining sites',
        'Enhanced compensation packages for skilled workers',
        'Better working conditions and facilities',
        'Training programs for career advancement'
      ],
      statistics: {
        workers: '15,000+',
        companies: '8 major operations',
        locations: '12 mining sites',
        safetyIncidents: 'Reduced by 40%'
      }
    },
    color: '#FFD700',
    bgColor: '#FFF8DC'
  },
  {
    id: 'iron-ore',
    title: 'Iron Ore Mining Sectors',
    icon: FaIndustry,
    description: 'Advocating for workers in Liberia\'s iron ore mining industry, one of the country\'s largest export sectors.',
    details: {
      overview: 'Iron ore mining is a critical sector in Liberia\'s economy, with large-scale operations providing significant employment and contributing to national development.',
      keyAreas: [
        'Large-scale open-pit mining operations',
        'Ore processing and beneficiation',
        'Transportation and logistics',
        'Infrastructure development and maintenance',
        'Environmental management and rehabilitation'
      ],
      challenges: [
        'Seasonal weather impacts on operations',
        'Infrastructure limitations in remote areas',
        'Market price volatility affecting job security',
        'Environmental compliance requirements',
        'Skills development and training needs'
      ],
      achievements: [
        'Established comprehensive safety protocols',
        'Negotiated competitive wage structures',
        'Implemented skills development programs',
        'Improved community relations and local employment'
      ],
      statistics: {
        workers: '8,000+',
        companies: '3 major operations',
        locations: '6 mining sites',
        annualOutput: '15+ million tons'
      }
    },
    color: '#8B4513',
    bgColor: '#F5F5DC'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Companies',
    icon: FaBuilding,
    description: 'Supporting workers in Liberia\'s growing manufacturing sector, from small-scale to large industrial operations.',
    details: {
      overview: 'The manufacturing sector in Liberia encompasses diverse industries including food processing, textiles, construction materials, and consumer goods production.',
      keyAreas: [
        'Food and beverage processing',
        'Textile and garment manufacturing',
        'Construction materials production',
        'Consumer goods manufacturing',
        'Quality control and assurance'
      ],
      challenges: [
        'Limited access to modern technology',
        'Supply chain disruptions',
        'Competition from imported goods',
        'Skills gap in advanced manufacturing',
        'Infrastructure and utility challenges'
      ],
      achievements: [
        'Improved workplace safety standards',
        'Enhanced worker training programs',
        'Better compensation and benefits packages',
        'Increased local content in production'
      ],
      statistics: {
        workers: '12,000+',
        companies: '45+ registered',
        sectors: '8 different industries',
        growth: '15% annually'
      }
    },
    color: '#4169E1',
    bgColor: '#F0F8FF'
  },
  {
    id: 'energy-communication',
    title: 'Energy and Communication Sectors',
    icon: FaBolt,
    description: 'Empowering workers in Liberia\'s energy generation, distribution, and telecommunications industries.',
    details: {
      overview: 'The energy and communication sectors are vital for Liberia\'s development, providing essential services and infrastructure for economic growth and social progress.',
      keyAreas: [
        'Power generation and distribution',
        'Telecommunications infrastructure',
        'Renewable energy development',
        'Network maintenance and operations',
        'Customer service and support'
      ],
      challenges: [
        'Infrastructure development needs',
        'Technology adoption and training',
        'Service reliability and quality',
        'Rural connectivity challenges',
        'Regulatory compliance requirements'
      ],
      achievements: [
        'Improved service reliability and coverage',
        'Enhanced worker safety protocols',
        'Better customer service standards',
        'Increased rural electrification'
      ],
      statistics: {
        workers: '6,000+',
        companies: '12 major operators',
        coverage: '75% of population',
        reliability: '95% uptime'
      }
    },
    color: '#32CD32',
    bgColor: '#F0FFF0'
  },
  {
    id: 'gas-oil',
    title: 'Gas and Oil Sectors',
    icon: FaOilCan,
    description: 'Representing workers in Liberia\'s emerging oil and gas industry, including exploration, production, and distribution.',
    details: {
      overview: 'Liberia\'s oil and gas sector is an emerging industry with significant potential for economic growth and employment opportunities in exploration, production, and related services.',
      keyAreas: [
        'Offshore exploration and drilling',
        'Oil and gas production operations',
        'Pipeline construction and maintenance',
        'Refinery and processing facilities',
        'Environmental protection and safety'
      ],
      challenges: [
        'High-risk working environments',
        'Environmental protection requirements',
        'International competition for skilled workers',
        'Regulatory compliance complexity',
        'Market volatility and price fluctuations'
      ],
      achievements: [
        'Established comprehensive safety standards',
        'Implemented environmental protection measures',
        'Created local employment opportunities',
        'Developed specialized training programs'
      ],
      statistics: {
        workers: '3,000+',
        companies: '5 major operators',
        offshoreBlocks: '15 exploration blocks',
        safetyRecord: 'Zero major incidents'
      }
    },
    color: '#000000',
    bgColor: '#F8F8FF'
  },
  {
    id: 'industries',
    title: 'Industries Sectors',
    icon: FaIndustry,
    description: 'Supporting workers across various industrial sectors including chemical, pharmaceutical, and heavy industries.',
    details: {
      overview: 'The industrial sector encompasses a wide range of manufacturing and processing industries that contribute significantly to Liberia\'s economic diversification and employment.',
      keyAreas: [
        'Chemical and pharmaceutical manufacturing',
        'Heavy machinery and equipment',
        'Industrial processing and packaging',
        'Quality control and laboratory services',
        'Maintenance and technical support'
      ],
      challenges: [
        'Technology and equipment modernization',
        'Skills development and training needs',
        'Quality standards and compliance',
        'Market competition and efficiency',
        'Environmental and safety regulations'
      ],
      achievements: [
        'Improved production efficiency and quality',
        'Enhanced worker safety and health standards',
        'Better compensation and career development',
        'Increased local content and value addition'
      ],
      statistics: {
        workers: '9,000+',
        companies: '25+ industrial facilities',
        sectors: '6 major industries',
        exports: '$50M+ annually'
      }
    },
    color: '#DC143C',
    bgColor: '#FFF0F5'
  },
  {
    id: 'formal-informal',
    title: 'Formal and Informal Sectors',
    icon: FaUsers,
    description: 'Advocating for workers across both formal and informal employment sectors, ensuring fair treatment and rights protection.',
    details: {
      overview: 'GODIMEWUL represents workers across the entire employment spectrum, from formal corporate employment to informal sector workers, ensuring comprehensive worker protection.',
      keyAreas: [
        'Formal corporate employment',
        'Small business and entrepreneurship',
        'Informal sector workers',
        'Street vendors and market workers',
        'Artisans and craftspeople'
      ],
      challenges: [
        'Informal sector worker recognition',
        'Access to social protection',
        'Fair compensation and working conditions',
        'Skills development and training',
        'Legal protection and rights enforcement'
      ],
      achievements: [
        'Improved recognition of informal workers',
        'Enhanced access to social services',
        'Better working conditions and safety',
        'Increased skills development opportunities'
      ],
      statistics: {
        workers: '25,000+',
        sectors: '15+ different areas',
        coverage: '80% of workforce',
        benefits: 'Improved for 60%'
      }
    },
    color: '#9370DB',
    bgColor: '#F8F4FF'
  },
  {
    id: 'construction',
    title: 'General Construction Workers',
    icon: FaHardHat,
    description: 'Protecting the rights and interests of construction workers across all types of building and infrastructure projects.',
    details: {
      overview: 'The construction sector is a major employer in Liberia, encompassing residential, commercial, and infrastructure development projects that drive economic growth.',
      keyAreas: [
        'Residential and commercial construction',
        'Infrastructure and road construction',
        'Heavy equipment operation',
        'Skilled trades and craftsmanship',
        'Project management and supervision'
      ],
      challenges: [
        'Seasonal work and job security',
        'Safety hazards and accident prevention',
        'Skills development and certification',
        'Fair compensation and benefits',
        'Working conditions and facilities'
      ],
      achievements: [
        'Improved safety standards and training',
        'Enhanced compensation and benefits',
        'Better working conditions and facilities',
        'Increased skills development programs'
      ],
      statistics: {
        workers: '18,000+',
        companies: '100+ contractors',
        projects: '200+ annually',
        safety: 'Improved by 50%'
      }
    },
    color: '#FF6347',
    bgColor: '#FFF5EE'
  }
];

const SectorDetail = () => {
  const { sectorId } = useParams();
  const navigate = useNavigate();
  const sector = sectors.find(s => s.id === sectorId);

  if (!sector) {
    return (
      <Container className="py-5 text-center">
        <img src={logo} alt="GODIMEWUL Logo" style={{ height: 80, width: 80, borderRadius: '50%', border: '4px solid #C9A13B', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
        <h2 className="mt-4" style={{ color: '#C9A13B' }}>Sector Not Found</h2>
        <p>The sector you are looking for does not exist.</p>
        <Button variant="primary" style={{ background: '#C9A13B', border: 'none' }} onClick={() => navigate('/sectors')}>Back to Sectors</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5">
        <Col md={2} className="text-center mb-3 mb-md-0">
          <img src={logo} alt="GODIMEWUL Logo" style={{ height: 80, width: 80, borderRadius: '50%', border: '4px solid #C9A13B', background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }} />
        </Col>
        <Col md={10}>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="fw-bold mb-2" style={{ color: sector.color }}>{sector.title}</h1>
            <div className="mb-2">
              <sector.icon size={40} style={{ color: sector.color, marginRight: 10 }} />
            </div>
            <p className="lead text-dark mb-0">{sector.description}</p>
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h4 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Overview</h4>
            <p className="text-muted mb-4">{sector.details.overview}</p>
            <h5 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Key Areas of Focus</h5>
            <ul className="list-unstyled mb-4">
              {sector.details.keyAreas.map((area, idx) => (
                <li key={idx} className="mb-2">
                  <i className="fas fa-check-circle me-2" style={{ color: sector.color }}></i>
                  {area}
                </li>
              ))}
            </ul>
            <h5 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Challenges We Address</h5>
            <ul className="list-unstyled mb-4">
              {sector.details.challenges.map((challenge, idx) => (
                <li key={idx} className="mb-2">
                  <i className="fas fa-exclamation-triangle me-2" style={{ color: '#FF6B6B' }}></i>
                  {challenge}
                </li>
              ))}
            </ul>
            <h5 className="fw-bold mb-3" style={{ color: '#C9A13B' }}>Recent Achievements</h5>
            <ul className="list-unstyled mb-4">
              {sector.details.achievements.map((achievement, idx) => (
                <li key={idx} className="mb-2">
                  <i className="fas fa-trophy me-2" style={{ color: '#FFD700' }}></i>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <h6 className="fw-bold mb-3 text-center" style={{ color: '#C9A13B' }}>Sector Statistics</h6>
                {Object.entries(sector.details.statistics).map(([key, value]) => (
                  <div key={key} className="mb-3 text-center">
                    <div className="fw-bold" style={{ color: sector.color }}>
                      {value}
                    </div>
                    <small className="text-muted text-capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </small>
                  </div>
                ))}
              </Card.Body>
            </Card>
            <Button 
              variant="primary" 
              className="w-100"
              style={{ backgroundColor: sector.color, borderColor: sector.color }}
            >
              Join This Sector
            </Button>
            <Button 
              variant="outline-secondary" 
              className="w-100 mt-2"
              onClick={() => navigate('/sectors')}
            >
              Back to Sectors
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default SectorDetail; 