import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function contact() {
  return (
    <>
    <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
        data-aos="zoom-in-up"
         data-aos-duration="1000"
        >
        <a href='https://github.com/Sure-12' target='_blank' className="items">
                <BsGithub className='icons'/>
            </a>
            <a href='https://www.linkedin.com/in/suresh-sodha-39769524b/' target='_blank' className="items">
                <FaLinkedin className='icons'/>
            </a>
            <a href='mailto:sodhasuresh323@gmail.com' target='_blank' className="items">
                <MdOutlineMailOutline className='icons'/>
            </a>
            <a href='https://www.instagram.com/sureshsodha25/' target='_blank' className="items">
                <FaInstagramSquare className='icons'/>
            </a>
            
        </div>
    </div>
    </>
  )
}
