import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNav from "./Components/NetflixNav";
import NetflixFooter from "./Components/NetflixFooter";
import Home from "./Components/Home";
import NetflixtvShows from "./Components/NetflixtvShows";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-100 ">
        <Container fluid className="bg-dark text-white h-100 flex-grow-1 ">
          <NetflixNav />
          <div className="flex-grow-1 ">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<NetflixtvShows />} path="/tv-shows" />
          </Routes>
          </div>
          <NetflixFooter />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
