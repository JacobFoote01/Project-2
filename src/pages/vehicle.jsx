import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function VehicleList() {
    const [input, setInput] = useState()
    const redirect = useNavigate()


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // set the state of the input
        setInput({ ...input, [name]: value });
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
    const handleSave = () => {
        console.log('save')
    }

    return(
        <>
            <div className="Routing Buttons">
                <button type="submit" onClick={Maintenance}>Maintenance</button>
                <button type="submit" onClick={Mods}>Modifications</button>
                <button type="submit" onClick={ToDo}>To Do</button>
            </div>
            <div className="vehicle">            
                <input type="text" placeholder="Year"  name="year" onChange={handleInputChange} />
                <input type="text" placeholder="Make"  name="make" onChange={handleInputChange} />
                <input type="text" placeholder="Model"  name="model" onChange={handleInputChange} />
                <button type="submit" onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default VehicleList