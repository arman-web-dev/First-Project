import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './process.css'

const Process = () => {
  return (
    <section id="Process">
      <Container>
        <div className="process_total">
          <div className="process_title">
            <h3>The process we follow</h3>
          </div>
          <div className="process_inner">
            <Row>
              <Col lg={3}>
                <div className="process_inner_all">
                  <h4>Planning</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                  <div className="circle"></div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="process_inner_all">
                  <h4>Conception</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                  <div className="circle"></div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="process_inner_all">
                  <h4>Design</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                  <div className="circle"></div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="process_inner_all">
                  <h4>Development</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Process
