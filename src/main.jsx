import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Logout from "./components/logout.jsx"
import ReactDOM from 'react-dom/client'
import Login from './components/login.jsx';
import App from '../App.jsx';
import Vehicles from './components/vehicles.jsx';
import NavBar from './components/navbar.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route
    path='/' 
    element={<NavBar/>}
    errorElement={<Error />}
  >
    <Route 
      index
      path='/login'
      element={<Login />} 
    />
    
    <Route 
      path='/app'
      element={<App />} 
    />

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
