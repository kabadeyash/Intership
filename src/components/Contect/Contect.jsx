import React from 'react'
import './Contect.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contect = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2676e2b7-56f7-4b02-962f-90f0d2e06716");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contect' className='contect'>
        <div className="contect-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contect-section">
            <div className="contect-left">
                <h1>Let's Talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error veniam ducimus ea eveniet obcaecati culpa perspiciatis porro animi veritatis, reprehenderit magni at amet odit aspernatur provident soluta blanditiis excepturi!</p>
                <div className="contect-details">
                    <div className="contect-detail">
                        <img src={mail_icon} alt="" />
                        <p>kabadeyash23@gmail.com</p>
                    </div>
                    <div className="contect-detail">
                        <img src={call_icon} alt="" />
                        <p>+91 8956670832</p>
                    </div>
                    <div className="contect-detail">
                        <img src={location_icon} alt="" />
                        <p>Pimpri-Chinchwad,Pune</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contect-right">
                <label htmlFor="">Your Name:</label>
                <input type="text" placeholder="Enter Your Name" name="name" id="" />
                <label htmlFor="">Your Email:</label>
                <input type="text" placeholder="Enter Your Email" name="name" id="" />
                <label htmlFor="">Write Your Message:</label>
                <textarea name= "Message" rows="8" placeholder="Enter Your Message" id="" />
                <button type='Submit' className='contect-submit'>Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contect
