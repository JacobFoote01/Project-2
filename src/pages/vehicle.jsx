import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import axios from "axios"

function VehicleList() {
    const [input, setInput] = useState()
    const [vehicle, setVehicle] = useState({})
    const redirect = useNavigate()
    const {vehicleId} = useParams()

    const getVehicle = async () => {
        try{
            const res = await axios.get('/server/vehicle/' + vehicleId)
            setVehicle(res.data)
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // set the state of the input
        setInput({ ...input, [name]: value });
      }

    const Maintenance = () => {
        redirect("/maintenance")
    }
    const Mods = () => {
        redirect("/mods")
    }
    const ToDo = () => {
        redirect("/to_do")
    }

    useEffect(() => {
        getVehicle()
    }, [])

    return(
        <>
            <div className="Routing Buttons">
                <button type="submit" onClick={Maintenance}>Maintenance</button>
                <button type="submit" onClick={Mods}>Modifications</button>
                <button type="submit" onClick={ToDo}>To Do</button>
            </div>
            <div className="vehicle">            
                <Container className="vehicles">
                    <Row>Image</Row>
                    <Row>Year: {vehicle?.year}</Row>
                    <Row>Make: {vehicle?.make}</Row>
                    <Row>Model: {vehicle?.model}</Row>
                </Container>
            </div>
        </>
    )
}

export default VehicleList