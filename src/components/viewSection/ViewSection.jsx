import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './view.css'
import View1 from '../../assets/view_1.png'
import View2 from '../../assets/view_2.png'
import View3 from '../../assets/v_3.png'

const ViewSection = () => {
  return (
    <section id="View">
      <Container>
        <Row className="view_top">
          <Col lg={5}>
            <h3>View our projects</h3>
          </Col>
          <Col lg={2} className="offset-lg-5">
            <a href="work.html" target="_blank">View More &rarr;</a>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="view_left_image">
            <img src={View1} alt="" />
            <div className="view_img_hover">
              <div className="hover_text">
                <h4>Workhub office Webflow Webflow Design</h4>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                <a href="work.html">View project &rarr;</a>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <Row className="view_right_image">
              <Col lg={12} className="top_img">
              <img src={View2} alt="" />
                <div className="view_img_hover_r_t">
                  <div className="view_img_hover_r_text">
                    <h4>Unisaas Website Design</h4>
                    <a href="work.html">View portfolio &rarr;</a>
                  </div>
                </div>
              </Col>
              <Col lg={12} className="down_image">
              <img src={View3} alt="" />
                <div className="view_img_hover_r_t">
                  <div className="view_img_hover_r_text">
                    <h4>Unisaas Website Design</h4>
                    <a href="work.html">View portfolio &rarr;</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewSection;
