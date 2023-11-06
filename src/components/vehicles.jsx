import React from 'react';
import { Link }from 'react-router-dom';

export default function Vehicles() {

  // const deleteButton = () => {}
  // const saveButton = () => {} 
  // const addButton = () => {}
 
  return (
    <>
    <p className="vehicle 1">
        <Link to='/vehicle'>
          <img src="" 
          alt="Your car" 
          name="Your car url" 
          />
            <br/>
            <input type='text' name="Year" aria-label='Year'/>
            <br/>
            <input type='text' name="Make" aria-label='Make'/>
            <br/>
            <input type='text' name="Model" aria-label='Model'/>
            <br/>
        </Link>

            <button name='delete' onClick={handleClick}>Delete</button>
            <button name='save'>Save</button>
    </p>
    <p className="vehicle 2">
          <Link to='/vehicle'>
        <img src="" alt="Your other car" name="Your other car url"/>
            <br/>
            <input type='text' name="Year" aria-label='Year'/>
            <br/>
            <input type='text' name="Make" aria-label='Make'/>
            <br/>
            <input type='text' name="Model" aria-label='Model'/>
            <br/>
          </Link>

            <button name='delete'>Delete</button>
            <button name='save'>Save</button>
    </p>
    <p>
      <Link to='/add_vehicle'>
        <button name='Add'>Add</button>
      </Link>
    </p>
    </>
  );
}