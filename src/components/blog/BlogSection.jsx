import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './blog.css'
import Man from '../../assets/man.png'
import Women from '../../assets/women.png'
import Laptop from '../../assets/laptop.png'

const BlogSection = () => {
  return (
    <section id="Blog">
      <Container>
        <Row className="blog">
          <Col xs={12}>
            <h2>Our blog</h2>
          </Col>
          <Col lg={4}>
            <img src={Man} alt="standing man" />
            <h5>19 Jan 2022</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="blog.html" target="_blank" rel="noopener noreferrer">Read More &rarr;</a>
          </Col>
          <Col lg={4}>
            <img src={Women} alt="women" />
            <h5>19 Jan 2022</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="blog.html" target="_blank" rel="noopener noreferrer">Read More &rarr;</a>
          </Col>
          <Col lg={4}>
            <img src={Laptop} alt="laptop" />
            <h5>19 Jan 2022</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="blog.html" target="_blank" rel="noopener noreferrer">Read More &rarr;</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;

