import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

function NetflixtvShows() {
  return (
    <Container>
      <Row className="justify-content-around py-3 p-md-0">
        <Col lg={10} className="text-start py-3 p-md-0">
          <Dropdown>
            <span className="fs-2 me-4 ">TV Shows</span>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="border-1 border-white rounded-0 bg-transparent text-white"
            >
              <small>Genres</small>
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-dark ">
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
        <Col
          lg={2}
          className=" d-flex  align-self-center justify-content-center justify-content-md-end"
        >
          <Row>
            <Col className="p-0">
              <Button className="btn-sm bg-dark border-1 border-secondary text-white-50 m-0">
                <i class="bi bi-list"></i>
              </Button>
            </Col>
            <Col className="p-0">
              <Button className="btn-sm bg-dark border-1 border-secondary text-white-50 m-0">
                <i class="bi bi-grid-fill"></i>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default NetflixtvShows;
