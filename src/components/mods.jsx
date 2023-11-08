import { useNavigate } from "react-router-dom"

const Mods = () => {

    const redirect = useNavigate()
    const handleMaintenance = () => {
        redirect("/maintenance")
    }

    const handleToDo = () => {
        redirect("/to_do")
    }

  return (
    <>
        <div>
            <button type="submit" onClick={handleMaintenance}>Maintenance</button>
            <button type="submit" onClick={handleToDo}>To Do</button>
        <br/>
            mods
        </div>
    </>
  )
}

export default Mods