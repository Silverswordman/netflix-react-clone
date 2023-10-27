import { Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../Assets/logo.png";
import Col from "react-bootstrap/Col";

function NetflixNav() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="p-1 mx-2">
        <Row className="text-start text-nowrap w-100">
          <Col lg={10} className="align-self-center ">
            <Row>
              <Col lg={1}>
                <Navbar.Brand href="#home">
                  <img src={logo} alt="logo" width={"80px"}></img>
                </Navbar.Brand>
              </Col>
              <Col>
                <Nav className="me-auto align-items-center ">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features" active>
                    TV Shows
                  </Nav.Link>
                  <Nav.Link href="#pricing">Movies</Nav.Link>
                  <Nav.Link href="#pricing">Recently Added</Nav.Link>
                  <Nav.Link href="#pricing">My List</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>

          <Col lg={1} className="text-end align-self-center ">
            Profile
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default NetflixNav;
