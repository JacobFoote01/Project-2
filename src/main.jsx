import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Logout from "./components/logout.jsx"
import ReactDOM from 'react-dom/client'
import Login from './pages/login.jsx';
import App from '../App.jsx';
import NavBar from './components/navbar.jsx';
import AddVehicle from './pages/add_vehicle.jsx';
import AddUser from './pages/add_user.jsx';
import Vehicle from './pages/vehicle.jsx';
import Maintenance from './pages/maintenance.jsx';
import ToDo from './pages/to_do.jsx'
import Mods from './pages/mods.jsx';
import './css/main.css'

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path='/' element={<Login />} errorElement={<Error />}>
    <Route index path='/navbar' element={<NavBar />}/>
    <Route path='/add_user' element={<AddUser />}/>
    <Route path='/app' element={<App />}/>
    <Route path='/logout' element={<Logout />}/>
    <Route path='/add_vehicle' element={<AddVehicle />}/>
    <Route path='/vehicle' element={<Vehicle />}/>
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
