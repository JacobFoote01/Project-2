import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../hooks/useUser'

function AddVehicle() {
 
    const redirect = useNavigate()
    const user = useUser()
    const [vehicle, setVehicle] = useState({
        img: "",
        year: "",
        make: "",
        model: "",
    })
    
    const handleClick = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        
        setVehicle((prev) => {
            return{...prev, [name]: value}
        })
    }

    const handleSave = async (e) => {
        try{
            e.preventDefault
            const { year, make, model } = vehicle

            if(!year.trim() || !make.trim() || !model.trim()) {
                alert('Please fill in all fields.')
                return
            }
            const newVehicle = {
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                userId: user.userId,
            }

            const res = await axios.post('/server/addVehicle', newVehicle)
        } catch (error) {
            console.log('Error creating vehicle:', error)
        } return redirect('/')
    }

    return (
        <>
            <form>
                <h3>Img Url :</h3> 
                <input type='text' name='image' id='image' onChange={handleClick}/>
                <h3>Year :</h3> 
                <input type='text' name='year' id='year' onChange={handleClick}/>
                <h3>Make :</h3> 
                <input type='text' name='make' id='make' onChange={handleClick}/>
                <h3>Model :</h3> 
                <input type='text' name='model' id='model' onChange={handleClick}/>
            </form> 
                <br/>
            <button className="save" onClick={handleSave}>Save</button>
        </>
    )
}

export default AddVehicle