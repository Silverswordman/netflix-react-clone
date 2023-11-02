import { Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../Assets/logo.png";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";

function NetflixNav() {
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="p-1 mx-2 ">
        <Row className="text-start text-nowrap w-100 ">
          <Col lg={10} className="align-self-center ">
            <Row>
              <Col lg={1}>
                <Navbar.Brand>
                  <img src={logo} alt="logo" width={"100px"}></img>
                </Navbar.Brand>
              </Col>
              <Col>
                <Nav className="me-auto align-items-center flex-column flex-md-row">
                  <Link
                    className={`nav-link  
                  ${
                    location.pathname === "/Home"
                      ? "active fw-bold text-danger"
                      : ""
                  }`}
                    to="/Home"
                  >
                    <div>Home</div>
                  </Link>
                  <Link
                    className={`nav-link 
                  ${
                    location.pathname === "/tv-shows"
                      ? "active  fw-bold text-danger"
                      : ""
                  }`}
                    to="/tv-shows"
                  >
                    <div>Tv Shows</div>
                  </Link>
                </Nav>
              </Col>
            </Row>
          </Col>

          <Col className=" align-self-center ">
            <Row className="justify-content-end flex-row py-3 py-md-0">
              <Col xs={1} lg={1}>
                <i className="bi bi-search"></i>
              </Col>
              <Col xs={2} lg={2}>
                <span>KIDS</span>
              </Col>
              <Col xs={1} lg={1}>
                <i className="bi-bell-fill"></i>
              </Col>
              <Col xs={1} lg={1}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className="border-0  rounded-0 bg-transparent text-white p-0"
                  >
                    <i className="bi bi-person-fill"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="bg-dark dropdown-menu-end  ">
                    <Dropdown.Item href="#/action-1" className="text-secondary">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className="text-secondary">
                      Horror
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className="text-secondary">
                      Adventure
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default NetflixNav;
