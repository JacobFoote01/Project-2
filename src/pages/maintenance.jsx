import { useNavigate } from "react-router-dom"

const Maintenance = () => {
    const redirect = useNavigate()
    
    const handleMods = () => {
        redirect("/mods")
    }

    const handleToDo = () => {
        redirect("/to_do")
    }
    
  return (
    <>
        <div>
            <button type="submit" onClick={handleMods}>Modifications</button>
            <button type="submit" onClick={handleToDo}>To Do</button>
            <br/>
            Maintenance 
        </div>
    </>
  )
}

export default Maintenance