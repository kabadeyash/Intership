import React from 'react'
import './hero.css'
import profile_img from '../../assets/yash.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Yash,</span>Full Stack developer</h1>
      <p>I am Full Stack Developer,With having a strong foundation in Full Stack. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contect">
                    <p></p>Connect With Me
                  </AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1u5bO4hFUWFGDExMj-xPpweWcRnHxl3MJ/view?usp=sharing">My Resume</a></div>
      </div>
    </div>
  )
}

export default hero
