import Vehicles from './src/components/vehicles'
import { useNavigate } from 'react-router-dom'

function App() {

   const redirect = useNavigate()
    const handleClick = () => {
        redirect("/add_vehicle")
    }

    return(
        <>
            <div className='content'>
                <h1>Welcome, {`User`}. What vehicle would you like to work on today?</h1>
                <div>{<Vehicles/>}</div>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            
        </>
    )
}



export default App