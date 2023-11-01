import { Container, Navbar, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
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

export default NavBar;