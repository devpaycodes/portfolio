import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import { useState } from 'react'  
   
const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title="Home" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" title="About" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#organizations" title="organizations" onClick={() => setActiveNav('#organizations')} className={activeNav==='#organizations' ? 'active' : ''}><MdOutlineWorkOutline /></a>
      <a href="#skills" title="Skills" onClick={() => setActiveNav('#skills')} className={activeNav==='#skills' ? 'active' : ''}><GiSkills /></a>
      <a href="#education" title="Education" onClick={() => setActiveNav('#education')} className={activeNav==='#education' ? 'active' : ''}><FaUserGraduate /></a>
      {/* <a href="#projects" title="projects" onClick={() => setActiveNav('#projects')} className={activeNav==='#projects' ? 'active' : ''}><MdOutlineWorkOutline /></a> */}
      <a href="#certificates" title="Certificates" onClick={() => setActiveNav('#certificates')} className={activeNav==='#certificates' ? 'active' : ''}><AiFillSafetyCertificate /></a>
      <a href="#contact" title="Contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>    
  )                             
}

export default Nav      