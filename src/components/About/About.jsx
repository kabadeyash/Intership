import React from 'react';
import './about.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/yash.jpeg';

const about = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am a passionate full-stack developer skilled in React.js, Java, C, and C++. With a strong foundation.</p><br />
            <p>I love building creative web applications and continuously exploring new technologies.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"95%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Node JS</p><hr style={{width:"45%"}} /></div>
            <div className="about-skill"><p>MYSQL</p><hr style={{width:"70%"}} /></div>
            
          </div>

        </div>

      </div>
      <div className="about-acivements">
        <div className="about-achivement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCES</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>5+</h1>
          <p>PROJECT COMPLECTED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default about;
