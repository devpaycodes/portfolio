import React, { useRef, useState } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5agh49g', 'template_zjdro3o', form.current, 'atQlFMOzcMIrjyNwj')
    e.target.reset();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 60000000);
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact__container'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h3>Email</h3>
            <h6>devenbanoth07@gmail.com</h6>
            <a href='mailto:devenbanoth07@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h3>linkedIn</h3>
            <h6>devendarbanoth</h6>
            <a href="https://www.linkedin.com/in/devendarbanoth/" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h3>Whatsapp</h3>
            <h6>+91 78936 43630</h6>
            <a href="https://api.whatsapp.com/send?phone=+917893643630" target='_blank'>Send a Message</a>
          </article>
        </div>
    </section>
  )
}

export default Contact