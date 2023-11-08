import React from 'react';
import { Link }from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Vehicles() {

  const redirect = useNavigate()

  const deleteButton = () => {
    console.log('delete button')
  }
 
  return (
    <>
    <p className="vehicle 1">
        <Link to='/vehicle'>
          <div>
              Year : {},
              Make : {},
              Model : {},
          </div>
        </Link>
          <button name='delete' onClick={deleteButton}>Delete</button>
    </p>
    <p className="vehicle 2">
          <Link to='/vehicle'>
            <div>
              Year : {},
              Make : {},
              Model : {},
            </div>
          </Link>
            <button name='delete' onClick={deleteButton}>Delete</button>
    </p>
    </>
  );
}