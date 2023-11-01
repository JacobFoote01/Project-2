import {useState, useEffect, React} from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from "./components/navbar.jsx"
import Logout from "./components/logout.jsx"
import AddVehicle from "./components/add_vehicle.jsx"
import Vehicle from "./components/vehicle.jsx"
import Vehicles from "./components/vehicles.jsx"

 
// const sequelize = require('./config') 

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.')
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database:')
//   })
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route
    path='/' 
    element={<NavBar/>}
  >
      
    <Route 
      index 
      element={<Vehicles/>} 
    />
    
    <Route 
      path="/logout" 
      element={<Logout/>} 
    />
    
    <Route 
      path="/vehicle" 
      element={<Vehicle/>} 
    />

    <Route 
      path="/add_vehicle" 
      element={<AddVehicle/>} 
    />

    <Route
      path="/logout"
      element={<Logout/>}
    />

  </Route>
))

function App() {
  return <RouterProvider router={router} /> 
}

export default App