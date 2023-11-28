import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
// import "../css/root.css";

export const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
