import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Modal, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaTimes, FaPlay, FaImage, FaVideo, FaDownload, FaShare, FaCalendar, FaTag } from 'react-icons/fa';
import './Gallery.css';

// Import images from assets
import newsImg1 from '../assets/cb1.jpg';
import newsImg2 from '../assets/cb2.jpg';
import newsImg3 from '../assets/cb3.jpg';
import eventImg from '../assets/bg2.jpg';
import eventImg2 from '../assets/bloodbg.jpg';
import eventImg3 from '../assets/odonate.jpg';
import aboutImg from '../assets/org1.jpg';
import logo from '../assets/logo.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');

  // Gallery data with categories and metadata
  const galleryData = [
    {
      id: 1,
      title: 'Leadership Training Session',
      category: 'news',
      type: 'image',
      date: '2025-01-15',
      description: 'Workers Leadership with the Secretary General for Gold and Diamond Mines and Energy workers Union of Liberia; Bargaining Agent for Bea Mountain Mining Corporation workers Macauley Gedeo, Jr.',
      tags: ['leadership', 'training', 'workers'],
      src: newsImg1,
      originalSrc: newsImg1,
      featured: true
    },
    {
      id: 2,
      title: 'CBA Signing Process',
      category: 'news',
      type: 'image',
      date: '2025-01-10',
      description: 'Bea Mountain mining corporation lawyer Cllr. Kunkun Teh Gold and Diamond miners and Energy workers Union of Liberia Secretary General Macauley Gedeo, Jr.',
      tags: ['CBA', 'legal', 'negotiation'],
      src: newsImg2,
      originalSrc: newsImg2,
      featured: true
    },
    {
      id: 3,
      title: 'CBA Exchange Ceremony',
      category: 'news',
      type: 'image',
      date: '2025-01-05',
      description: 'Exchange of CBA by the Secretary General Macauley Gedeo, Jr., GODIMEWUL with the Bea Mountain Mining Corporation Manager Emre Kuyu and Ministry of Labour Cooper Kraah.',
      tags: ['ceremony', 'exchange', 'management'],
      src: newsImg3,
      originalSrc: newsImg3,
      featured: false
    },
    {
      id: 4,
      title: 'Union Education Training',
      category: 'programs',
      type: 'image',
      date: '2024-12-20',
      description: 'Capacity development and union education for all GODIMEWUL members.',
      tags: ['education', 'training', 'capacity'],
      src: eventImg,
      originalSrc: eventImg,
      featured: true
    },
    {
      id: 5,
      title: 'Advocacy Workshop',
      category: 'programs',
      type: 'image',
      date: '2024-12-15',
      description: 'Workshop on lobbying for policies that defend workers\' rights and interests.',
      tags: ['advocacy', 'workshop', 'policy'],
      src: eventImg2,
      originalSrc: eventImg2,
      featured: false
    },
    {
      id: 6,
      title: 'Exchange Program Launch',
      category: 'programs',
      type: 'image',
      date: '2024-12-10',
      description: 'New exchange program for knowledge sharing with international partners.',
      tags: ['exchange', 'international', 'partnership'],
      src: eventImg3,
      originalSrc: eventImg3,
      featured: false
    },
    {
      id: 7,
      title: 'GODIMEWUL Team Meeting',
      category: 'about',
      type: 'image',
      date: '2024-11-25',
      description: 'Our dedicated leadership team working tirelessly to protect workers rights and improve working conditions across Liberia.',
      tags: ['team', 'meeting', 'leadership'],
      src: aboutImg,
      originalSrc: aboutImg,
      featured: false
    },
    {
      id: 8,
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
    {
      id: 9,
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
    { id: 'news', name: 'News & Updates', count: galleryData.filter(item => item.category === 'news').length },
    { id: 'programs', name: 'Programs & Events', count: galleryData.filter(item => item.category === 'programs').length },
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

export default Gallery; 