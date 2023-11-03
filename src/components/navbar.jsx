import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function NavBar() {

  return (
    <>
    <Navbar expand='lg'>
      <Container>
        <Navbar.Brand href="/">Vehicle Log</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
                <Nav.Link href="/logout">Log Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}