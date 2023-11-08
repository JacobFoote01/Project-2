import { useNavigate } from "react-router-dom"

const ToDo = () => {

    const redirect = useNavigate()
    const handleMaintenance = () => {
        redirect("/maintenance")
    }
    
    const handleMods = () => {
        redirect("/mods")
    }

  return (
    <>
        <div>
            <button type="submit" onClick={handleMaintenance}>Maintenance</button>
            <button type="submit" onClick={handleMods}>Modifications</button>
            <br/>
            To Do 
        </div>
    </>
  )
}

export default ToDo