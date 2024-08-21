import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './clientFeature.css'
import Agency from '../../assets/agency.png'
import Lamp from '../../assets/lamp man.png'
import Support from '../../assets/support man.png'
import Delivery from '../../assets/delivery.png'

const ClientFeature = () => {
  return (
    <section id="Client">
      <Container>
        <Row className="client_all">
          <Col lg={5} className="client_text">
            <h4>Use Client-first</h4>
            <h3>Top agencies and freelancers around the world use Client-first</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </Col>
          <Col lg={6} className="offset-lg-1 client_img">
            <img src={Agency} alt="" />
          </Col>
        </Row>
      </Container>

      <div className="second_part">
        <Container>
          <Row className="client_all">
            <Col lg={6} className="client_img">
              <img src={Lamp} alt="" />
            </Col>
            <Col lg={5} className="offset-lg-1 client_text">
              <h4>Free Revision Rounds</h4>
              <h3>Get free Revisions and one week of free maintenance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="client_all">
          <Col lg={5} className="client_text">
            <h4>24/7 Support</h4>
            <h3>Working with us, you will be getting 24/7 priority support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </Col>
          <Col lg={6} className="offset-lg-1 client_img">
            <img src={Support} alt="" />
          </Col>
        </Row>
      </Container>

      <div className="four_part">
        <Container>
          <Row className="client_all">
            <Col lg={6} className="client_img">
              <img src={Delivery} alt="" />
            </Col>
            <Col lg={5} className="offset-lg-1 client_text">
              <h4>Quick Delivery</h4>
              <h3>Guaranteed 1 week delivery for standard five pager website</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ClientFeature;
