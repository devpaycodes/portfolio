import React from 'react'
import './projects.css'
import { projects } from './ProjectData'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container projects__container'>
        {
          projects.map((project, index) => {
            return (
              <div className='project__item'>
                <h3>{project.title}</h3>
                <h4>{project.skills}</h4>
                <div className='project__details'>
                  <p className='project__name'>{project.description}</p>
                </div>
                <div className='project__item-cta'>
                  {
                    project.live
                    ? <a href={project.link} rel="noreferrer" className='btn btn-primary' target='_blank'>Live</a>
                    : <a href={project.link} rel="noreferrer" className='btn' target='_blank'>Github</a>
                  }  
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects