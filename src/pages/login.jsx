import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login_form';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async (e, formData) => {
    e.preventDefault()
    const res = await axios.post('/server/auth', formData)
    if (res.data.success) {
      navigate('/app')
    } else {
      alert ('No user matches that Email or Password')
    }
  }
  
  return (
    <>
      <h1>Welcome to your Vehicle Log!</h1>
      <br/>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}