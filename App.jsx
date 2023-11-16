import Vehicles from './src/pages/vehicles'
import { useNavigate } from 'react-router-dom'
import { useSessionCheck } from './src/hooks/useSessionCheck'
import { useState } from 'react'
import { useUser } from './src/hooks/useUser'

function App() {
    useSessionCheck()
    const redirect = useNavigate()
    const handleClick = () => {
        redirect("/add_vehicle")
    }
    
    const user = useUser()
    const handleUser = () => {
        if(user){
            return(`${user.name}`)
        }else{
            return("")
        }
    }

    return(
        <>
            <div className='content' onLoad={handleUser}>
                <h1>Welcome, What vehicle would you like to work on today?</h1>
                <div>{<Vehicles />}</div>
                <button type="submit" onClick={handleClick}>Add</button>
            </div>
            
        </>
    )
}

export default App