import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as api from '../api/index'

function Vehicle({vehicle, setData}) {
    const { year, make, model } = vehicle
    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState(vehicle)
    const redirect = useNavigate()

    const removeVehicle = async () => {
        const newData = await api.removeVehicle(vehicle.id)
        setData(newData)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // set the state of the input
        setInput({ ...input, [name]: value });
      }

    const editVehicle = () => {
        setIsEditing(true);
      }

    const saveVehicle = async () => {
        const newData = await api.updateVehicle({
          ...vehicle,
          year: input.year,
          make: input.make,
          model: input.model,
        })
    
        setData(newData)
        setIsEditing(false)
      }

      const cancelEdit = () => {
        setInput(vehicle)
        setIsEditing(false)
      }
    

    const Maintenance = () => {
        redirect("/maintenance")
    }
    
    const Mods = () => {
        redirect("/mods")
    }

    const ToDo = () => {
        redirect("/to_do")
    }

    return(
        <div className="vehicle">            
            {!isEditing && <p>{year}</p>}
            {!isEditing && <p>{make}</p>}
            {!isEditing && <p>{model}</p>}
            {isEditing && <input type="text" placeholder="Year"  name="year" value={input.year} onChange={handleInputChange} />}
            {isEditing && <input type="text" placeholder="Make"  name="make" value={input.make} onChange={handleInputChange} />}
            {isEditing && <input type="text" placeholder="Model"  name="model" value={input.model} onChange={handleInputChange} />}
            {!isEditing &&<button onClick={editVehicle}>Edit</button>}
            {!isEditing && <button onClick={removeVehicle}>Remove</button>}
            {isEditing && <button onClick={saveVehicle}>Save</button>}
            {isEditing && <button onClick={cancelEdit}>Cancel</button>}
            <button type="submit" onClick={Maintenance}>Maintenance</button>
            <button type="submit" onClick={Mods}>Modifications</button>
            <button type="submit" onClick={ToDo}>To Do</button>
        </div>
    )
}

export default Vehicle