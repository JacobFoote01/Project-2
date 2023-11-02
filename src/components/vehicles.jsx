import React from 'react';
import AddVehicle from './add_vehicle';

function Vehicles() {
  return (
    <>
    <h2>Welcome, {`User`}. What vehicle would you like to work on today?</h2>
    <p className="box">
        <button>
          <img src="" alt="Your car" />
            <input type='text' value="Year"/>
            <input type='text' value="Make"/>
            <input type='text' value="Model"/>
        </button>
    </p>
    <br/>
    <p className="box">
          <button>
        <img src="" alt="Your other car" />
            <input type='text' value="Year"/>
            <input type='text' value="Make"/>
            <input type='text' value="Model"/>
          </button>
    </p>
    <p className="add">
      <button aria-label='Add'>Add</button>
      <button aria-label='Delete'>Delete</button>
    </p>
    </>
  );
}

export default Vehicles;
