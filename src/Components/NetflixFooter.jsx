import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function NetflixFooter() {
  return (
    <Card className="bg-dark text-center text-white b-none p-0 py-5 border-0">
      <Container className="w-75">
        <Row className="text-start ps-5 text-white-50 w-50 ">
          <Col xs={1}>
            <i class="bi bi-facebook"></i>
          </Col>
          <Col xs={1}>
            <i class="bi bi-instagram"></i>
          </Col>
          <Col xs={1}>
            <i class="bi bi-twitter"></i>
          </Col>
          <Col xs={1} className="flex-grow-1">
            <i class="bi bi-youtube"></i>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center p-5">
        <Col lg={2} className="bg-dark">
          <ListGroup>
            <ListGroup.Item className="bg-dark  border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Audio and Subtitles
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Media Center
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Privacy
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Contact Us
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} className="bg-dark">
          <ListGroup>
            <ListGroup.Item className="bg-dark  border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Audio Description
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Investor Relations
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Legal Notices
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} className="bg-dark">
          <ListGroup>
            <ListGroup.Item className="bg-dark  border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Help Center
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Jobs
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Cookie Preferences
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={2} className="bg-dark">
          <ListGroup>
            <ListGroup.Item className="bg-dark  border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Gift Cards
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Terms of Use
              </Button>
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white-50 border-0 p-1 text-start">
              <Button
                href="#"
                className="btn-sm bg-transparent border-0 p-0 text-white-50"
              >
                Corporate Information
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Container className="w-75">
        <Row className="flex-column ps-lg-5">
          <Col className="text-start ps-lg-5">
            <Button className="bg-dark border-1 border-secondary text-white-50 btn-sm">
              Service Code
            </Button>
          </Col>
          <Col className="text-start ps-lg-5">
            <p class="text-white-50 my-1">
              <small> © 1997-2017 Netflix,inc </small>
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default NetflixFooter;
