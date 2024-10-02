import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services'
// import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Certificates from './components/certificates/Certificates'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Organizations from './components/organizations/Organizations'

const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Organizations />
      <Experience />
      {/* <Services /> */}
      <Education />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App