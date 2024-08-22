import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './stellar.css'
import Hand from '../../assets/handbook.png'
const StellarSection = () => {
  return (
    <section id="Stellar">
      <Container>
        <div className="stellar_total">
          <Row>
            <Col lg={6} className="pe-0">
              <div className="stellar_left">
                <img src={Hand} alt="laptop" />
                <div className="overlay"></div>
                <div className="stellar_left_text">
                  <h3>Building stellar websites for early startups</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="stellar_right">
              <h3>Send inquiry</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <Form action="#">
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="url" placeholder="Paste your Figma design URL" />
                </Form.Group>
                <Button type="submit" className='send'>Send an Inquiry</Button>
                <div className="get_touch mt-3">
                  <a href="#">Get in touch with us &rarr;</a>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default StellarSection;
