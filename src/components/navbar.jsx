import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "../css/navbar";

export default function NavBar() {
  const navigate = useNavigate();

  const logOut = async () => {
    const res = await axios.get("/server/logout");
    if (res.data.success) {
      navigate("/");
    } else {
      alert("You must be logged in to Log Out");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/" className="home-navbar">
            Vehicle Log
          </Navbar.Brand>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link href="/" className="login-page-navbar">
                Login
              </Nav.Link>
              <Nav.Link className="logout-navbar" onClick={logOut}>
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
