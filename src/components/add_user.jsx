import { useState } from "react"

function AddUser() {

    const [user, setUser] = useState({
        email: "@",
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
        e.preventDefault()
        console.log(user)
    }

    return(
        <>
            <form onSubmit={handleSave}>
                <h3>Email:</h3><input type="text" onChange={handleClick}/>
                <h3>Password:</h3><input type="text" onChange={handleClick}/>
                <h3>Confirm Password:</h3><input type="text" onChange={handleClick}/>
            </form>
            <button className="save" onClick={handleClick}>Save</button>
        </>
    
    )
}

export default AddUser