import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './banner.css'
import right_b from '../../assets/banner.png'

const Banner = () => {
  return (
    <section id="Banner">
      <Container>
        <Row>
          <Col lg={6} className="banner_text">
            <h2>Building stellar websites for early startups</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <div>
              <Button variant="link" href="work.html" target="_blank" className='first_btn'>
                View our work
              </Button>
              <Button variant="link" href="pricing.html" target="_blank">
                View Pricing &rarr;
              </Button>
            </div>
          </Col>
          <Col lg={6} className="banner_image">
          <img src={right_b} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
