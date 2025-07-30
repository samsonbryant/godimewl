import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const policies = [
  'Job Protection',
  'Education',
  'Health & Safety at Work',
  'Gender Equality',
  'Industrial Relations',
  'Legislative Advocacy',
  'Climate Change Policy',
  'Rights of Migrant Workers',
];

const Policies = () => (
  <Container className="py-5">
    <h2 className="mb-4">Our Policies</h2>
    <ListGroup>
      {policies.map((policy, idx) => (
        <ListGroup.Item key={idx}>{policy}</ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
);

export default Policies; 