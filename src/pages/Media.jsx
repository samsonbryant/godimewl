import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes, FaPlay, FaImage, FaVideo, FaDownload, FaShare, FaCalendar, FaTag } from 'react-icons/fa';
import './Gallery.css';

// Import images from assets
import newsImg1 from '../assets/cb1.jpg';
import newsImg2 from '../assets/cb2.jpg';
import newsImg3 from '../assets/cb3.jpg';
import eventImg from '../assets/WhatsApp Image 2025-07-11 at 04.46.09_3914af17.jpg';
import eventImg2 from "../assets/bloodbg.jpg";
import eventImg3 from '../assets/odonate.jpg';
import aboutImg from '../assets/org1.jpg';
import logo from '../assets/logo.jpg';
import heroBg from '../assets/header-bg.jpg';
import slideImg3 from '../assets/odonate.jpg';

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

// Import Programs and Events images
import unionEducationTraining1 from '../assets/Union-education-training-1.jpg';
import unionEducationTraining2 from '../assets/Union-Education-Training-2.jpg';
import advocacyWorkshop1 from '../assets/advocacy-and-policy-workshop-1.jpg';
import advocacyWorkshop2 from '../assets/advocacy-and-policy-workshop-2.jpg';
import advocacyWorkshop3 from '../assets/advocacy-and-policy-workshop-3.jpg';
import advocacyWorkshop4 from '../assets/advocacy-and-policy-workshop-4.jpg';

