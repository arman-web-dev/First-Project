import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Men from '../../assets/smile.png'
import Girls from '../../assets/girls.png'
import './mission.css'
const Mission = () => {
    return (
       <div>
         <section id="Inspire">
       <Container>
           <Row className="inspire_total">
               <Col lg={6}>
                   <h4>Our Mission</h4>
                   <h3>Inspire, Innovate, Share</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </Col>
               <Col lg={{ span: 5, offset: 1 }}>
                   <img src={Men} alt="" />
               </Col>
               <Col lg={5}>
                   <img src={Girls} alt="" />        
                   </Col>
               <Col lg={{ span: 6, offset: 1 }}>
                   <h4>Our Vision</h4>
                   <h3>Laser focus</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </Col>
           </Row>
       </Container>
   </section>
       </div>
    )
}

export default Mission
