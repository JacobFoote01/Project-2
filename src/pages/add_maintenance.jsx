import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../hooks/useUser";

const AddMaintenance = () => {
  const user = useUser();
  const { vehicleId } = useParams();
  const redirect = useNavigate();
  const [maintenance, setMaintenance] = useState({
    img: "",
    name: "",
    difficulty: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setMaintenance((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      const { name, difficulty } = maintenance;

      if (!name.trim() || !difficulty.trim()) {
        alert("Please fill in all fields.");
        return;
      }

      const newMaintenance = {
        img: maintenance.img,
        name: maintenance.name,
        difficulty: maintenance.difficulty,
        vehicleId: vehicleId,
      };
      const res = await axios.post("/server/addMaintenance", newMaintenance);
      redirect("/maintenance/" + vehicleId);
    } catch (error) {
      console.log("Error creating Maintenance:", error);
    }
    return redirect("/maintenance/" + vehicleId);
  };

  return (
    <>
      <form>
        <h3>Img Url :</h3>
        <input type="text" name="img" id="img" onChange={handleClick} />
        <h3>Name :</h3>
        <input type="text" name="name" id="name" onChange={handleClick} />
        <h3>Difficulty :</h3>
        <input
          type="text"
          name="difficulty"
          id="difficulty"
          onChange={handleClick}
        />
      </form>
      <br />
      <button className="save" onClick={handleSave}>
        Save
      </button>
    </>
  );
};
export default AddMaintenance;
