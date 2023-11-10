import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Vehicles() {
  
  const redirect = useNavigate()
  
  const handleClick = () => {
    redirect("/vehicle")
  }
 
  return (
    <>
      <Container className="vehicles" onClick={handleClick}>
        <Row>Image</Row>
        <Row>Year:</Row>
        <Row>Make:</Row>
        <Row>Model:</Row>
      </Container>
    </>
  );
}

export default Vehicles