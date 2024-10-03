import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Works() {
  return (
    <section className="works">
      <div className="container bg-dark text-light py-5 mt-5"> 
        <h2 className="text-center mb-4">My Works</h2>

        <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center h-100 shadow-sm bg-secondary">
              <Card.Body>
                <Card.Title className='text-dark'>Zebronics Clone App</Card.Title>
                <Card.Text>
                  Developed a responsive front-end clone of the Zebronics e-commerce platform, replicating its design and user experience using HTML, CSS, JavaScript, and Bootstrap for seamless navigation across devices.
                </Card.Text>
                <a href="https://ebinreji18.github.io/Zebronics/" target="_blank" rel="noopener noreferrer">
                  <Button variant="dark">View Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center h-100 shadow-sm bg-secondary">
              <Card.Body>
                <Card.Title className='text-dark'>Contacts Crud Application</Card.Title>
                <Card.Text>
                Developed a contact management app with full CRUD functionality using
                 React, JavaScript, HTML, CSS, and Bootstrap, featuring form validation
                 , state management with hooks, and a responsive design for all devices.
                </Card.Text>
                <a href="https://contact-pi-ecru.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="dark">View Project</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center h-100 shadow-sm bg-secondary">
              <Card.Body>
                <Card.Title className='text-dark'>BMI Calculator</Card.Title>
                <Card.Text>
                A responsive web application for calculating Body Mass Index (BMI) with real-time user input validation and health categorization. Built using React, HTML5, CSS, and Bootstrap for a smooth user experience.
                </Card.Text>
                <Button variant="dark" >View Project</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col className="d-flex justify-content-center">
            <Card className="work-card text-center h-100 shadow-sm bg-secondary">
              <Card.Body>
                <Card.Title className='text-dark'>Media Player</Card.Title>
                <Card.Text>
                A media player website built using React, offering video playback controls, playlist management, and a user-friendly interface designed for seamless media viewing and easy navigation for users.
                </Card.Text>
                <Button variant="dark" >View Project</Button> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Works;