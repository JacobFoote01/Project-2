import { Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/vehicles.css";

function Vehicles() {
  const redirect = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState({
    img: "",
    year: "",
    make: "",
    model: "",
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await axios.get("/server/vehicles");
        setVehicles(res.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };
    fetchVehicles();
  }, []);

  const handleClick = (vehicleId) => {
    redirect(`/vehicle/${vehicleId}`);
  };

  const handleEdit = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsEditing(true);
  };

  const handleDelete = async (vehicleId) => {
    try {
      const res = await axios.delete(`/server/vehicle/${vehicleId}`);
      if (res.data.success) {
        location.href = "/app";
      }
    } catch (error) {
      console.log("Error deleting vehicle:", error);
    }
  };

  const handleSave = async (vehicle) => {
    try {
      await axios.put(`/server/vehicle/${vehicle.vehicleId}`, vehicle);
      location.href = "/app";
    } catch (error) {
      console.log("Error Updating Vehicle:", error);
    }

    setIsEditing(false);
    setSelectedVehicle(null);
  };

  return (
    <>
      <Container className="vehicles">
        {vehicles.map((v) => (
          <Vehicle
            key={v.vehicleId}
            vehicle={v}
            isEditingVehicle={
              isEditing && v.vehicleId === selectedVehicle.vehicleId
            }
            onClick={() => handleClick(v.vehicleId)}
            onEdit={() => handleEdit(v)}
            onDelete={() => handleDelete(v.vehicleId)}
            onSave={(vehicle) => handleSave(vehicle)}
          />
        ))}
      </Container>
    </>
  );
}

function Vehicle({
  vehicle,
  isEditingVehicle,
  onClick,
  onDelete,
  onEdit,
  onSave,
}) {
  const [newVehicle, setNewVehicle] = useState(vehicle);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setNewVehicle(vehicle);
    setIsEditing(false);
  };

  return (
    <>
      <div
        className="vehicles"
        key={newVehicle.vehicleId}
        onClick={!isEditingVehicle && onClick}
      >
        <Row>
          {" "}
          {!isEditingVehicle && (
            <img
              style={{
                width: "20rem",
              }}
              src={vehicle?.img}
            />
          )}
          {isEditingVehicle && (
            <input
              className={
                isEditingVehicle ? "input--editing" : "input--not-editing"
              }
              name="img"
              value={newVehicle.img}
              onChange={handleChange}
            />
          )}
        </Row>
        <Row className="vehicles-info">
          <input
            className={
              isEditingVehicle ? "input--editing" : "input--not-editing"
            }
            name="year"
            value={newVehicle.year}
            onChange={handleChange}
          />
        </Row>
        <Row className="vehicles-info">
          <input
            className={
              isEditingVehicle ? "input--editing" : "input--not-editing"
            }
            name="make"
            value={newVehicle.make}
            onChange={handleChange}
          />
        </Row>
        <Row className="vehicles-info">
          <input
            className={
              isEditingVehicle ? "input--editing" : "input--not-editing"
            }
            name="model"
            value={newVehicle.model}
            onChange={handleChange}
          />
        </Row>
      </div>
      <button onClick={onDelete}>Delete</button>
      {!isEditingVehicle && <button onClick={onEdit}>Edit</button>}
      {isEditingVehicle && <button onClick={handleCancel}>Cancel</button>}
      {isEditingVehicle && (
        <button onClick={() => onSave(newVehicle)}>Save</button>
      )}
    </>
  );
}

export default Vehicles;
