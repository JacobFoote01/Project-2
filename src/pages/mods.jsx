import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";

const Mods = () => {
  const { vehicleId } = useParams();
  useSessionCheck();
  const redirect = useNavigate();
  const [Modification, setModification] = useState([]);

  const handleMaintenance = () => {
    redirect("/maintenance/:vehicleId");
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
    redirect("/add_modifications");
  };

  const handleDelete = async (modificationId) => {
    try {
      const res = await axios.delete(`/server/modification/${modificationId}`);
      if (res.data.success) {
        location.href = "/vehicle";
      }
    } catch (error) {
      console.log("Error deleting modification:", error);
    }
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleMaintenance}>
          Maintenance
        </button>
        {modification.map((modification) => (
          <Container className="modification" key={modification.modificationId}>
            <Row>
              <img
                style={{
                  width: "20rem",
                }}
                src={modification.img}
              />
            </Row>
            <Row>Name: {modification.name}</Row>
            <Row>Difficulty: {modification.difficulty}</Row>
            <button type="submit" onClick={handleDelete}>
              Delete
            </button>
          </Container>
        ))}
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Mods;
