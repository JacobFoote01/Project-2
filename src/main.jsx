import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Login from './pages/login.jsx';
import App from '../App.jsx';
import AddVehicle from './pages/add_vehicle.jsx';
import AddUser from './pages/add_user.jsx';
import Vehicle from './pages/vehicle.jsx';
import Maintenance from './pages/maintenance.jsx';
import ToDo from './pages/to_do.jsx'
import Mods from './pages/mods.jsx';
import './css/main.css'
import { Root } from './pages/root.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path='/' element={<Root />} errorElement={<Error />}>
    <Route index element={<Login />}/>
    <Route path='/add_user' element={<AddUser />}/>
    <Route path='/app' element={<App />}/>
    <Route path='/add_vehicle' element={<AddVehicle />}/>
    <Route path='/vehicle/:vehicleId' element={<Vehicle />}/>
    <Route path='/mods' element={<Mods />}/>
    <Route path='/maintenance' element={<Maintenance />}/>
    <Route path='/to_do' element={<ToDo />}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
