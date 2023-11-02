import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from "./components/navbar.jsx"
import Logout from "./components/logout.jsx"
import AddVehicle from "./components/add_vehicle.jsx"
import Vehicle from "./components/vehicle.jsx"
import Vehicles from "./components/vehicles.jsx"
import ReactDOM from 'react-dom/client'
import Login from './components/login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route
    path='/' 
    element={<NavBar />}
    errorElement={<Error />}
  >

    <Route 
      index 
      element={<Vehicles />} 
    />
      
    <Route 
      path='/login'
      element={<Login />} 
    />
     
    <Route 
      path="/vehicle" 
      element={<Vehicle />} 
    />

    <Route 
      path="/add_vehicle" 
      element={<AddVehicle />} 
    />

    <Route
      path="/logout"
      element={<Logout />}
    />

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
