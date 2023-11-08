import React from 'react';
import { useNavigate } from 'react-router-dom';

function Vehicles() {
  
  const redirect = useNavigate()
  
  const handleClick = () => {
    redirect("/vehicle")
  }
  
  const deleteButton = () => {
    console.log('delete button')
  }
 
  return (
    <>
      <form className="vehicle" onClick={handleClick}>
        Img Url: {}
        <br/>
        Year : {}
        <br/>
        Make : {}
        <br/>
        Model : {}
      </form>
      <button name='delete' onClick={deleteButton}>Delete</button>
    </>
  );
}

export default Vehicles