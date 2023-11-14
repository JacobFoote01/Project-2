import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Vehicles() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try{
        const res = await axios.get('/server/vehicles')
        setVehicles(res.json)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchVehicles()
  }, [])
  // const redirect = useNavigate()
  
  // const handleClick = () => {
  //   redirect("/vehicle")
  // }
  
  return (
    <>
      <Container className="vehicles" onLoad={setVehicles}>
        <Row>Image</Row>
        <Row>Year: </Row>
        <Row>Make:</Row>
        <Row>Model:</Row>
      </Container>
    </>
  );
}

export default Vehicles