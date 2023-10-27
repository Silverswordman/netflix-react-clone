import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

function NetflixtvShows() {
  return (
    <Container>
      <Row className="justify-content-around ">
        <Col className="text-start">
          <Dropdown>
            <span className="fs-2 me-4 ">TV Shows</span>
            <Dropdown.Toggle
              variant="secondary"
              id="dropdown-basic"
              className="border-1 border-white rounded-0 bg-transparent text-white"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Adventure</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-end">Icone</Col>
      </Row>
    </Container>
  );
}
export default NetflixtvShows;
