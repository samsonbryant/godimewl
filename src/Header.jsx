import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.jpg';
import { motion } from 'framer-motion';
import './Header.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About GODIMEWUL', to: '/about' },
  {
    label: 'Sectors',
    dropdown: [
      { label: 'Gold & Diamond', to: '/sectors/gold-diamond' },
      { label: 'Iron Ore Mining', to: '/sectors/iron-ore' },
      { label: 'Manufacturing', to: '/sectors/manufacturing' },
      { label: 'Energy & Communication', to: '/sectors/energy-communication' },
      { label: 'Gas & Oil', to: '/sectors/gas-oil' },
      { label: 'Industries', to: '/sectors/industries' },
      { label: 'Construction', to: '/sectors/construction' },
      { label: 'Formal & Informal', to: '/sectors/formal-informal' },
    ],
  },
  { label: 'Programs', to: '/programs' },
  { label: 'Members', to: '/members' },
  { label: 'Our Partners', to: '/partners' },
  { label: 'Media & Gallery', to: '/media' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const location = useLocation();
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, type: 'spring' }}>
      {/* Optional Top Bar */}
      {/* <div className="top-bar bg-success text-white py-1 small text-end pe-4">Call us: +234-9-627 6042 | Email: gsec@nlcng.org</div> */}
      <Navbar bg="white" expand="lg" className="main-navbar shadow-sm sticky-top px-2" style={{ minHeight: 80, borderBottom: '4px solid #C9A13B' }}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
            <img src={logo} alt="GODIMEWUL Logo" style={{ height: 56, width: 56, objectFit: 'contain', borderRadius: '50%', border: '3px solid #C9A13B', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
            <span className="fw-bold fs-3" style={{ color: '#C9A13B', letterSpacing: 1 }}>GODIMEWUL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mx-auto ms-lg-5 gap-2 align-items-center">
              {navLinks.map((link, idx) =>
                link.dropdown ? (
                  <NavDropdown
                    title={link.label}
                    id={`nav-dropdown-${idx}`}
                    key={link.label}
                    className="nav-link-custom"
                  >
                    {link.dropdown.map((item) => (
                      <NavDropdown.Item as={Link} to={item.to} key={item.to} active={location.pathname === item.to}>
                        {item.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    as={Link}
                    to={link.to}
                    key={link.to}
                    className={`nav-link-custom${location.pathname === link.to ? ' active' : ''}`}
                  >
                    {link.label}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
};

export default Header; 