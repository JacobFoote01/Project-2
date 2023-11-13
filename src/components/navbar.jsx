import { Container, Navbar, Nav } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function NavBar() {

  const navigate = useNavigate()

  const logOut = async () => {
    const res = await axios.get('/server/logout')
    if (res.data.success) {
      navigate('/logout')
    } else {
      console.log('error')
    }
  } 

  addEventListener("DOMContentLoaded", (e) => {sessionCheck})

  const sessionCheck = async () => {
    const res = await axios.get('/server/sessionCheck')
    if (res.data.success){
      Navigate('/app')
    } else {
      Navigate('/login')
    }
  }

  return (
    <>
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="/app" >Vehicle Log</Navbar.Brand>
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