import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <div id='work' class="container">
            <div className="about-title">
                    <h1>My Services</h1>
                    <img src={theme_pattern} alt="" />
            </div>
            <div class="services-list">
                <div>
                    <i class="service"></i>
                    <h2>Web Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque dolores porro quaerat vel iusto neque nisi, perspiciatis, labore nam odio, accusantium ab assumenda est debitis! Animi repudiandae recusandae aspernatur.</p>
                    <a href="">learn more</a>
                </div>
                <div>
                    <i class="service"></i>
                    <h2>UI/UX Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque dolores porro quaerat vel iusto neque nisi, perspiciatis, labore nam odio, accusantium ab assumenda est debitis! Animi repudiandae recusandae aspernatur.</p>
                    <a href="">learn more</a>
                </div>
                <div>
                    <i class="service"></i>
                    <h2>App Design</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque dolores porro quaerat vel iusto neque nisi, perspiciatis, labore nam odio, accusantium ab assumenda est debitis! Animi repudiandae recusandae aspernatur.</p>
                    <a href="">learn more</a>
                </div>
            </div>

        </div>
  )
}

export default MyWork
