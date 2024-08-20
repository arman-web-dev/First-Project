import React from 'react'
import Fbanner from '../../assets/feature_banner.svg'
import './feature.css'

const FeatureBanner = () => {
  return (
    <div>
      <section id="Banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 banner_text">
            <h2>All the features you need</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <a href="pricing.html">View Pricing</a>
          </div>
          <div className="col-lg-6 offset-lg-1 banner_image">
           <img src={Fbanner} alt="" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FeatureBanner
