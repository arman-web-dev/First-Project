import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './subfooter.css'

const FooterSection = () => {
  return (
    <section id="Extra">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="footer_bottom">
              <h4>Copyright 2022, Finsweet.com</h4>
            </div>
          </Col>
          <Col lg={{ span: 7, offset: 1 }}>
            <div className="footer_bottom_nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FooterSection;
