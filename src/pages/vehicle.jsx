import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

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
      <div className="Routing Buttons">
        <button type="submit" onClick={Maintenance}>
          Maintenance
        </button>
        <button type="submit" onClick={Mods}>
          Modifications
        </button>
      </div>
      <div className="vehicle">
        <Container className="vehicles">
          <Row>
            <img
              style={{
                width: "10rem",
              }}
              src={vehicle?.img}
            />
          </Row>
          <Row>{vehicle?.year}</Row>
          <Row>{vehicle?.make}</Row>
          <Row>{vehicle?.model}</Row>
        </Container>
      </div>
    </>
  );
}

export default VehicleList;
