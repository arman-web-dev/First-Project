import React from 'react'
import logo from '../../assets/Logo 1.png'
import logo1 from '../../assets/Logo 2.png'
import logo2 from '../../assets/Logo 3.png'
import logo3 from '../../assets/Logo 4.png'
import logo4 from '../../assets/Logo 5.png'
import './brand.css'
const Brand = () => {
  return (
    <div>
       <section id="LOGO">
      <div className="container">
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
    </section>
    </div>
  )
}

export default Brand
