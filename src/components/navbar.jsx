import { Container, Navbar, Nav } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


export default function NavBar() {

  const navigate = useNavigate()

  const logOut = async () => {
    const res = await axios.get('/server/logout')
    if (res.data.success) {
      navigate('/')
    } else {
      alert('You must be logged in to Log Out')
    }
  } 
  
  const sessionCheck = async () => {
    const res = await axios.get('/server/sessionCheck')
    console.log(res.data)
    if (res.data.success){
      navigate('/app')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    sessionCheck()
  }, [])

  return (
    <>
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="/app" onClick={sessionCheck} >Vehicle Log</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
                <Nav.Link href='/'>Login</Nav.Link>
                <br/>
                <Nav.Link onClick={logOut}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}