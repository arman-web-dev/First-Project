import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './questions.css'
const Questions = () => {
  return (
    <section id="Questions">
      <Container>
        <Row>
          <Col lg={4} className="ques_left">
            <h3>Frequently asked questions</h3>
            <a href="contact.html" target="_blank" rel="noopener noreferrer">Contact us for more info</a>
          </Col>
          <Col lg={7} className="offset-lg-1 ques_right">
            <Accordion defaultActiveKey="0">
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>01</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How much time does it take?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>02</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is your class naming convention?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>03</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      How do you communicate?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>04</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      I have a bigger project. Can you handle it?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>05</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      What is your class naming convention?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={1}>
                  <h2>06</h2>
                </Col>
                <Col lg={11}>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      How much time does it take?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Questions;