// Import leadership images
import localLeadershipTraining from '../assets/local_leadership_training.jpg';

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');

  // Gallery data with categories and metadata
  const galleryData = [
    // Home page carousel images
    {
      id: 1,
      title: 'Leadership Training',
      category: 'carousel',
      type: 'image',
      date: '2025-01-15',
      description: 'Workers Leadership with the Secretary General for Gold and Diamond Mines and Energy workers Union of Liberia; Bargaining Agent for Bea Mountain Mining Corporation workers Macauley Gedeo, Jr.',
      tags: ['leadership', 'training', 'carousel'],
      src: newsImg1,
      originalSrc: newsImg1,
      featured: true
    },
    {
      id: 2,
      title: 'CBA Signing Process',
      category: 'carousel',
      type: 'image',
      date: '2025-01-10',
      description: 'Bea Mountain mining corporation lawyer Cllr. Kunkun Teh Gold and Diamond miners and Energy workers Union of Liberia Secretary General Macauley Gedeo, Jr.',
      tags: ['CBA', 'legal', 'negotiation', 'carousel'],
      src: newsImg2,
      originalSrc: newsImg2,
      featured: true
    },
    {
      id: 3,
      title: 'CBA Exchange Process',
      category: 'carousel',
      type: 'image',
      date: '2025-01-05',
      description: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
      tags: ['ceremony', 'exchange', 'management', 'carousel'],
      src: newsImg3,
      originalSrc: newsImg3,
      featured: false
    },
    {
      id: 4,
      title: 'Union Education Training',
      category: 'carousel',
      type: 'image',
      date: '2024-12-20',
      description: 'Capacity development and union education for all GODIMEWUL members.',
      tags: ['education', 'training', 'capacity', 'carousel'],
      src: eventImg,
      originalSrc: eventImg,
      featured: true
    },
    // News section images
    {
      id: 5,
      title: 'BMMC Local Leadership Training',
      category: 'news',
      type: 'image',
      date: '2025-05-01',
      description: 'Local leadership training session for BMMC workers to enhance their organizational and leadership skills.',
      tags: ['leadership', 'training', 'BMMC', 'news'],
      src: bmmcLocalLeadership,
      originalSrc: bmmcLocalLeadership,
      featured: true
    },
    {
      id: 6,
      title: 'CBA Delegation with Mother Union Secretary General Macauley Gedeo, Jr.',
      category: 'news',
      type: 'image',
      date: '2025-05-02',
      description: 'Collective Bargaining Agreement delegation meeting with the Mother Union Secretary General Macauley Gedeo, Jr.',
      tags: ['CBA', 'delegation', 'secretary general', 'news'],
      src: cbaDelegation,
      originalSrc: cbaDelegation,
      featured: true
    },
    {
      id: 7,
      title: 'Secretary General and Bea Mountain Lawyer Kunkunyor Teh and Macauley Gedeo, Jr.',
      category: 'news',
      type: 'image',
      date: '2025-05-03',
      description: 'Meeting between the Secretary General and Bea Mountain lawyer Kunkunyor Teh with Macauley Gedeo, Jr.',
      tags: ['secretary general', 'lawyer', 'meeting', 'news'],
      src: secretaryGeneralLawyer,
      originalSrc: secretaryGeneralLawyer,
      featured: false
    },
    {
      id: 8,
      title: 'After CBA Signing Process',
      category: 'news',
      type: 'image',
      date: '2025-05-04',
      description: 'Post-CBA signing process documentation and celebration of successful agreement completion.',
      tags: ['CBA', 'signing', 'process', 'news'],
      src: afterCbaSigning,
      originalSrc: afterCbaSigning,
      featured: false
    },
    {
      id: 9,
      title: 'Minister of Labour - Liberia, Cllr. Cooper Krah',
      category: 'news',
      type: 'image',
      date: '2025-05-05',
      description: 'Official meeting with the Minister of Labour of Liberia, Cllr. Cooper Krah, to discuss workers\' rights and labor policies.',
      tags: ['minister', 'labour', 'Liberia', 'news'],
      src: ministerLabour,
      originalSrc: ministerLabour,
      featured: true
    },
    {
      id: 10,
      title: 'Past and Present Leadership Exchange',
      category: 'news',
      type: 'image',
      date: '2025-05-06',
      description: 'Knowledge exchange session between past and present leadership to ensure continuity and institutional memory.',
      tags: ['leadership', 'exchange', 'knowledge', 'news'],
      src: bmmcLocalLeadership,
      originalSrc: bmmcLocalLeadership,
      featured: false
    },
    {
      id: 11,
      title: 'CBA Sample Views with workers',
      category: 'news',
      type: 'image',
      date: '2025-05-07',
      description: 'Presentation and discussion of CBA sample views with workers to ensure transparency and understanding.',
      tags: ['CBA', 'workers', 'presentation', 'news'],
      src: cbaSampleViews,
      originalSrc: cbaSampleViews,
      featured: false
    },
    {
      id: 12,
      title: 'Leadership Elect meeting with Management',
      category: 'news',
      type: 'image',
      date: '2025-05-08',
      description: 'Meeting between newly elected leadership and management to establish working relationships and discuss future collaboration.',
      tags: ['leadership', 'management', 'meeting', 'news'],
      src: cbaDelegation,
      originalSrc: cbaDelegation,
      featured: false
    },
    {
      id: 13,
      title: 'Newly elected chairman BMMC/CMC, Chairman Paul Wah',
      category: 'news',
      type: 'image',
      date: '2025-05-09',
      description: 'Introduction and official recognition of the newly elected chairman for BMMC/CMC, Chairman Paul Wah.',
      tags: ['chairman', 'BMMC', 'CMC', 'election', 'news'],
      src: newlyElectedChairman,
      originalSrc: newlyElectedChairman,
      featured: false
    },
    {
      id: 14,
      title: 'Leadership Training (News)',
      category: 'news',
      type: 'image',
      date: '2025-05-10',
      description: 'Workers Leadership with the Secretary General for Gold and Diamond Mines and Energy workers Union of Liberia; Bargaining Agent for Bea Mountain Mining Corporation workers Macauley Gedeo, Jr.',
      tags: ['leadership', 'training', 'news'],
      src: localLeadershipTraining,
      originalSrc: localLeadershipTraining,
      featured: false
    },
    {
      id: 15,
      title: 'CBA Siting Process (News)',
      category: 'news',
      type: 'image',
      date: '2025-05-11',
      description: 'Bea Mountain mining corporation lawyer Cllr. Kunkun Teh Gold and Diamond miners and Energy workers Union of Liberia Secretary General Macauley Gedeo, Jr.',
      tags: ['CBA', 'legal', 'news'],
      src: newsImg2,
      originalSrc: newsImg2,
      featured: false
    },
    {
      id: 16,
      title: 'CBA Signing Process & Exchange (News)',
      category: 'news',
      type: 'image',
      date: '2025-05-12',
      description: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
      tags: ['exchange', 'news'],
      src: newsImg3,
      originalSrc: newsImg3,
      featured: false
    },
    {
      id: 25,
      title: 'Sinohydro Workers Local Leadership Training',
      category: 'news',
      type: 'image',
      date: '2025-06-01',
      description: 'Local leadership training session for Sinohydro workers to enhance their organizational and leadership skills.',
      tags: ['leadership', 'training', 'Sinohydro', 'workers', 'news'],
      src: sinohdroWorkersLeadership,
      originalSrc: sinohdroWorkersLeadership,
      featured: true
    },
    {
      id: 26,
      title: 'Sinohydro Workers Local Leadership Training (Additional View)',
      category: 'news',
      type: 'image',
      date: '2025-06-01',
      description: 'Additional view of the local leadership training session for Sinohydro workers.',
      tags: ['leadership', 'training', 'Sinohydro', 'workers', 'news'],
      src: sinohdroWorkersLeadership1,
      originalSrc: sinohdroWorkersLeadership1,
      featured: false
    },
    {
      id: 27,
      title: 'Certification of Leaders',
      category: 'news',
      type: 'image',
      date: '2025-06-02',
      description: 'Certification ceremony for leaders of the organization to recognize their achievements and qualifications.',
      tags: ['certification', 'leaders', 'ceremony', 'news'],
      src: certificationOfLeaders,
      originalSrc: certificationOfLeaders,
      featured: true
    },
    {
      id: 28,
      title: 'Certification of Leaders (View 2)',
      category: 'news',
      type: 'image',
      date: '2025-06-02',
      description: 'Additional view of the certification ceremony for organizational leaders.',
      tags: ['certification', 'leaders', 'ceremony', 'news'],
      src: certificationOfLeaders4,
      originalSrc: certificationOfLeaders4,
      featured: false
    },
    {
      id: 29,
      title: 'Certification of Leaders (View 3)',
      category: 'news',
      type: 'image',
      date: '2025-06-02',
      description: 'Another perspective of the certification ceremony for organizational leaders.',
      tags: ['certification', 'leaders', 'ceremony', 'news'],
      src: certificationOfLeaders5,
      originalSrc: certificationOfLeaders5,
      featured: false
    },
    {
      id: 30,
      title: 'Certification of Leaders (View 4)',
      category: 'news',
      type: 'image',
      date: '2025-06-02',
      description: 'Final view of the certification ceremony for organizational leaders.',
      tags: ['certification', 'leaders', 'ceremony', 'news'],
      src: certificationOfLeaders12,
      originalSrc: certificationOfLeaders12,
      featured: false
    },
    // Events section images
    {
      id: 31,
      title: 'Union Education Training (Event)',
      category: 'events',
      type: 'image',
      date: '2025-07-01',
      description: 'Capacity development and union education for all GODIMEWUL members.',
      tags: ['education', 'training', 'event'],
      src: unionEducationTraining1,
      originalSrc: unionEducationTraining1,
      featured: true
    },
    {
      id: 32,
      title: 'Union Education Training (Event) - Additional View',
      category: 'events',
      type: 'image',
      date: '2025-07-01',
      description: 'Additional view of the union education training session for GODIMEWUL members.',
      tags: ['education', 'training', 'event'],
      src: unionEducationTraining2,
      originalSrc: unionEducationTraining2,
      featured: false
    },
    {
      id: 33,
      title: 'Advocacy & Policy Workshop',
      category: 'events',
      type: 'image',
      date: '2025-08-01',
      description: 'Workshop on lobbying for policies that defend workers\' rights and interests.',
      tags: ['advocacy', 'workshop', 'policy', 'event'],
      src: advocacyWorkshop1,
      originalSrc: advocacyWorkshop1,
      featured: true
    },
    {
      id: 34,
      title: 'Advocacy & Policy Workshop - View 2',
      category: 'events',
      type: 'image',
      date: '2025-08-01',
      description: 'Additional view of the advocacy and policy workshop session.',
      tags: ['advocacy', 'workshop', 'policy', 'event'],
      src: advocacyWorkshop2,
      originalSrc: advocacyWorkshop2,
      featured: false
    },
    {
      id: 35,
      title: 'Advocacy & Policy Workshop - View 3',
      category: 'events',
      type: 'image',
      date: '2025-08-01',
      description: 'Another perspective of the advocacy and policy workshop session.',
      tags: ['advocacy', 'workshop', 'policy', 'event'],
      src: advocacyWorkshop3,
      originalSrc: advocacyWorkshop3,
      featured: false
    },
    {
      id: 36,
      title: 'Advocacy & Policy Workshop - View 4',
      category: 'events',
      type: 'image',
      date: '2025-08-01',
      description: 'Final view of the advocacy and policy workshop session.',
      tags: ['advocacy', 'workshop', 'policy', 'event'],
      src: advocacyWorkshop4,
      originalSrc: advocacyWorkshop4,
      featured: false
    },
    {
      id: 37,
      title: 'Exchange Program Launch',
      category: 'events',
      type: 'image',
      date: '2025-09-01',
      description: 'New exchange program for knowledge sharing with international partners.',
      tags: ['exchange', 'international', 'event'],
      src: eventImg3,
      originalSrc: eventImg3,
      featured: false
    },
    // Additional images from Home page assets
    {
      id: 38,
      title: 'About GODIMEWUL',
      category: 'about',
      type: 'image',
      date: '2024-11-25',
      description: 'Our dedicated leadership team working tirelessly to protect workers rights and improve working conditions across Liberia.',
      tags: ['team', 'about', 'leadership'],
      src: logo,
      originalSrc: logo,
      featured: false
    },
    {
      id: 39,
      title: 'GODIMEWUL Logo',
      category: 'branding',
      type: 'image',
      date: '2024-11-20',
      description: 'Official GODIMEWUL logo and branding materials.',
      tags: ['logo', 'branding', 'official'],
      src: logo,
      originalSrc: logo,
      featured: true
    },
    // Sample video content (unchanged)
    {
      id: 40,
      title: 'Sample Video Content',
      category: 'media',
      type: 'video',
      date: '2024-11-15',
      description: 'Sample video content for demonstration purposes. This would be replaced with actual video content.',
      tags: ['video', 'media', 'sample'],
      src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      originalSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media', count: galleryData.length },
    { id: 'carousel', name: 'Carousel Images', count: galleryData.filter(item => item.category === 'carousel').length },
    { id: 'news', name: 'News & Updates', count: galleryData.filter(item => item.category === 'news').length },
    { id: 'events', name: 'Events & Programs', count: galleryData.filter(item => item.category === 'events').length },
    { id: 'about', name: 'About Us', count: galleryData.filter(item => item.category === 'about').length },
    { id: 'branding', name: 'Branding', count: galleryData.filter(item => item.category === 'branding').length },
    { id: 'media', name: 'Videos', count: galleryData.filter(item => item.category === 'media').length }
  ];

  // Filter and sort gallery data
  const filteredData = galleryData
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'featured':
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMedia(null);
  };

  const handleDownload = (media) => {
    const link = document.createElement('a');
    link.href = media.originalSrc;
    link.download = `${media.title}.${media.type === 'video' ? 'mp4' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (media) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: media.title,
          text: media.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${media.title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="gallery-title">Media Gallery</h1>
            <p className="gallery-subtitle">
              Explore our collection of images, videos, and content showcasing GODIMEWUL's activities, 
              events, and achievements. All content is archived here for future reference.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filters and Search */}
      <section className="gallery-filters">
        <Container>
          <Row className="align-items-center g-3">
            <Col lg={4} md={6}>
              <div className="search-container">
                <FaSearch className="search-icon" />
                <Form.Control
                  type="text"
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
        </div>
      </Col>
            <Col lg={3} md={6}>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col lg={2} md={6}>
              <Form.Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="featured">Featured First</option>
              </Form.Select>
            </Col>
            <Col lg={3} md={6}>
              <div className="view-toggle">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="view-btn"
                >
                  <FaImage />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="view-btn"
                >
                  <FaVideo />
                </Button>
        </div>
      </Col>
    </Row>
  </Container>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-content">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`gallery-grid ${viewMode}`}
          >
            <AnimatePresence>
              {filteredData.map((media) => (
                <motion.div
                  key={media.id}
                  variants={itemVariants}
                  layout
                  className="gallery-item"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="media-card">
                    <div className="media-preview" onClick={() => handleMediaClick(media)}>
                      {media.type === 'video' ? (
                        <div className="video-preview">
                          <video src={media.src} muted />
                          <div className="play-overlay">
                            <FaPlay />
                          </div>
                        </div>
                      ) : (
                        <img src={media.src} alt={media.title} className="image-preview" />
                      )}
                      {media.featured && (
                        <Badge bg="warning" className="featured-badge">
                          Featured
                        </Badge>
                      )}
                      <div className="media-type-badge">
                        {media.type === 'video' ? <FaVideo /> : <FaImage />}
                      </div>
                    </div>
                    <div className="media-info">
                      <h5 className="media-title">{media.title}</h5>
                      <p className="media-description">{media.description}</p>
                      <div className="media-meta">
                        <span className="media-date">
                          <FaCalendar /> {new Date(media.date).toLocaleDateString()}
                        </span>
                        <span className="media-category">
                          <FaTag /> {categories.find(cat => cat.id === media.category)?.name}
                        </span>
                      </div>
                      <div className="media-tags">
                        {media.tags.map((tag, index) => (
                          <Badge key={index} bg="secondary" className="tag-badge">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="media-actions">
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => handleDownload(media)}
                          className="action-btn"
                        >
                          <FaDownload />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          onClick={() => handleShare(media)}
                          className="action-btn"
                        >
                          <FaShare />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredData.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="no-results"
            >
              <FaSearch className="no-results-icon" />
              <h4>No media found</h4>
              <p>Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </Container>
      </section>

      {/* Media Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="media-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedMedia?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMedia && (
            <div className="modal-content">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  className="modal-video"
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="modal-image"
                />
              )}
              <div className="modal-info">
                <p className="modal-description">{selectedMedia.description}</p>
                <div className="modal-meta">
                  <span>Date: {new Date(selectedMedia.date).toLocaleDateString()}</span>
                  <span>Category: {categories.find(cat => cat.id === selectedMedia.category)?.name}</span>
                </div>
                <div className="modal-tags">
                  {selectedMedia.tags.map((tag, index) => (
                    <Badge key={index} bg="secondary" className="tag-badge">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => selectedMedia && handleDownload(selectedMedia)}>
            <FaDownload /> Download
          </Button>
          <Button variant="outline-secondary" onClick={() => selectedMedia && handleShare(selectedMedia)}>
            <FaShare /> Share
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Media; 