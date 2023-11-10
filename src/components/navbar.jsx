import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  logOutHandler = (e) => {
    e.preventDefault()
    const navigate = useNavigate
    //Need to finish this. 
  } 

  return (
    <>
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="/app">Vehicle Log</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
                <Nav.Link href='/'>Login</Nav.Link>
                <br/>
                <Nav.Link onClick={logOutHandler}>Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}