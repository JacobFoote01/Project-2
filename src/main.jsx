import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Logout from "./components/logout.jsx"
import ReactDOM from 'react-dom/client'
import Login from './components/login.jsx';
import App from '../App.jsx';
import NavBar from './components/navbar.jsx';
import Vehicles from './components/vehicles.jsx';
import AddVehicle from './components/add_vehicle.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path='/' element={<NavBar/>} errorElement={<Error />}>
    <Route 
      index
      path='/app'
      element={<App />} 
    />
    
    <Route 
      path='/login'
      element={<Login />} 
    />

    <Route 
      path='/logout'
      element={<Logout />} 
    />

    <Route 
      path='/add_vehicle'
      element={<AddVehicle/>}
    />

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
