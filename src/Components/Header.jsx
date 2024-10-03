import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
<Navbar className="bg-body-tertiary">
  <Container>
    <Navbar.Brand style={{ fontSize: '2rem', fontWeight: 'bold' }}>Portfolio</Navbar.Brand>
    <a href="https://github.com/EbinReji18">
      <button className="btn btn-dark"><i className="fa-brands fa-github me-2" />GitHub</button>
    </a>
  </Container>
</Navbar>


    </>
  )
}

export default Header