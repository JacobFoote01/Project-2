import React, { useState } from "react"
import axios from "axios"

function AddUser() {

    const [user, setUser] = useState({
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const handleClick = (e) => {
        e.preventDefault()
        const {name, value} = e.target

        setUser((prev) => {
            return{...prev, [name]: value}
        })
    }

    const handleSave = async (e) => {
        try{
            const newUser = {
                email: user.email,
                username: user.userName,
                password: user.password,
            } 

            const res = await axios.post('/server/adduser', newUser)
            } catch (error) {
                console.log('Error creating user:', error)
        } 
    }


    return(
        <>
            <form onSubmit={handleSave}>
                <h3>Email:</h3>
                <input name='email' id='email' type="text" onChange={handleClick}/>
                <h3>Username:</h3>
                <input name='username' id='username' type="text" onChange={handleClick}/>
                <h3>Password:</h3>
                <input name='password' id='password' type="text" onChange={handleClick}/>
                <h3>Confirm Password:</h3>
                <input name='confirmPassword' id='confirmPassword' type="text" onChange={handleClick}/>
            </form>
            <br/>
            <button className="save" onClick={handleSave}>Save</button>
        </>
    
    )
}

export default AddUser