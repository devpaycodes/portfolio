import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/devendarbanoth/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/devendarbanoth' target='_blank'><FaGithub /></a>
        <a href='https://x.com/DevenBanoth' target='_blank'><FaXTwitter /></a>
    </div>
  )
}

export default HeaderSocials