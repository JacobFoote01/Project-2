import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../hooks/useUser";

function AddModifications() {

    const redirect = useNavigate()
    const user = useUser()
    const [modification, setModification] = useState({
        name:"",
        difficulty:"",
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
            const { name, difficulty } = modification

            if( !name.trim() || !difficulty.trim()) {
                alert('Please fill in all fields.')
                return
            }
            const newModification = {
                name: modification.name,
                difficulty: modification.difficulty,
            }

            const res = await axios.post('/server/addModification', newModification)
        } catch (error) {
            console.log('Error creating vehicle:', error)
        } return redirect('/')
    }

    return(
        <div>
            <form>
                <h3>Img Url :</h3> 
                <input type='text' name='name' id='name' onChange={handleClick}/>
                <h3>Year :</h3> 
                <input type='text' name='difficulty' id='difficulty' onChange={handleClick}/>
            </form> 
                <br/>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    )
}

export default AddModifications