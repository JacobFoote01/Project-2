import React from 'react';
import { useNavigate } from 'react-router-dom';

function Vehicles() {
  
  const redirect = useNavigate()
  
  const handleClick = () => {
    redirect("/vehicle")
  }
 
  return (
    <>
      <form className="vehicles" onClick={handleClick}>
        Img Url: {}
        <br/>
        Year : {}
        <br/>
        Make : {}
        <br/>
        Model : {}
      </form>
    </>
  );
}

export default Vehicles