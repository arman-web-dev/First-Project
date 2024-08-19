import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon1 from '../../assets/icon-1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon-3.png'
import Icon4 from '../../assets/Icon-4.png'
import Icon5 from '../../assets/Icon-5.png'
import Icon6 from '../../assets/Icon-6.png'
import './features.css'

const Features = () => {
  return (
    <section id="Features">
      <Container>
        <div className="feature_total">
          <Row className="feature_title">
            <Col lg={8} className="offset-lg-2 text-center">
              <h5>Features</h5>
              <h3>Design that solves problems, one product at a time</h3>
            </Col>
          </Row>
          <Row className="feature_total_inner">
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                    <img src={Icon1} alt="" />
                    <h4>Uses Client First</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                  <img src={Icon2} alt="" />
                  <h4>Two Free Revision</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                  <img src={Icon3} alt="" />
                  <h4>Template</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                  <img src={Icon4} alt="" />
                  <h4>24/7 Support</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                  <img src={Icon5} alt="" />
                  <h4>Quick Delivery</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4}>
              <div className="feature_inner">
                <Row>
                  <Col lg={10} className="offset-lg-1">
                  <img src={Icon6} alt="" />
                  <h4>Hands-on Approach</h4>
                    <p>
                      Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Features;
