import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar'


export const Root = () => {
  return (
    <>
        <NavBar/>
        <hr />
        <Outlet/>
    </>
  )
}
