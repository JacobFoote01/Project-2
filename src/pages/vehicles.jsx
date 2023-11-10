import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Vehicles() {
  
  const redirect = useNavigate()
  
  const handleClick = () => {
    redirect("/vehicle")
  }
 
  return (
    <>
      <table className="vehicles" onClick={handleClick}>
        <Row>Image</Row>
        <Row>Year:</Row>
        <Row>Make:</Row>
        <Row>Model:</Row>
      </table>
    </>
  );
}

export default Vehicles