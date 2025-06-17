import React, { useEffect, useRef } from 'react';
import resume from '../pdf/SureshSodha_Resume .pdf';
import hero from './Data/hero.json'
import Typed from 'typed.js';

export default function Home() {

  const typedRef = useRef(null);

  useEffect(()=>{
    const options ={
      strings:[
        "Welcome to my Profile",
        "My Name is Sodha Sureshnath",
        "I'm Frontend Developer",
        "I'm Software Developer"
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    };

    const typed = new Typed(typedRef.current, options);

    return()=>{
      typed.destroy();
    };
  }, [])
  return (
    <>
      <div className="container home d-flex flex-wrap justify-content-between align-items-center" id='home' style={{gap:"7rem"}}
      data-aos="fade-up-right"
      data-aos-duration="1000">
        <div className="home-left">
          <h1 ref={typedRef}></h1>
          <a href={resume} download="SureshSodha_Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right"></div>
        <div className="img d-flex justify-content-center align-items-center"
        data-aos="fade-up-left"
        data-aos-duration="1000">
          <img className='' src={`/assest/${hero.imgSrc}`} alt="" />
        </div>
      </div>
    </>
  )
}
