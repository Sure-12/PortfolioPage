import React from 'react'
import experince from './Data/experience.json'

export default function Experince() {
  return (
    <>
      <div className="container ex" id='experince'>
        <h1>Experince</h1>
        {
          experince.map((data)=>{
            return(
              <>
              <div key={data.id} className='ex-item text-center d-flex align-item-center justify-content-between' 
              data-aos="zoom-in"
              data-aos-duration="1000">
                <div className="left">
                  <img src={`/assest/${data.imageSrc}`} alt=""  className='text-center'/>
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4><span style={{color:'yellowgreen'}}>{data.startDate} {"-"} {data.endDate} </span><span style={{color:'yellow'}}>{data.location}</span></h4>
                  <h5><span style={{color:'yellow'}} >{data.experiences[0]}</span></h5>
                  <h5><span style={{color:'yellow'}}>{data.experiences[1]}</span></h5>
                </div>

              </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}
