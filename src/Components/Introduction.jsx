import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

function Introduction() {
  return (
    <>
      <div className='container bg-dark mt-4'>
        <Row>
          <Col className='p-5' sm={12} md={7}>
            <h1 className='font-weight-bold'>EBIN REJI</h1>
            <h5>Full Stack Developer</h5>
            <p style={{ textAlign: "justify", color: "white" }} className='mt-3'>
              Hi, I am Ebin Reji, a 22-year-old web developer specializing in the MEARN stack (MongoDB, Express, React, Node.js). With a background in BCA,
              I build scalable and responsive web applications tailored to user needs.
              My focus is on crafting intuitive interfaces, optimizing performance, and delivering robust, cutting-edge solutions to modern web challenges.
            </p>
            
            <div className="mt-4">
              <a href='/Ebin Reji-Resume.pdf' target='_blank' rel='noopener noreferrer'>
                <Button variant='primary'>View Resume</Button>
              </a>
            </div>
          </Col>
          <Col className='py-4' sm={12} md={6}>

          </Col>
        </Row>
      </div>
    </>
  );
}

export default Introduction;