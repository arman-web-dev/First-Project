import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer_total">
          <Row>
            <Col lg={5}>
              <div className="footer_left_top">
                <Row>
                  <Col lg={12}>
                  <img src={Logo} alt="logo" />
                    <p>We are always open to discuss your project and improve your online presence.</p>
                  </Col>
                </Row>
              </div>

              <div className="footer_left_bottom d-flex">
                <div className="email">
                  <h4>Email me at </h4>
                  <h5>contact@website.com</h5>
                </div>
                <div className="contact">
                  <h4>Call us </h4>
                  <h5>0927 6277 28525</h5>
                </div>
              </div>
            </Col>

            <Col lg={{ span: 4, offset: 2 }} className="footer_right_top">
              <h3>Let's Talk!</h3>
              <p>We are always open to discuss your project, improve your online presence, and help with your UX/UI design challenges.</p>

              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

