import { useState } from 'react'

function AddVehicle() {

    const [vehicle, setVehicle] = useState({
        year: "",
        make: "",
        model: "",
    })

    const handleClick = (e) => {
        e.preventDefault
        const {name, value} = e.target
        
        setVehicle((prev) => {
            return{...prev, [name]: value}
        })
    }

    const handleSave = () => {
        e.preventDefault()
        console.log(vehicle)
    }

    return (
        <form onSubmit={handleSave}>
            <h3>Year :</h3> <input type='text' name='year' onChange={handleClick}/>
            <h3>Make :</h3> <input type='text' name='make' onChange={handleClick}/>
            <h3>Model :</h3> <input type='text' name='model' onChange={handleClick}/>
            <br/>
            <button className="save" onClick={handleClick}>Save</button>
        </form> 
    )
}

export default AddVehicle