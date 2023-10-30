import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Vehicle Log</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end">
            {/* <Nav className="me-auto">
                <Navbar.Link href="#logout">Log Out</Navbar.Link>
            </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;