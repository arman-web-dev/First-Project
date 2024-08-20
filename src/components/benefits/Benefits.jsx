import React from "react";
import './benefits.css'
import Arman from '../../assets/small.png'
import pen from '../../assets/pen.png'
import group from '../../assets/group2.png' 
import logo from '../../assets/Logo 1.png'
import logo1 from '../../assets/Logo 2.png'
import logo2 from '../../assets/Logo 3.png'
import logo3 from '../../assets/Logo 4.png'
import logo4 from '../../assets/Logo 5.png'

const Benefits = () => {
  return (
    <section id="Benefits">
      <div className="container">
        <div className="benefits_total">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="benefits_title">
                <h3>The benefits of working with us</h3>
              </div>
            </div>
          </div>
          <div className="benefit_inner">
            <div className="row">
              <div className="col-lg-4">
                <div className="benefit_inner_items">
                <img src={Arman} alt="" />
                  <h4>Customize with ease</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="benefit_inner_items">
                 <img src={group} alt="" />
                  <h4>Perfectly Responsive</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="benefit_inner_items">
                <img src={pen} alt="" />
                  <h4>Friendly Support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row benefits_logo">
            <div className="col-lg-2">
              <h3>100.000+</h3>
              <h5>Finsweet Users</h5>
            </div>
            <div className="col-lg-2">
              <img src={logo} alt="" />
            </div>
            <div className="col-lg-2">
            <img src={logo1} alt="" />
            </div>
            <div className="col-lg-2">
            <img src={logo2} alt="" />
            </div>
            <div className="col-lg-2">
            <img src={logo3} alt="" />
            </div>
            <div className="col-lg-2">
            <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
