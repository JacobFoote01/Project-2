import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Logout from "./components/logout.jsx"
import ReactDOM from 'react-dom/client'
import Login from './components/login.jsx';
import App from '../App.jsx';
import NavBar from './components/navbar.jsx';
import AddVehicle from './components/add_vehicle.jsx';
import AddUser from './components/add_user.jsx';
import Vehicle from './components/vehicle.jsx';
import Maintenance from './components/maintenance.jsx';
import ToDo from './components/to_do.jsx';
import Mods from './components/mods.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path='/' element={<NavBar/>} errorElement={<Error />}>
  
    <Route index path='/app' element={<App />}/>
    
    <Route path='/login' element={<Login />}/>

    <Route path='/logout' element={<Logout />}/>

    <Route path='/add_vehicle' element={<AddVehicle />}/>

    <Route path='/add_user' element={<AddUser />}/>

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
