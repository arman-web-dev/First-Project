import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import group from '../../assets/group.png'
import './design.css'

const Design = () => {
  return (
    <div>
      <Container>
        <div className="about_us_total">
          <Row>
            <Col lg={5}>
              <div className="about_us_text">
                <h5>About us</h5>
                <h3>Our designs solve problems</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <div className="about_us_img">
                <img src={group} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Design
