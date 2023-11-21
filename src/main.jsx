import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./pages/login";
import App from "../App";
import AddVehicle from "./pages/add_vehicle";
import AddUser from "./pages/add_user";
import Vehicle from "./pages/vehicle";
import Maintenance from "./pages/maintenance";
import Mods from "./pages/modification";
import "./css/main.css";
import { Root } from "./pages/root";
import AddModifications from "./pages/add_modifications";
import AddMaintenance from "./pages/add_maintenance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Login />} />
      <Route path="/add_user" element={<AddUser />} />
      <Route path="/app" element={<App />} />
      <Route path="/add_vehicle" element={<AddVehicle />} />
      <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
      <Route path="/modification/:vehicleId" element={<Mods />} />
      <Route path="/maintenance/:vehicleId" element={<Maintenance />} />
      <Route path="/add_maintenance/:vehicleId" element={<AddMaintenance />} />
      <Route
        path="/add_modifications/:vehicleId"
        element={<AddModifications />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
