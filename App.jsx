import { NavLink, Outlet} from 'react-router-dom'
import Logout from './src/components/logout'
import NavBar from './src/components/navbar'
import Login from './src/components/login'
import AddVehicle from './src/components/add_vehicle'

function App() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/navbar">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">Log out </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add_vehicle">Add</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default App