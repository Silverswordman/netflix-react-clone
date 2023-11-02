import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleFilmCard from "./Netflixsinglefilm";

class NetflixHome extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=b84f7858&s=${this.props.propId}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("response was not ok");
        }
      })
      .then((data) => {
        console.log(data, "dati films");
        this.setState({ films: data.Search });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { films } = this.state;
    return (
      <Container>
        <Row>
          {films.slice(0, 6).map((film) => (
            <Col key={film.imdbID} xs={6} md={4} lg={2} id="cardfilm">
              <SingleFilmCard movie={film} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default NetflixHome;
