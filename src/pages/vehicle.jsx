import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import axios from "axios"

function VehicleList() {
    const [input, setInput] = useState()
    const redirect = useNavigate()


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
                    <Row>Year:</Row>
                    <Row>Make:</Row>
                    <Row>Model:</Row>
                </Container>
            </div>
        </>
    )
}

export default VehicleList