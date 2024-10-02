import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DEVENDAR BANOTH</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#organizations'>Organizations</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#certificates'>Certificates</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/banoth.devender.397/' target='_block'><FaFacebookF/></a>
        <a href='https://www.instagram.com/deven_nayak01/' target='_block'><FiInstagram/></a>
        <a href='https://twitter.com/DevenBanoth' target='_block'><IoLogoTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Devendar Banoth. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default Footer