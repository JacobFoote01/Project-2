import { useNavigate } from "react-router-dom"

function Vehicle() {

    const redirect = useNavigate()
    const handleMaintenance = () => {
        redirect("/maintenance")
    }
    
    const handleMods = () => {
        redirect("/mods")
    }

    const handleToDo = () => {
        redirect("/to_do")
    }

    return(
        <>
            <button type="submit" onClick={handleMaintenance}>Maintenance</button>
            <button type="submit" onClick={handleMods}>Modifications</button>
            <div>
              Img : 
              <br/>
              Year : {}
              <br/>
              Make : {}
              <br/>
              Model : {}
            </div>
            <button type="submit" onClick={handleToDo}>To Do</button>
        </>
    )
}

export default Vehicle