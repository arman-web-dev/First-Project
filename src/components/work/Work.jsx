import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './work.css'
import One from '../../assets/one.png'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import Four from '../../assets/four.png'

const Work = () => {
    return (
        <section id="Work">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="work_text">
                            <h3>How we work</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <a href="Privacy.html" target="_blank">Get in touch with us &rarr;</a>
                        </div>
                    </Col>
                    <Col lg={6} className="offset-lg-1">
                        <Row className="work_inner">
                            <Col lg={6} className="mb-4">
                                <img src={One} alt="" />
                                <h3>Strategy</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </Col>
                            <Col lg={6} className="mb-4">
                               <img src={Two} alt="" />
                                <h3>Wireframing</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </Col>
                            <Col lg={6} className="mb-4">
                                <img src={Three} alt="" />
                                <h3>Design</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </Col>
                            <Col lg={6} className="mb-4">
                                <img src={Four} alt="" />                
                                <h3>Development</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Work;
