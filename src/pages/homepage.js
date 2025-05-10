import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Introduction from '../components/introduction'
import About from '../components/about'
import Education from '../components/education'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Project from '../components/project'

const HomePage = () => {
    return (
        <>
            {<Navbar />}
            {<Introduction />}
            {<About />}
            {<Education />}
            {<Experience />}
            {<Skills />}
            {<Project />}
            {<Footer />}
        </>
    )
}

export default HomePage
