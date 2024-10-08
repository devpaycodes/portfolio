import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
          </ul>
        </article>
        {/* end of Service-1 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
          </ul>
        </article>
        {/* end of Service-2 */}
        <article className='service'>
          <div className='service__head'>
            <h3>Cloud Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Some service name</p>
            </li>
          </ul>
        </article>
        {/* end of Service-2 */}
        
      </div>
    </section>
  )
}

export default Services