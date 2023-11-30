import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";
import "../css/maintenance.css";

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
    redirect("/add_maintenance/" + vehicleId);
  };

  const handleDelete = async (maintenanceId) => {
    try {
      const res = await axios.delete(`/server/maintenance/${maintenanceId}`);
      if (res.data.success) {
        location.href = "/maintenance/" + vehicleId;
      }
    } catch (error) {
      console.log("Error deleting maintenance:", error);
    }
  };

  const handleModification = () => {
    redirect("/modification/" + vehicleId);
  };

  return (
    <>
      <h1 className="maintenance-title">Maintenance</h1>
      <div className="maintenance">
        <button
          className="mods-button"
          type="submit"
          onClick={handleModification}
        >
          Modifications
        </button>
        <button className="add-button" type="submit" onClick={handleAdd}>
          Add
        </button>
        <Container className="maint-container" fluid>
          {maintenance.map((maintenance) => (
            <Col className="maintenances" key={maintenance.maintenanceId}>
              <Container fluid className="one-maint-cont">
                <Row>
                  <img
                    style={{
                      width: "20rem",
                    }}
                    src={maintenance.img}
                  />
                </Row>
                <h3>
                  <Row className="maintenance-info">{maintenance.name}</Row>
                  <Row className="maintenance-info">
                    Difficulty: {maintenance.difficulty}
                  </Row>
                </h3>
                <button
                  type="submit"
                  className="maintenance-delete"
                  onClick={() => handleDelete(maintenance.maintenanceId)}
                >
                  Delete
                </button>
              </Container>
            </Col>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Maintenance;
