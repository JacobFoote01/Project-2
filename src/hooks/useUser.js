import {useState, useEffect} from 'react';
import axios from 'axios';

export  function useUser() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await axios.get('/server/user');
    setUser(res.data.user);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return user;
}