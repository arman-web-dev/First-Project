import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './weAre.css'
import Board from '../../assets/board.png'

function WhoWeAre() {
  return (
    <section id="Who_we">
      <Container>
        <div className="we_total">
          <Row>
            <h4>Who we are</h4>
            <Col lg={6}>
              <div className="we_left">
                <h3>Goal focussed</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="we_right">
                <h3>Continuous improvement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="we_img">
            <img src={Board} alt="" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default WhoWeAre;
