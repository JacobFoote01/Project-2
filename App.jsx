import Vehicles from "./src/pages/vehicles";
import { useNavigate } from "react-router-dom";
import { useSessionCheck } from "./src/hooks/useSessionCheck";
import { useUser } from "./src/hooks/useUser";

function App() {
  useSessionCheck();
  const redirect = useNavigate();
  const handleClick = () => {
    redirect("/add_vehicle");
  };

  const user = useUser();

  return (
    <>
      <div className="content">
        <h1>
          Welcome {user?.name}, What vehicle would you like to work on today?
        </h1>
        <div className="vehicles">{<Vehicles />}</div>
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;
