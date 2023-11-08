import React from 'react';
import { Link }from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Vehicles() {

  const redirect = useNavigate()

  const handleClick = () => {
    redirect("/vehicle")
  }

  const deleteButton = () => {
    console.log('delete button')
  }
 
  return (
    <>
    <p className="vehicle 1">
        <div onClick={handleClick}>
              Year : {},
              Make : {},
              Model : {},
        </div>
        <button name='delete' onClick={deleteButton}>Delete</button>
    </p>
    <p className="vehicle 2">
            <div onClick={handleClick}>
              Year : {},
              Make : {},
              Model : {},
            </div>
            <button name='delete' onClick={deleteButton}>Delete</button>
    </p>
    </>
  );
}