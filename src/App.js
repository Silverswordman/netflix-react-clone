import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import NetflixRow from "./Components/NetflixRow";
import NetflixtvShows from "./NetflixtvShows";

function App() {
  return (
    <div className="App">
      <Container fluid className="bg-dark text-white ">
        <NetflixNav />
        <NetflixtvShows />
        <Container>
          <Row className="fs-3 my-2"> Lord of the Rings</Row>
        </Container>
        <NetflixRow propId={"lord+of+the+rings"} />
        <Container>
          <Row className="fs-3 my-2">Game of Thrones</Row>
        </Container>
        <NetflixRow propId={"Game+of+thrones"} />
        <Container>
          <Row className="fs-3 my-2">La tua scelta Disney</Row>
        </Container>
        <NetflixRow propId={"Disney"} />
        <NetflixFooter />
      </Container>
    </div>
  );
}

export default App;
