import { useNavigate } from 'react-router-dom';
import LoginForm from './login_form';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async (e, formData) => {
    e.preventDefault()

    const res = await axios.post('/api/auth', formData)

    if (res.data.success) {
      navigate('/me')
    }
  }
  
  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
