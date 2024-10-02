import React from 'react'
import './organizations.css'
import { organizations } from './OrgData'

const Organizations = () => {
  return (
    <section id='organizations'>
      <h5>Work Experience</h5>
      <h2>Organizations</h2>

      <div className='container organizations__container'>
        {
          organizations.map((organization, index) => {
            return (
              <div className='organization__item'>
                <h3>{organization.title}</h3>
                <h4>{organization.location}</h4>
                <div className='organization__details'>
                  {/* <p className='organization__name'>{organization.description1}</p>
                  <br></br> */}
                  <p className='organization__name'>{organization.description2}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>

  )
}

export default Organizations