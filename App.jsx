import VehicleList from './src/pages/vehicle'
import Vehicles from './src/pages/vehicles'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
// import * as index from './src/api/index'

function App() {

   const redirect = useNavigate()
    const handleClick = () => {
        redirect("/add_vehicle")
    }

    // useEffect(() => {
    //     const fetchVehicles = async () => {
    //       const json = await index.getVehicle();
    //       setData(json)
    //     }
    
    //     fetchVehicles()
    //   }, [])

    return(
        <>
            <div className='content'>
                <h1>Welcome, What vehicle would you like to work on today?</h1>
                <div>{<Vehicles />}</div>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            
        </>
    )
}

export default App