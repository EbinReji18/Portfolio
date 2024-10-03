import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='container bg-dark mt-4 p-5'>
      <Container>
        <Row className='text-center'>
          <Col md={4} className='mb-4'>
            <h5 className='text-uppercase mb-3'>Contact Information</h5>
            <p>
              <i className="fas fa-envelope text-white"></i>{'  '} 
              <a href="mailto:ebinofficial18@gmail.com" className='text-white ml-3'>ebinofficial18@gmail.com</a>
            </p>
            <p>
              <i className="fas fa-phone text-white"></i> {'  '} 
              <a href="tel:+917306194228" className='text-white ml-3'>+91 7306194228</a>
            </p>
          </Col>

          <Col md={4} className='mb-4'>
            <h5 className='text-uppercase mb-3'>Connect with Me</h5>
            <p>
              <i className="fab fa-linkedin text-white"></i> {'  '} 
              <a href="https://linkedin.com/in/ebinreji18" target="_blank" rel="noopener noreferrer" className='text-white ml-3'>LinkedIn</a>
            </p>
            <p>
              <i className="fab fa-github text-white"></i> {'  '} 
              <a href="https://github.com/EbinReji18" target="_blank" rel="noopener noreferrer" className='text-white ml-3'>GitHub</a>
            </p>
          </Col>

          <Col md={4} className='mb-4'>
            <h5 className='text-uppercase mb-3'>Location</h5>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe
                className='embed-responsive-item'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31316.80398185609!2d75.3646637070568!3d11.874477846960103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba440a603f1944b%3A0x5234bff400ea7b0!2sKannur%2C%20Kerala%20670101!5e0!3m2!1sen!2sin!4v1631371233745!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;