import { useState } from "react"

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

    const handleSave = () => {
        console.log("save button")
    }

    return(
        <>
            <form onSubmit={handleSave}>
                <h3>Email:</h3>
                <input type="text" onChange={handleClick}/>
                <h3>Username:</h3>
                <input type="text" onChange={handleClick}/>
                <h3>Password:</h3>
                <input type="text" onChange={handleClick}/>
                <h3>Confirm Password:</h3>
                <input type="text" onChange={handleClick}/>
            </form>
            <br/>
            <button className="save" onClick={handleSave}>Save</button>
        </>
    
    )
}

export default AddUser