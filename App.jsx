import AddVehicle from './src/components/add_vehicle'
import NavBar from './src/components/navbar'
import Vehicles from './src/components/vehicles'

function App() {
    return(
        <div className='App'>
            <NavBar />
            <div className='content'>
                <h1>Welcome, {`User`}. What vehicle would you like to work on today?</h1>
                <p>{Vehicles}</p>
                <button to='/add_vehicle' >Add</button>
            </div>
            
        </div>
    )
}


export default App