import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
 
  const goHome = () => {
    
  }

  const Add = () => { 
    console.log('add user')
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
        <button type="submit" onClick={goHome}>Log In</button>
        <button type="register" onClick={Add}>Register here</button>
    </form>
  );
}