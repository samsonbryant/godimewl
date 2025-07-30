import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const posts = [
  { title: 'WE ARE HEART-BROKEN BY MOKWA –NLC', date: 'June 6, 2025', excerpt: 'NLC expresses deep sorrow over the tragic events in Mokwa.' },
  { title: 'IMBIBE THE SPIRIT OF EID-EL-KABIR', date: 'June 5, 2025', excerpt: 'A message to all workers and Nigerians on the occasion of Eid-el-Kabir.' },
  { title: 'OUR HEARTS ARE WITH KANO STATE', date: 'June 5, 2025', excerpt: 'NLC commiserates with Kano State Government over tragic loss of athletes.' },
];

const Blog = () => (
  <Container className="py-5">
    <h2 className="mb-4">Latest News & Blog</h2>
    <Row>
      {posts.map((post, idx) => (
        <Col md={4} className="mb-4" key={idx}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
              <Card.Text>{post.excerpt}</Card.Text>
              <Button variant="success" size="sm">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Blog; 