import { NavLink, Outlet} from 'react-router-dom'
import Logout from './src/components/logout'
import NavBar from './src/components/navbar'

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
                </ul>
            </nav>
        </>
    )
}


export default App