import Vehicles from './src/components/vehicles'
import { useNavigate } from 'react-router-dom'

function App() {

   const redirect = useNavigate()
    const handleClick = () => {
        redirect("/add_vehicle")
    }

    return(
        <div className='App'>
            <div className='content'>
                <h1>Welcome, {`User`}. What vehicle would you like to work on today?</h1>
                <p>{<Vehicles/>}</p>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            
        </div>
    )
}



export default App