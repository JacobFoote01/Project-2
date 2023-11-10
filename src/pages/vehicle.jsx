import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function VehicleList() {
    const [input, setInput] = useState()
    const redirect = useNavigate()
    const year = '1995'
    const make = 'subaru'
    const model = 'legacy'


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
                <button type="submit" onClick={Maintenance}>Maintenance</button>
                <button type="submit" onClick={Mods}>Modifications</button>
                <button type="submit" onClick={ToDo}>To Do</button>
            <div className="vehicle">            
                <p>{year}</p>
                <p>{make}</p>
                <p>{model}</p>
                <input type="text" placeholder="Year"  name="year" value={input.year} onChange={handleInputChange} />
                <input type="text" placeholder="Make"  name="make" value={input.make} onChange={handleInputChange} />
                <input type="text" placeholder="Model"  name="model" value={input.model} onChange={handleInputChange} />
                <button type="submit" onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default VehicleList