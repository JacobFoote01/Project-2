import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import "../css/vehicle.css";

function VehicleList() {
  const [input, setInput] = useState();
  const [vehicle, setVehicle] = useState({});
  const redirect = useNavigate();
  const { vehicleId } = useParams();

  const getVehicle = async () => {
    try {
      const res = await axios.get("/server/vehicle/" + vehicleId);
      setVehicle(res.data);
    } catch (error) {
      console.log("Error fetching vehicle:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const Maintenance = () => {
    redirect("/maintenance/" + vehicleId);
  };
  const Mods = () => {
    redirect("/modification/" + vehicleId);
  };

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <>
      <h1 className="title">Vehicle Page</h1>
      <button
        className="maintenance-button"
        type="submit"
        onClick={Maintenance}
      >
        Maintenance
      </button>
      <button className="modification-button" type="submit" onClick={Mods}>
        Modifications
      </button>
      <div className="vehicle">
        <Container>
          <Row>
            <img
              style={{
                width: "40rem",
              }}
              src={vehicle?.img}
            />
          </Row>
          <h2>
            <Row className="vehicle-info">{vehicle?.year}</Row>
            <Row className="vehicle-info">{vehicle?.make}</Row>
            <Row className="vehicle-info">{vehicle?.model}</Row>
          </h2>
        </Container>
      </div>
    </>
  );
}

export default VehicleList;
