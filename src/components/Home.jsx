import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Col,  Row,Container } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import fantasyBooks from '../data/fantasy.json'
import horrerBooks from '../data/horrer.json'
import romanceBooks from '../data/romance.json'
import historyBooks from '../data/horrer.json'
import scifiBooks from '../data/scifi.json'

class Home extends Component{
    
    render(){
        return(
            <Container>
                <h2 className="my-3">Fantasy</h2>
                <Row>
                    
                    {
fantasyBooks.filter((book,i)=>i<8).map((book)=>(
<Col xs={12} md={4} lg={3}>
                         <Card >
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    
    <h3>
   <Badge bg="sucess">{book.price}€</Badge>
   <p>
       <Button  variant="primary" className="btn btn-outline-light bg-success border-none">Add to Cart</Button>
   </p>
   
  </h3>
  </Card.Body>
</Card>
</Col>
))}
      
                </Row>
                <h2 className="my-3">Horrer</h2>
                <Row >
                    
                    {
horrerBooks.filter((book,i)=>i<8).map((book)=>(
<Col xs={12} md={4} lg={3}>
                         <Card >
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
      
                </Row>
                <h2 className="my-3">Romance</h2>
                <Row>
                    
                    {
romanceBooks.filter((book,i)=>i<8).map((book)=>(
<Col xs={12} md={4} lg={3}>
                         <Card >
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
      
                </Row>
                <h2 className="my-3">History</h2>
                <Row>
                    
                    {
historyBooks.filter((book,i)=>i<8).map((book)=>(
<Col xs={12} md={4} lg={3}>
                         <Card >
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
      
                </Row>
                <h2 className="my-3">Scifi</h2>
                <Row>
                    
                    {
scifiBooks.filter((book,i)=>i<8).map((book)=>(
<Col xs={12} md={4} lg={3}>
                         <Card >
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
      
                </Row>
            </Container>
        )
    }
}
export default Home