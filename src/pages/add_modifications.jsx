import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useUser } from "../hooks/useUser";

function AddModifications() {
  const user = useUser();
  const { vehicleId } = useParams();
  const redirect = useNavigate();
  const [modification, setModification] = useState({
    img: "",
    name: "",
    difficulty: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setModification((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      const { name, difficulty } = modification;

      if (!name.trim() || !difficulty.trim()) {
        alert("Please fill in all fields.");
        return;
      }
      const newModification = {
        img: modification.img,
        name: modification.name,
        difficulty: modification.difficulty,
        vehicleId: vehicleId,
      };
      const res = await axios.post("/server/addModification", newModification);
      redirect("/modification/" + vehicleId);
    } catch (error) {
      console.log("Error creating Modification:", error);
    }
    return redirect("/modification/" + vehicleId);
  };

  return (
    <>
      <form className="add-mods">
        <input
          type="text"
          placeholder="Image URL"
          name="img"
          id="img"
          onChange={handleClick}
        />
        <br />
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleClick}
        />
        <br />
        <input
          type="text"
          placeholder="Difficulty 1-5"
          name="difficulty"
          id="difficulty"
          onChange={handleClick}
        />
        <br />
      </form>
      <br />
      <button className="save" onClick={handleSave}>
        Save
      </button>
    </>
  );
}
export default AddModifications;
