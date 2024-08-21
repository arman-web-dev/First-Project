import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCaretRight } from 'react-icons/fa';
import './plan.css'

const Plan = () => {
    return (
        <section id="Plan">
            <Container>
                <Row>
                    <Col lg={6} className="offset-lg-3">
                        <div className="plan_title">
                            <h2>Our Pricing Plans</h2>
                            <p>
                                When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.
                            </p>
                        </div>
                    </Col>
                </Row>

                <div className="plan_inner">
                    <Row>
                        <Col lg={4}>
                            <div className="plan_inner_item">
                                <h3>$299</h3>
                                <a href="contact.html">Per Design</a>
                                <h4>Landing Page</h4>
                                <p>When you’re ready to go beyond prototyping in Figma,</p>
                                <h6><FaCaretRight className='icon-style' /> All limited links</h6>
                                <h6><FaCaretRight className='icon-style' /> Own analytics platform</h6>
                                <h6><FaCaretRight className='icon-style' /> Chat support</h6>
                                <h6><FaCaretRight className='icon-style' /> Optimize hashtags</h6>
                                <h6><FaCaretRight className='icon-style' /> Unlimited users</h6>
                                <h6><FaCaretRight className='icon-style' /> Website Page</h6>
                                <Button variant="primary">Get started</Button>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="plan_inner_item">
                                <h3>$399</h3>
                                <a href="contact.html">Per Design</a>
                                <h4>Website Page</h4>
                                <p>When you’re ready to go beyond prototyping in Figma,</p>
                                <h6><FaCaretRight className='icon-style' /> All limited links</h6>
                                <h6><FaCaretRight className='icon-style' /> Own analytics platform</h6>
                                <h6><FaCaretRight className='icon-style' /> Chat support</h6>
                                <h6><FaCaretRight className='icon-style' /> Optimize hashtags</h6>
                                <h6><FaCaretRight className='icon-style' /> Unlimited users</h6>
                                <h6><FaCaretRight className='icon-style' /> Website Page</h6>
                                <Button variant="primary">Get started</Button>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="plan_inner_item">
                                <h3>$499+</h3>
                                <a href="contact.html">Per Design</a>
                                <h4>Complex Project</h4>
                                <p>When you’re ready to go beyond prototyping in Figma,</p>
                                <h6><FaCaretRight className='icon-style' /> All limited links</h6>
                                <h6><FaCaretRight className='icon-style' /> Own analytics platform</h6>
                                <h6><FaCaretRight className='icon-style' /> Chat support</h6>
                                <h6><FaCaretRight className='icon-style' /> Optimize hashtags</h6>
                                <h6><FaCaretRight className='icon-style' /> Unlimited users</h6>
                                <h6><FaCaretRight className='icon-style' /> Website Page</h6>
                                <Button variant="primary">Get started</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Plan;
