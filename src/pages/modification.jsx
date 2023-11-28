import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";
import "../css/modifications.css";

const Modification = () => {
  const { vehicleId } = useParams();
  useSessionCheck();
  const redirect = useNavigate();
  const [modification, setModification] = useState([]);

  const handleMaintenance = () => {
    redirect("/maintenance/" + vehicleId);
  };

  useEffect(() => {
    const fetchModification = async () => {
      try {
        const res = await axios.get("/server/modification/" + vehicleId);
        setModification(res.data);
      } catch (error) {
        console.log("Error fetching modification:", error);
      }
    };
    fetchModification();
  }, [vehicleId]);

  const handleAdd = () => {
    redirect("/add_modifications/" + vehicleId);
  };

  const handleDelete = async (modificationId) => {
    try {
      const res = await axios.delete(`/server/modification/${modificationId}`);
      if (res.data.success) {
        location.href = "/modification/" + vehicleId;
      }
    } catch (error) {
      console.log("Error deleting modification:", error);
    }
  };

  return (
    <>
      <h1 className="modification-title">Modification Page</h1>
      <div className="modification">
        <button type="submit" onClick={handleMaintenance}>
          Maintenance
        </button>
        {modification.map((modification) => (
          <Container
            className="modifications"
            key={modification.modificationId}
          >
            <Row>
              <img
                style={{
                  width: "20rem",
                }}
                src={modification.img}
              />
            </Row>
            <h3>
              <Row className="modification-info">Name: {modification.name}</Row>
              <Row className="modification-info">
                Difficulty: {modification.difficulty}
              </Row>
            </h3>
            <button
              type="submit"
              onClick={() => handleDelete(modification.modificationId)}
            >
              Delete
            </button>
          </Container>
        ))}
      </div>
      <button className="add-button" type="submit" onClick={handleAdd}>
        Add
      </button>
    </>
  );
};

export default Modification;
