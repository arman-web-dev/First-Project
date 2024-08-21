import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './clientHome.css'
import jenny from '../../assets/jenny.png'

const ClientHome = () => {
  return (
    <section id="Client">
      <Container>
        <Row>
          <Col lg={4} className="client_left">
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </Col>
          <Col lg={7} className="offset-lg-1 client_right">
            <p>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>
            <div className="client_left_bottom">
              <Row>
                <Col lg={1}>
                  <img src={jenny} alt="women" />
                </Col>
                <Col lg={5}>
                  <h5>Jenny Wilson</h5>
                  <h6>Vice President</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ClientHome;
