import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ onLogin }) {
  const redirect = useNavigate()
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
 
  const Add = () => { 
    redirect("/add_user")
  }

  return (
    <form
      onSubmit={(e) => {
        onLogin(e, {
          email : emailValue,
          password : passwordValue,
        });
      }}
    >
      <label htmlFor="email">Email :</label>
      <input
        name="email"
        id="email"
        type="text"
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <br/>
      <label htmlFor="password">Password :</label>
      <input
        name="password"
        id="password"
        type="password"
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <br/>
        <button type="submit">Log In</button>
        <button onClick={Add}>Register here</button>
    </form>
  );
}