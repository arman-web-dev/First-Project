import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import specific icons
import './team.css';
import John from '../../assets/john.png';
import Sara from '../../assets/Sara.png';
import Paul from '../../assets/paul.png';
import Simon from '../../assets/simon.png';
import Eillaps from '../../assets/Ellipse 228.png';

const TeamSection = () => {
  return (
    <section id="TEAM">
      <Container>
        <div className="team_title">
          <h3>Meet our team</h3>
        </div>

        <div className="team_member">
          <Row>
            <Col lg={3}>
              <div className="member_inner">
                <div className="member_inner_img">
                  <img src={John} alt="" />
                  <div className="bg_color">
                    <img src={Eillaps} alt="" />
                  </div>
                  <div className="img_inner_style">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <h4>John Smith</h4>
                <h5>CEO</h5>
              </div>
            </Col>
            <Col lg={3}>
              <div className="member_inner">
                <div className="member_inner_img">
                  <img src={Simon} alt="" />
                  <div className="bg_color">
                    <img src={Eillaps} alt="" />
                  </div>
                  <div className="img_inner_style">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <h4>Simon Adams</h4>
                <h5>CTO</h5>
              </div>
            </Col>
            <Col lg={3}>
              <div className="member_inner">
                <div className="member_inner_img">
                  <img src={Paul} alt="" />
                  <div className="bg_color">
                    <img src={Eillaps} alt="" />
                  </div>
                  <div className="img_inner_style">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <h4>Paul Jones</h4>
                <h5>Design Lead</h5>
              </div>
            </Col>
            <Col lg={3}>
              <div className="member_inner">
                <div className="member_inner_img">
                  <img src={Sara} alt="" />
                  <div className="bg_color">
                    <img src={Eillaps} alt="" />
                  </div>
                  <div className="img_inner_style">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <h4>Sara Hardin</h4>
                <h5>Project Manager</h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
