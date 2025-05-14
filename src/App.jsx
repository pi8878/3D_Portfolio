// import React from 'react'

import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Testimonials from "./sections/Testimonials.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"

const App = () => {
  return (
    <>
        <NavBar/>
        <Hero />
        <ShowcaseSection/>
        <LogoSection/>
        <FeatureCards/>
        <ExperienceSection/>
        <TechStack/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App