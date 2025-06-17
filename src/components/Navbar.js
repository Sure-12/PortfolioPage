import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='container d-flex navbar justify-content-space align-item-center'
    data-aos="fade-down"
    data-aos-duration="1000"
    >
      <div className="left navIteams">Porfolio</div>
      <div className="right " >
        <a href="#home" className="navIteams">Home</a>
        <a href="#experince" className="navIteams">Experince</a>
        <a href="#skill" className="navIteams">Skills</a>
        <a href="#projects" className="navIteams">Projects</a>
        <a href="#contact" className="navIteams">Contact</a>
      </div>

    </div>
    </>
  )
}
