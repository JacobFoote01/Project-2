import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Vehicles() {
  const [vehicles, setVehicles] = useState([])
  const [editedVehicle, setEditedVehicle] = useState({})
  const [vehicle, setVehicle] = useState({
    img:'',
    year:'',
    make:'',
    model:'',
  })

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

  // const fetchVehicleForEdit = async (vehicleId) => {
  //   try{
  //     const res = await axios.get(`/server/vehicle/${vehicleId}`)
  //     const fetchedVehicleData = res.data
  //     setEditedVehicle(fetchedVehicleData)
  //     setVehicle(fetchedVehicleData)
  //   } catch (error) {
  //     console.log('Error fetching vehicle for edit:', error)
   // }
 // }

  // const handleEdit = async () => {
  //   try{
  //     await axios.put(`/server/${editedVehicle.vehicleId}`, vehicle)
  //   } catch (error) {
  //     console.log('Error Updating Vehicle:', error)
  //   }
  //}

  // useEffect(() => {
  //   fetchVehicleForEdit(editedVehicle.vehicleId)
  // }, [editedVehicle.vehicleId])

  return (
    <>
      <Container className="vehicles" >
        {vehicles.map((vehicle) => (
          <div key={vehicle.vehicleId} onClick={() => handleClick(vehicle.vehicleId)}>
          <Row>Image</Row>
          <Row> {vehicle.year}</Row>
          <Row> {vehicle.make}</Row>
          <Row> {vehicle.model}</Row>
          <button onClick={() => handleDelete(vehicle.vehicleId)}>Delete</button>
          <button onClick={() => fetchVehicleForEdit(vehicle.vehicleId)}>Edit</button>
          </div>
        ))}
      </Container>
    </>
  );
}

{/* <form>
  <input 
  type='text' 
  placeholder='Image Url' 
  value={vehicle.img} 
  onChange={(e) => setVehicle({...vehicle, img: e.target.value})}
  />
  <input 
  type='text' 
  placeholder='Year' 
  value={vehicle.year} 
  onChange={(e) => setVehicle({...vehicle, year: e.target.value})}
  />
  <input 
  type='text' 
  placeholder='Make' 
  value={vehicle.make} 
  onChange={(e) => setVehicle({...vehicle, make: e.target.value})}
  />
  <input 
  type='text' 
  placeholder='Model' 
  value={vehicle.model} 
  onChange={(e) => setVehicle({...vehicle, model: e.target.value})}
  />
</form>
<button onClick={handleEdit}>Save Changes</button> */}
export default Vehicles