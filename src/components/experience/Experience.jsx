import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Frontend, Backend, Others, CloudServices } from './data'

const Experience = () => {
  return (
    <section id='skills'>
      <h5>What Knowledge I Have</h5>
      <h2>Skills and Technologies</h2>
      <div className='container experience__container'>
        {/* Backend Technologies */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {
              Backend.map(({ item, level }, index) => (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h5>{item}</h5>
                    {/* <small className='text-light'>{level}</small> */}
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        {/* FrontEnd Technologies */}
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {
              Frontend.map(({ item, level }, index) => (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h5>{item}</h5>
                    {/* <small className='text-light'>{level}</small> */}
                  </div>
                </article>
              ))
            }
          </div>
        </div>

        {/* Cloud Services */}
        <div className='experience__backend'>
          <h3>Cloud Services</h3>
          <div className='experience__content'>
            {
              CloudServices.map(({ item, level }, index) => (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h5>{item}</h5>
                    {/* <small className='text-light'>{level}</small> */}
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        {/* Frameworks and Databases */}
        <div className='experience__backend'>
          <h3>Others</h3>
          <div className='experience__content'>
            {
              Others.map(({ item, level }, index) => (
                <article key={index} className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h5>{item}</h5>
                    {/* <small className='text-light'>{level}</small> */}
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience