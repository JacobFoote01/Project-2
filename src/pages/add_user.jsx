import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddUser() {

    

    const redirect = useNavigate()

    const [user, setUser] = useState({
        email: "",
        username: "",
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
            e.preventDefault
            const { email, username, password, confirmPassword } = user

            if (!email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
                alert('Please fill in all fields.');
                return;
              }

            if(password !== confirmPassword) {
                alert('Password and confirm password must match')
                return
            }

            const newUser = {
                email: user.email,
                username: user.username,
                password: user.password,
            } 
        
            const res = await axios.post('/server/addUser', newUser)
            } catch (error) {
                console.log('Error creating user:', error)
        } return redirect("/")
    }

    return(
        <>
            <form>
                <h3>Email:</h3>
                <input name='email' id='email' type="text" onChange={handleClick} required/>
                <h3>Username:</h3>
                <input name='username' id='username' type="text" onChange={handleClick} required/>
                <h3>Password:</h3>
                <input name='password' id='password' type="text" onChange={handleClick} required/>
                <h3>Confirm Password:</h3>
                <input name='confirmPassword' id='confirmPassword' type="text" onChange={handleClick} required/>
            </form>
                <br/>
                <button className="save" onClick={handleSave}>Save</button>
            
        </>
    
    )
}

export default AddUser