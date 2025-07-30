import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import adminImg from '../assets/org1.jpg';
import eduImg from "../assets/org2.jpg";
import healthImg from "../assets/org3.jpg";

const departments = [
  { title: 'Administration', img: adminImg, desc: 'Handles the day-to-day operations and management of the Congress.' },
  { title: 'Education', img: eduImg, desc: 'Promotes workers education and social consciousness.' },
  { title: 'Health & Safety', img: healthImg, desc: 'Ensures a healthy and safe work environment for all employees.' },
  { title: 'Finance', img: adminImg, desc: 'Manages the financial affairs and budgeting of the Congress.' },
  { title: 'Industrial Relations', img: eduImg, desc: 'Strengthens collective bargaining and positive industrial relations.' },
  { title: 'Information', img: healthImg, desc: 'Oversees communication and information dissemination.' },
  { title: 'International Relations', img: adminImg, desc: 'Fosters relationships with international labor organizations.' },
  { title: 'Research', img: eduImg, desc: 'Conducts research to support policy and advocacy.' },
  { title: 'Women & Youth', img: healthImg, desc: 'Promotes gender equality and youth participation.' },
];

const Departments = () => (
  <Container className="py-5">
    <h2 className="mb-4">Departments & Committees</h2>
    <Row>
      {departments.map((dept, idx) => (
        <Col md={4} className="mb-4" key={dept.title}>
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={dept.img} style={{height: 180, objectFit: 'cover'}} />
            <Card.Body>
              <Card.Title>{dept.title}</Card.Title>
              <Card.Text>{dept.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Departments; 