import { useNavigate, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";

const Mods = () => {
  useSessionCheck();
  const redirect = useNavigate();
  const [Modifications, setModifications] = useState([]);

  useEffect(() => {});
  const handleMaintenance = () => {
    // finish this part of the function
  };

  const handleToDo = () => {
    redirect("/to_do");
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleMaintenance}>
          Maintenance
        </button>
        <button type="submit" onClick={handleToDo}>
          To Do
        </button>
        <br />
        mods
      </div>
    </>
  );
};

export default Mods;
