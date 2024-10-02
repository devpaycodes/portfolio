import React from 'react'
import './education.css'
import { FaSchool } from 'react-icons/fa'
import { FiBook } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { FiAward } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'
 
 const Education = () => {
  return (
    <section id='education'>
      <h5>What I have Studied</h5>
      <h2>Education</h2>

      <div className='container education__container'>
        <article className='education'>
          <div className='education__head'>
            <h3>Bachelor of Technology</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon' />
              <p>Indian Institute of Information Technology</p>
            </li>
            <li>
              <CiLocationOn className='education__list-icon' />
              <p>Surat, Gujarat - 394185</p>
            </li>
            <li>
              <FiBook className='education__list-icon' />
              <p>Computer Science and Engineering</p>
            </li>
            <li>
              <FiAward className='education__list-icon' />
              <p>CGPA - 8.70</p>
            </li>
            <li>
              <BiTime className='education__list-icon' />
              <p>2019 - 2023</p>
            </li>
          </ul>
        </article>
        {/* end of Service-1 */}
        <article className='education'>
          <div className='education__head'>
            <h3>HSC / Intermediate</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon' />
              <p>SV Trishool Junior College</p>
            </li>
            <li>
              <CiLocationOn className='education__list-icon' />
              <p>Warangal, Telangana-506015</p>
            </li>
            <li>
              <FiBook className='education__list-icon' />
              <p>MPC</p>
            </li>
            <li>
              <FiAward className='education__list-icon' />
              <p>98%</p>
            </li>
            <li>
              <BiTime className='education__list-icon' />
              <p>2017 - 2019</p>
            </li>
          </ul>
        </article>
        {/* end of Service-2 */}
        <article className='education'>
          <div className='education__head'>
            <h3>Secondary School Certificate</h3>
          </div>
          <ul className='education__list'>
            <li>
              <FaSchool className='education__list-icon' />
              <p>Vidyodaya High School</p>
            </li>
            <li>
              <CiLocationOn className='education__list-icon' />
              <p>Nekkonda, Warangal, Telangana-506122</p>
            </li>
            <li>
              <FiBook className='education__list-icon' />
              <p>Board of Telangana</p>
            </li>
            <li>
              <FiAward className='education__list-icon' />
              <p>CGPA - 9.5</p>
            </li>
            <li>
              <BiTime className='education__list-icon' />
              <p>2016 - 2017</p>
            </li>
          </ul>
        </article>
        {/* end of Service-2 */}
        
      </div>
    </section>
  )
}

export default Education