import React from "react";
import { Card, Row, Col, Button, Badge } from "react-bootstrap";
const BookCards = ({ bookCategory, search }) => {
  return (
    <Row>
      {bookCategory
        .filter((book, i) => i < 8)
        .filter(
          (book) =>
            book.title.toLowerCase().indexOf(search) !== -1 ||
            book.category.toLowerCase().indexOf(search) !== -1
        )
        .map((book) => (
          <Col xs={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>

                <h3>
                  <Badge bg="sucess">{book.price}€</Badge>
                  <p>
                    <Button
                      variant="primary"
                      className="btn btn-outline-light bg-success border-none"
                    >
                      Add to Cart
                    </Button>
                  </p>
                </h3>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default BookCards;
