import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Vehicles() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const fetchVehicles = async () => {
      try{
        const res = await axios.get('/server/vehicles')
        setVehicles(res.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchVehicles()
  }, [])
  const redirect = useNavigate()
  
  const handleClick = (vehicleId) => {
    redirect(`/vehicle/${vehicleId}`)
  }
  
  const handleDelete = async (vehicleId) => {
    try{
      const res = await axios.delete(`/server/${vehicleId}`)
      if(res.data.success){
        redirect('/app')
      }
    } catch (error) {
      console.log('Error deleting vehicle:', error)
    }
  }

  return (
    <>
      <Container className="vehicles" >
        {vehicles.map((vehicle) => (
          <div key={vehicle.vehicleId} onClick={() => handleClick(vehicle.vehicleId)}>
          <Row>Image</Row>
          <Row> {vehicle.year}</Row>
          <Row> {vehicle.make}</Row>
          <Row> {vehicle.model}</Row>
          <button type='submit' onClick={() => handleDelete(vehicle.vehicleId)}>Delete</button>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Vehicles