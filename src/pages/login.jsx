import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login_form";
import axios from "axios";
import { useSessionCheck } from "../hooks/useSessionCheck";

export default function Login() {
  const navigate = useNavigate();

  useSessionCheck();

  const handleLogin = async (e, formData) => {
    e.preventDefault();
    const res = await axios.post("/server/auth", formData);

    if (res.data.success) {
      navigate("/app");
    } else {
      alert("No user matches that Email or Password");
    }
  };

  return (
    <div className="login-page">
      <h1 color="blue" className="login">
        Vehicle Log
      </h1>
      <br />
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
