import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagramSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sgyyzbf',    
      'template_q2jgy8m',    
      form.current,
      'QiiFeViLaBBJ3wUGM'      
    )
    .then((result) => {
      alert("Message sent successfully!");
      e.target.reset(); 
    }, (error) => {
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>

      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://github.com/Sure-12" target="_blank" rel="noreferrer" className="items">
          <BsGithub className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/suresh-sodha-39769524b/" target="_blank" rel="noreferrer" className="items">
          <FaLinkedin className="icons" />
        </a>
        <a href="mailto:sodhasureshnath662@gmail.com" target="_blank" rel="noreferrer" className="items">
          <MdOutlineMailOutline className="icons" />
        </a>
        <a href="https://www.instagram.com/sureshsodha25/" target="_blank" rel="noreferrer" className="items">
          <FaInstagramSquare className="icons" />
        </a>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-up" data-aos-duration="1000">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
