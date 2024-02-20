
import './Styles/globals.scss'
import './Styles/navbar.scss'
import './Styles/landing.scss'
import './Styles/sectionheaders.scss'
import './Styles/experiencetiles.scss'
import './Styles/about.scss'
import './Styles/projects.scss'

import { Element } from 'react-scroll'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Element name="home">
        <Landing/>
      </Element>

      <Element name="about">
        <About/>
      </Element>
      
      <Element name='projects'>
        <Projects/>
      </Element>
    </>
  )
}

export default App
