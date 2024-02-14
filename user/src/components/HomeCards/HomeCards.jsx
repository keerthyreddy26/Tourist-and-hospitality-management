import React from "react";
import './HomeCard.css';
import lakh from './lakshdaweep.jpg';
import man from './manali.png';
import sri from './srinagar.jpg';
import char from './charminar.png';
import ram from './rameshwaram.png';
import delhi from './delhi.png';
import mumbai from './mumbai.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomeCards = () => {

  return (
    <div>
      <div className="App" style={{ margin: '0 10px' }}>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={lakh} style={{ height: 250, width:287  }} />
              <Card.Body>
                <Card.Title>Lakshadweep</Card.Title>
                <Card.Text>Lakshadweep is home to serene beaches.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={man} style={{ height: 250, width:287}} />
              <Card.Body>
                <Card.Title>Manali</Card.Title>
                <Card.Text>Beas, Manali will take your breath away with its snow-kissed peaks.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={sri} style={{ height: 250, width: 287}} />
              <Card.Body>
                <Card.Title>Srinagar</Card.Title>
                <Card.Text>A dreamy honeymoon awaits you at Srinagar.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={char} style={{ height: 250, width: 287 }} />
              <Card.Body>
                <Card.Title>Charminar</Card.Title>
                <Card.Text>Explore another beautiful destination.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={ram} style={{ height: 250, width: 287 }} />
              <Card.Body>
                <Card.Title>Rameshwaram</Card.Title>
                <Card.Text>Made famous by the epic Ramayana.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={delhi} style={{ height: 250, width: 287 }} />
              <Card.Body>
                <Card.Title>Delhi</Card.Title>
                <Card.Text>Delhi is a glorious blend of diverse cultures, languages and faiths.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className="h-100">
              <Card.Img variant="top" src={mumbai} style={{ height: 250, width: 287 }} />
              <Card.Body>
                <Card.Title>Mumbai</Card.Title>
                <Card.Text>Speckled with Victorian buildings, lofty skyscrapers, the glamour of Bollywood.</Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
};

export default HomeCards;
