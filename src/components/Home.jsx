import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import fantasyBooks from "../data/fantasy.json";
import horrerBooks from "../data/horrer.json";
import romanceBooks from "../data/romance.json";
import historyBooks from "../data/horrer.json";
import scifiBooks from "../data/scifi.json";
import SearchForm from "./SearchForm";
import BookCards from "./BookCards";

class Home extends Component {
  state = {
    search: "",
  };
  changeState = (e) => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <Container>
        <SearchForm value={this.state.value} onChange={this.changeState} />
        <h2 className="my-3">Fantasy</h2>
        <BookCards bookCategory={fantasyBooks} search={this.state.search} />

        <h2 className="my-3">Horrer</h2>
        <BookCards bookCategory={historyBooks} search={this.state.search} />
        {/* <Row>
          {horrerBooks
            .filter((book, i) => i < 8)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>

                    <h3>
                      <Badge bg="sucess">{book.price}</Badge>
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row> */}
        <h2 className="my-3">Romance</h2>
        <BookCards bookCategory={romanceBooks} search={this.state.search} />
        {/*  <Row>
          {romanceBooks
            .filter((book, i) => i < 8)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>

                    <h3>
                      <Badge bg="sucess">{book.price}</Badge>
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row> */}
        <h2 className="my-3">History</h2>
        <BookCards bookCategory={historyBooks} search={this.state.search} />
        {/* <Row>
          {historyBooks
            .filter((book, i) => i < 8)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>

                    <h3>
                      <Badge bg="sucess">{book.price}</Badge>
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row> */}
        <h2 className="my-3">Scifi</h2>
        <BookCards bookCategory={scifiBooks} search={this.state.search} />
        {/* <Row>
          {scifiBooks
            .filter((book, i) => i < 8)
            .map((book) => (
              <Col xs={12} md={4} lg={3}>
                <Card>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>

                    <h3>
                      <Badge bg="sucess">{book.price}</Badge>
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row> */}
      </Container>
    );
  }
}
export default Home;
