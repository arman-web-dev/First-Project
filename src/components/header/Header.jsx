import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import './header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar_total">
    <Container>
      <Navbar.Brand href="index.html">
    <img src={Logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent"/>
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto mb-2 mb-lg-0">
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
