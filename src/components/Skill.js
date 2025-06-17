import React from 'react'
import skills from './Data/skills.json'

export default function Skill() {
  return (
    <>
      <div className="container skills" id='skill'>
        <h1>Skills</h1>
        <div className="items d-flex align-item-center justify-content-center row">
          {
            skills.map((data) => {
              return (
                <div className='col-6'>
                <div className="item home-card mt-5"
                data-aos="flip-left"
                data-aos-duration="1000"
                key={data.id}>
                  <img src={`/assest/${data.imageSrc}`} alt=""/>
                  <h3>{data.title}</h3>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
