import React from 'react';
import Slider from 'react-slick';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import specific icons
import './team.css';
import John from '../../assets/john.png';
import Sara from '../../assets/Sara.png';
import Paul from '../../assets/paul.png';
import Simon from '../../assets/simon.png';
import Eillaps from '../../assets/Ellipse 228.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const teamMembers = [
    { name: 'John Smith', position: 'CEO', image: John },
    { name: 'Simon Adams', position: 'CTO', image: Simon },
    { name: 'Paul Jones', position: 'Design Lead', image: Paul },
    { name: 'Sara Hardin', position: 'Project Manager', image: Sara }
  ];

  return (
    <section id="TEAM">
      <div className="team_title">
        <h3>Meet our team</h3>
      </div>

      <Slider {...settings} className="team_slider">
        {teamMembers.map((member, index) => (
          <div key={index} className="member_inner">
            <div className="member_inner_img">
              <img src={member.image} alt={member.name} />
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
            <h4>{member.name}</h4>
            <h5>{member.position}</h5>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TeamSection;
