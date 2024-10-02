import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Client Projects</h5>
              <small>3+</small>
            </article>
            <article className='about__card'>
              <VscNewFolder className='about__icon'/>
              <h5>Personal Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <div className='about__p'>
          <p>
          With two years of experience in software engineering, I am driven by a passion for innovation and a commitment to leveraging my technical expertise. As a Software Engineer, I strive to contribute meaningfully to dynamic professional environments by creating impactful solutions.
          </p>
          <p>
          Eager to expand my expertise and embrace new challenges, I approach every opportunity with enthusiasm and a positive attitude. With a dedication to continuous learning and effective communication, I'm poised to make meaningful contributions while advancing my own skills within the field.
          </p>
          </div>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About