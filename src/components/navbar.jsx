import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/navbar.css";

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
          <Navbar.Brand href="/">
            <img
              src="https://ih1.redbubble.net/image.3809659565.1390/raf,360x360,075,t,fafafa:ca443f4786.jpg"
              width="80"
              height="60"
              className="d-inline-block align-top"
              alt=""
            />
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
