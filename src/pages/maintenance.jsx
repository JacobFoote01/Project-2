import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";

const Maintenance = () => {
  const { vehicleId } = useParams();
  useSessionCheck();
  const redirect = useNavigate();
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    const fetchMaintenance = async () => {
      try {
        const res = await axios.get("/server/maintenance/" + vehicleId);
        setMaintenance(res.data);
      } catch (error) {
        console.log("Error fetching maintenance:", error);
      }
    };
    fetchMaintenance();
  }, [vehicleId]);

  const handleAdd = () => {
    redirect("/add_maintenance");
  };

  return (
    <>
      <div className="maintenance">
        {maintenance.map((maintenance) => (
          <Container className="maintenances" key={maintenance.maintenanceId}>
            <Row>
              <img
                style={{
                  width: "20rem",
                }}
                src={maintenance.img}
              />
            </Row>
            <Row>Name: {maintenance.name}</Row>
            <Row>Difficulty: {maintenance.difficulty}</Row>
          </Container>
        ))}
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Maintenance;
