import VehicleList from './src/pages/vehicle'
import Vehicles from './src/pages/vehicles'
import { Navigate, useNavigate } from 'react-router-dom'
import { useSessionCheck } from './src/hooks/useSessionCheck'
import { useUser } from './src/hooks/useUser'
// import { useEffect } from 'react'
// import * as index from './src/api/index'

function App() {
    const redirect = useNavigate()
    const handleClick = () => {
        redirect("/add_vehicle")
    }

    useSessionCheck()

    // useEffect(() => {
    //     const fetchVehicles = async () => {
    //       const json = await axios.get('/server/getVehicle', data)
    //       setData(json)
    //     }
    
    //     fetchVehicles()
    //   }, [])

    return(
        <>
            <div className='content'>
                <h1>Welcome , What vehicle would you like to work on today?</h1>
                <div>{<Vehicles />}</div>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            
        </>
    )
}

export default App