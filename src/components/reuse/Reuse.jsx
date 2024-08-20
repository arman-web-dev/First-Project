import React from 'react'
import './reuse.css'

const Reuse = () => {
  return (
    <div>
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
    </div>
  )
}

export default Reuse
