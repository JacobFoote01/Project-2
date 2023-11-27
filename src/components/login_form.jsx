import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ onLogin }) {
  const redirect = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const Add = () => {
    redirect("/add_user");
  };

  return (
    <form
      className="login"
      onSubmit={(e) => {
        onLogin(e, {
          email: emailValue,
          password: passwordValue,
        });
      }}
    >
      <input
        id="email"
        type="text"
        placeholder="Email"
        className="email"
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="password"
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <br />
      <div className="login-button">
        <button type="submit">Login</button>
      </div>
      <div className="register-button">
        <button onClick={Add}>Register</button>
      </div>
    </form>
  );
}
