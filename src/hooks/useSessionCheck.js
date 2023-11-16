import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"

export const useSessionCheck =  () => {
  const navigate = useNavigate()
  const location = useLocation()

  const getSession = async () => {
    
    const res = await axios.get('/server/sessionCheck')


    if(!res.data.success) {
      return navigate('/')
    }

    if(location.pathname === '/' && res.data.success) {
      return navigate('/app')
    }
  }

  useEffect(() => {
    getSession()
  }, [])
}