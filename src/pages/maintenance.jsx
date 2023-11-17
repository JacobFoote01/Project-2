import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Maintenance = () => {
  const redirect = useNavigate();
  const [input, setInput] = useState();
  const [maintenance, setMaintenance] = useState({});
  const { vehicleId } = useParams();

  const getMaintenance = async () => {
    try {
      console.log({ vehicleId });
      const res = await axios.get("/server/maintenance" + vehicleId);
      setMaintenance(res.data);
    } catch (error) {
      console.log("Error fetching maintenance:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleAdd = () => {
    redirect("/add_maintenance");
  };

  useEffect(() => {
    getMaintenance();
  }, []);

  return (
    <>
      <div className="maintenance">
        <Container className="maintenances">
          <Row>
            <img
              style={{
                width: "20rem",
              }}
              src={maintenance?.img}
            />
          </Row>
          <Row>Name: {maintenance?.name}</Row>
          <Row>Difficulty: {maintenance?.difficulty}</Row>
          <button type="submit" onClick={handleAdd}>
            Add
          </button>
        </Container>
      </div>
    </>
  );
};

export default Maintenance;
