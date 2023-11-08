import { useNavigate } from 'react-router-dom';
import LoginForm from './login_form';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async (e, formData) => {
    e.preventDefault()

    const res = await axios.post('/api/auth', formData)

    if (res.data.success) {
      navigate('/App')
    }
  }
  
  return (
    <>
      <h1>Welcome to your Vehicle Log!</h1>
      <h2>Log In</h2>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
